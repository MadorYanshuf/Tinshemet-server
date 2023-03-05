import express, { Request, response, Response, Router } from 'express';

import { getAllIncidents } from '../dal/incidentDal';

export const incidentsRouter: Router = express.Router();

incidentsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allIncidents = await getAllIncidents();
        res.send(allIncidents);
    } catch (error) {
        console.log(error);
        res.status(400).send('Status: Bad Request');
    }
});