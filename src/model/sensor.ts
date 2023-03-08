import mongoose from "mongoose";

const sensor = new mongoose.Schema({
  id: Number,
  location_x: Number,
  location_y: Number,
  timestamp: Number,
  __v: Number,
});

export const sensors = mongoose.model("sensor", sensor);
