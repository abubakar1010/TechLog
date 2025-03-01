import mongoose from "mongoose";

const connectToDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URI!);
		const connection = mongoose.connection;
		connection.on("connected", () => {
			console.log("MongoDB Connected");
		});
		connection.on("error", (error) => {
			console.log("MongoDB connection Error", error);
			process.exit();
		});
	} catch (error) {
		console.log("Oops! Failed to connect to DB", error);
	}
};

export default connectToDB;
