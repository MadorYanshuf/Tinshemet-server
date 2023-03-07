import express, { Request, Response, Router } from 'express';
import { getAllIncidents, deleteIncident, addIncident } from '../dal/incidentDal';
import { Incident } from '../dal/incidentDal';

const logData = (funcName: any, data: Object = "None") => {
    console.log("--------------------");
    console.log("[Function logged]:", funcName);
    console.log("[Data inserted]:", data);
    console.log("--------------------");
}

class inc {
    incidentsRouter: Router = express.Router();

    createRouter() {
        this.incidentsRouter.get('/', this.getall.bind(this.getall.name));
        this.incidentsRouter.delete('/delete/:id', this.deleteIncident.bind(this.deleteIncident.name));
        this.incidentsRouter.post('/add', this.postIncident.bind(this.postIncident.name));

        return this.incidentsRouter;
    };

    private async getall(req: Request, res: Response) {
        try {
            logData(this);
            const allIncidents = await getAllIncidents();
            res.send(allIncidents);
        } catch (error) {
            console.log(error);
            res.status(400).send('Bad Request');
        }
    };

    private async deleteIncident(req: Request, res: Response) {
        logData(this, req.params);
        const id: string = req.params.id;

        try {
            await deleteIncident(id);
            res.status(200).send('Incident successfuly deleted');
        } catch (err) {
            res.status(404).send('Incident not found');
        }
    };

    private async postIncident(req: Request, res: Response) {
        logData(this, req.body);
        const incident: Incident = req.body;

        try {
            await addIncident(incident);
            res.status(200).send('Incident successfuly added');
        } catch (err) {
            res.status(404).send('Incident not found');
        }
    };
}

export const createRouter = new inc().createRouter();
