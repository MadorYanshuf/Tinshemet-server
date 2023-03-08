import mongoose from "mongoose";

const incident = new mongoose.Schema({
  id: Number,
  title: String,
  time: String,
  weaponTypes: Array<string>,
  eventType: String,
  tag: String,
  description: String,
  location: {
    northing: Number,
    easting: Number
  },
  area: String,
  victimAmount: Number,
});

export const incidents = mongoose.model("incident", incident);
