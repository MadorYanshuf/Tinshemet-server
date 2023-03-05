const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const incident = new mongoose.Schema({
    id: Number,
    title: String,
    time: Date,
    weaponTypes: [String],
    eventType: String,
    tag: String,
    description: String,
    location: Location,
    area: String,
    victimAmount: Number,
  });

module.exports = mongoose.model("Incident", incident);