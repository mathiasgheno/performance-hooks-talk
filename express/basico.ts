import * as express from 'express';
import {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json(200);
});

app.listen(() => {
  console.log('executando');
});