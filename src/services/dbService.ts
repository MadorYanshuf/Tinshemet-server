import mongoose from "mongoose";

const USERNAME: string = "tinshemetdev";
const PASSWORD: string = "Tinshemet123!@";
const NAME: string = "madorYanshufDev";
const URL: string = `mongodb://10.252.30.132`;

export const connectToMongo = async () => {
  try {
    await mongoose.connect(URL, {
      user: USERNAME,
      pass: PASSWORD,
      dbName: NAME,
    });
    console.log("Database connection successful");
  } catch (err) {
    console.log("Database connection error");
  }
};
