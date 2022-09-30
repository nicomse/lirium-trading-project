import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postRecieveOrder() {
    return this.appService.recieveOrder()
  }

  @Post()
  postSendOrder() {
    return this.appService.sendOrder()
  }
  @Post()
  postBuyOrder() {
    return this.appService.buyOrder()
  }

  @Post()
  postSellOrder() {
    return this.appService.sellOrder()
  }
}
