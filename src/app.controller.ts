import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postRecieveOrder() {
    return null
  }

  @Post()
  postSendOrder() {
    return null
  }
  @Post()
  postBuyOrder() {
    return null
  }

  @Post()
  postSellOrder() {
    return null
  }
}
