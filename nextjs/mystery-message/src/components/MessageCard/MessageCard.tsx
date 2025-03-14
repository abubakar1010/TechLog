"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IMessage } from "@/models/user-model";
import axios from "axios";
import { toast } from "sonner";

type TProps = {
	message: IMessage;
	onMessageDelete: (messageId: string) => void;
};

const MessageCard = ({ message, onMessageDelete }: TProps) => {
	const handleDelete = async () => {
		const result = await axios.delete(`/api/delete-message/${message?._id}`);
		toast(result.data.message);
		onMessageDelete(message?._id);
	};
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button variant="outline">Show Dialog</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction onClick={() => handleDelete()}>
									Continue
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default MessageCard;
