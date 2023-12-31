import "dotenv/config";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`Connect to Database Successfully! HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error Connecting to Database ${error}`);
    }
};


export { connectDB }