import { useEffect, useId, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import io from 'socket.io-client'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { nanoid } from "nanoid";

interface Message {
	id: string;
	content: string;
	sender: string;
	timestamp: string;
}

type FilterType = "all" | "user" | "ai";

const socket = io("http://localhost:9191")

export function ChatInterface() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [filter, setFilter] = useState<FilterType>("all");



    console.log(messages)

	const handleSend = () => {
        
		if (input.trim()) {
			const newMessage: Message = {
				id: nanoid(),
				content: input.trim(),
				sender: String(localStorage.getItem("userId")),
				timestamp: String(new Date()),
			};
			// setMessages([...messages, newMessage]);
            const result =  socket.emit("chat", {newMessage})

            console.log("res",result)
			setInput("");
			// Simulate AI response
			// setTimeout(() => {
			// 	const aiMessage: Message = {
			// 		id: (Date.now() + 1).toString(),
			// 		content: `AI response to: "${input.trim()}"`,
			// 		sender: "ai",
			// 		timestamp: new Date(),
			// 	};
			// 	setMessages((prev) => [...prev, aiMessage]);
			// }, 10);
		}
	};

    useEffect(() => {
        localStorage.setItem("userId", nanoid())
        console.log(String(localStorage.getItem("userId")))
        socket.on("chat", (payload) => {
            console.log(payload)
            setMessages((prev) => [...prev, ...payload ])
        })
    },[])

	const filteredMessages = messages.filter((msg) => {
		if (filter === "all") return true;
		return msg.sender === filter;
	});

	return (
		<div className="flex flex-col h-screen bg-gray-100">
			<div className="p-4 bg-white border-b">
				<Select onValueChange={(value: FilterType) => setFilter(value)}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Filter messages" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Messages</SelectItem>
						<SelectItem value="user">User Messages</SelectItem>
						<SelectItem value="ai">AI Messages</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<ScrollArea className="flex-grow p-4">
				{filteredMessages.map((msg) => (
					<div
						key={msg.id}
						className={`mb-2 p-2 rounded-lg ${
							msg.sender === localStorage.getItem("userId") ? "bg-blue-200 ml-auto" : "bg-green-200"
						} max-w-[70%]`}
					>
						<p>{msg.content}</p>
						<p className="text-xs text-gray-500 mt-1">
							{msg.timestamp}
						</p>
					</div>
				))}
			</ScrollArea>
			<div className="p-4 bg-white border-t">
				<div className="flex space-x-2">
					<Input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type your message..."
						onKeyDown={(e) => e.key === "Enter" && handleSend()}
					/>
					<Button onClick={handleSend}>Send</Button>
				</div>
			</div>
		</div>
	);
}
