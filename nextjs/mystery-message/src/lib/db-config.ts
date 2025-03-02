import mongoose from "mongoose";

type TConnectionInstance = {
	connectionState?: number;
};

const connectionInstance: TConnectionInstance = {};

const connectToDB = async (): Promise<void> => {
	if (connectionInstance.connectionState) {
		console.log("Database already connected!");
		return;
	}

	try {
		const dbConnectionResponse = await mongoose.connect(
			process.env.MONGO_URI || ""
		);

		connectionInstance.connectionState =
			dbConnectionResponse.connections[1].readyState;
	} catch (error) {
		console.log("Database connection failed!", error);
		process.exit(1);
	}
};

export default connectToDB;
