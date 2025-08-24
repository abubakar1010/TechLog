import { kafka } from "./index.js";



const init = async () => {
	const adminClient = kafka.admin();
	await adminClient.connect();
	// Create a topic
	await adminClient.createTopics({
		topics: [
			{
				topic: "driver-updates",
				numPartitions: 2,
			},
		],
	});
	await adminClient.disconnect();
};

init();
