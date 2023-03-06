import express, { Request, Response, Router } from 'express';
import { deleteIncident } from '../dal/incidentDal';
import { getAllIncidents } from '../dal/incidentDal';

class inc{
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
            res.status(400).send('Status: Bad Request');
        }
    };

    private async deleteIncident(req: Request, res: Response) {
        const id : number = parseInt(req.params.id);
    
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
    };
}

export const createRouter = new inc().createRouter();
export const deleteRouter = new inc().deleteRouter();