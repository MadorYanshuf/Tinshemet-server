import express, { Request, Response, Router } from 'express';
import { getAllIncidents } from '../dal/incidentDal';

export const incidentsRouter: Router = express.Router();

incidentsRouter.get('/', async (req: Request, res: Response) => {await res.send(await getAllIncidents())});
