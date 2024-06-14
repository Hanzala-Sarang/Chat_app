import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.MONGO_DB_URL;

const Connection = async () => {
  try {
    await mongoose.connect(mongoURL, { useUnifiedTopology: true });
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default Connection;
