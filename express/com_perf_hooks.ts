import * as express from 'express';
import { performance, PerformanceObserver } from 'perf_hooks';

const app = express();

app.get('/', (req, res) => {
  performance.mark('/-inicio');
  res.json(200);
  performance.mark('/-fim');
  performance.measure('/', '/-inicio', '/-fim');
});

app.get('/async', async (req, res) => {
  performance.mark('async-inicio');
  await fakeAsync;
  res.json(200);
  performance.mark('async-fim');
  performance.measure('async', 'async-inicio', 'async-fim');
});

const fakeAsync = () => new Promise((resolve) => setTimeout(() => resolve(), 1000));

const obs = new PerformanceObserver((list) => {
  const [ metrica ] = list.getEntries();
  console.log(metrica.name);
});

obs.observe({entryTypes: ['measure']});

app.listen(2000,() => {
  console.log('executando');
});