import { incidents } from "../model/incident";
const db = require("../services/dbService");

export interface Incident {
    id?: number;
    title: string;
    time?: Date;
    weaponTypes: string[];
    eventType: string;
    tag: string;
    description?: string;
    location: Location;
    area?: string;
    victimAmount?: number;
}

export interface Location {
    northing: number;
    easting: number;
}

export const getAllIncidents = async () => incidents.find();

export const addIncident = (incident: Incident) => incidents.collection.insertOne(incident);

export const deleteIncident = async (incidentId: string) => await incidents.deleteOne({ _id: incidentId });