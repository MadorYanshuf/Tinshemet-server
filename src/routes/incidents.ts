import express, { Request, Response, Router } from 'express';
import { addIncident, deleteIncident, getAllIncidents } from '../dal/incidentDal';
import { Incident } from '../dal/incidentDal';

class inc {
    incidentsRouter: Router = express.Router();

    createRouter() {
        this.incidentsRouter.get('/', this.getall)

        return this.incidentsRouter;
    };

    deleteRouter() {
        this.incidentsRouter.get('/delete/:id', this.deleteIncident)

        return this.incidentsRouter;
    };

    private async getall(req: Request, res: Response) {
        try {
            const allIncidents = await getAllIncidents();
            res.send(allIncidents);
        } catch (error) {
            console.log(error);
            res.status(400).send('Bad Request');
        }
    };

    private async deleteIncident(req: Request, res: Response) {
        const id: string = req.params.id;
        try {
            await deleteIncident(id);
            res.status(200).send('Incident successfuly deleted');
        } catch (err) {
            res.status(404).send('Incident not found');
        }
    };
}

export const createRouter = new inc().createRouter();
export const deleteRouter = new inc().deleteRouter();
