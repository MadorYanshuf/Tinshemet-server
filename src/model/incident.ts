import mongoose from "mongoose";

const incident = new mongoose.Schema({
  id: Number,
  title: String,
  time: Date,
  weaponTypes: [String],
  eventType: String,
  tag: String,
  description: String,
  location: {
    northing: Number,
    easting: Number
  },
  area: String,
  victimAmount: Number,
  wasRead: {
    type: Boolean,
    default: false,
  },
});

export const incidents = mongoose.model("Incident", incident);
