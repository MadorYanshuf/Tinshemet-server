import mongoose from "mongoose";

//const server: string = "10.252.30.132";
//const database: string = "incidents";

const USERNAME: string = "tinshemetdev";
const PASSWORD: string = "Tinshemet123!@";
const NAME: string = "mongoDB";
const URL = `mongodb://10.252.30.132`;

export const connectToMongo = async () => {
  try {
    mongoose.connect(URL, {
      retryWrites: true,
      w: "majority",
      user: USERNAME,
      pass: PASSWORD,
      dbName: NAME,
    });
    console.log("Database connection successful");
  } catch (err) {
    console.log("Database connection error");
  }
};
