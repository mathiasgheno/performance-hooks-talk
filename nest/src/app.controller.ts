import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {measurePerformance} from "./annotations";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @measurePerformance
  getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
