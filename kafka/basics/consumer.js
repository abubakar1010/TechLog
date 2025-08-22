import { kafka } from "./index.js";

const group = process.argv[2];


const consumer_init = async () => {
	const consumer = kafka.consumer({ groupId: group });

	await consumer.connect();

	await consumer.subscribe({ topic: "driver-updates", fromBeginning: true });

	await consumer.run({
		eachMessage: async (params) => {
			console.log(
				`[GroupName: ${group}, Topic: ${params.topic}], Partition: ${params.partition}, Message: ${params.message.value}`
			);
		},
	});
};

consumer_init();
