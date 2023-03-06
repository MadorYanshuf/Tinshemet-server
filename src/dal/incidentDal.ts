/*
** Here you will write the dal for the incidents!
*/

export interface Incident {
    id?: number;
    title: string; 
    time?: Date; //change to timestamp?
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


export const getAllIncidents = () => {}

export const getAllNewIncidents = () => {}

export const markAllIncidentsAsRead = () => {}

export const addIncident = (incident: Incident) => {}

export const deleteIncident = async (incidentId: number) => {}