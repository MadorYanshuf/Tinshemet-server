import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { incidentsRouter } from './routes/incidents';
import { connectToMongo } from './services/dbService';

export const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.set('PORT', process.env.PORT || 8000);

app.get('/', (req: Request, res: Response) => {
  res.send('Get!!!');
});

app.use('/incidents', incidentsRouter);

app.listen(app.get('PORT'), () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${app.get('PORT')}`
  );
});

connectToMongo();
