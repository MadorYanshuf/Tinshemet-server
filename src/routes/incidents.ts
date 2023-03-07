import express, { Request, Response, Router } from 'express';
import { addIncident, deleteIncident } from '../dal/incidentDal';
import { getAllIncidents } from '../dal/incidentDal';
import { Incident } from '../dal/incidentDal';

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

incidentsRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400).send('Invalid ID');
        return;
    }

    try {
        await deleteIncident(id);
        res.status(200).send('Incident successfuly deleted');
    } catch (err) {
        res.status(404).send('Incident not found');
    }
});

incidentsRouter.post('/add', async (req: Request, res: Response) => {
    const incident: Incident = req.body;
    try {
        await addIncident(incident);
        res.status(200).send('Incident successfuly added');
    } catch (err) {
        res.status(404).send('Incident not found');
    }
});
