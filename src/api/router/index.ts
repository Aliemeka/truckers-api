import { Express, Request, Response } from 'express';
import truckRouter from './truck.router';

export default (app: Express) => {
  app.use('/trucks', truckRouter);
  app.get('/', (req: Request, res: Response) =>
    res.status(200).send('✔️ Server is online'),
  );
};
