import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { TestPipePipe } from './test-pipe/test-pipe.pipe';

@UsePipes(TestPipePipe)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() dto: any): string {
    return this.appService.getHello();
  }
}
