import express, { Request, Response, Router } from 'express';

export const incidentsRouter: Router = express.Router();

incidentsRouter.get('/', async (req: Request, res: Response) => {});
