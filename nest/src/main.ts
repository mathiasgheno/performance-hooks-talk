import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {PerformanceObserver} from "perf_hooks";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

const obs = new PerformanceObserver(list => {
  const entry = list.getEntries()[0];
  console.log(`Time for ('${entry.name}')`, entry.duration);
});

obs.observe({entryTypes: ['measure']});

bootstrap();
