import express, { Request, Response, Router } from 'express';
import { getAllSensors } from '../dal/sensorDal';
import { Incident } from '../dal/sensorDal';
import { logData } from '../assets/Logger'

class sensor {
    sensorRouter: Router = express.Router();

    createRouter() {
        this.sensorRouter.get('/', this.allSensors.bind(this.allSensors.name));

        return this.sensorRouter;
    };

    private async allSensors(req: Request, res: Response) {
        try {
            logData(this);
            const allSensors = await getAllSensors();
            res.send(allSensors);
        } catch (error) {
            console.log(error);
            res.status(400).send('Bad Request');
        }
    };
}

export const sensorsRouter = new sensor().createRouter();