import mongoose from "mongoose";
require("dotenv").config();

export const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.URL as string, {
            user: process.env.DB_USERNAME,
            pass: process.env.PASSWORD,
            dbName: process.env.NAME,
        });
        console.log("Database connection successful");
    } catch (err) {
        console.log("Database connection error");
    }
};