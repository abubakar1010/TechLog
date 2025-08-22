import { kafka } from "./index.js";
import readline from "readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.setPrompt("> ");
rl.prompt();

const init_producer = async () => {
	rl.on("line", async (line) => {
		const [name, location] = line.split(" ");

		const producer = kafka.producer();

		await producer.connect();

		await producer.send({
			topic: "driver-updates",
			messages: [
				{
					partition: location === "Dhaka" ? 0 : 1,
					key: "driver-location",
					value: JSON.stringify({
						name,
						location,
					}),
				},
			],
		});
	}).on("close", async () => {
		await producer.disconnect();
	});
};

init_producer();
