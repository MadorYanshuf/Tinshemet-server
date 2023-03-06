import mongoose from "mongoose";

const USERNAME: string = "tinshemetdev";
const PASSWORD: string = "Tinshemet123!@";
const NAME: string = "incidents";
const URL = `mongodb://10.252.30.132`;

export let mongooseClient: typeof mongoose;

export const connectToMongo = async () => {
  try {
    mongooseClient = await mongoose.connect(URL, {
      user: USERNAME,
      pass: PASSWORD,
      dbName: NAME,
    });
    console.log("Database connection successful");
  } catch (err) {
    console.log("Database connection error");
  }
};