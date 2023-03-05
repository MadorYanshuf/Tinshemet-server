import express, { Request, Response, Router } from 'express';

import { getAllIncidents } from '../dal/incidentDal';

export const incidentsRouter: Router = express.Router();

incidentsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allIncidents = await getAllIncidents();
        res.send(allIncidents);
    } catch (error: any) {
        console.log(error.message);
        res.send("Error => " + error.message);
    }
});