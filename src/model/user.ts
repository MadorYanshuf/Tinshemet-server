import mongoose from "mongoose";

const user = new mongoose.Schema({
  username: String,
  password: String,
});

export const users = mongoose.model("user", user);
