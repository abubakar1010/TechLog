import { Kafka } from "kafkajs";

export const kafka = new Kafka({
	clientId: "ride-hailing",
	brokers: ["localhost:9092"],
});