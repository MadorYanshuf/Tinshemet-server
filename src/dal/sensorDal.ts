import { sensors } from "../model/sensor";
const db = require("../services/dbService");

export interface Incident {
    id?: Number,
    location_x: Number,
    location_y: Number,
    timestamp: Number,
    __v: Number,
}

export const getAllSensors = async () => sensors.find();