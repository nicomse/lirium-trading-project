import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { createOrderDTO } from '@app/lirium-lib'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postRecieveOrder(@Req() recieveOrderDTO: createOrderDTO, @Res() res) {
    return this.appService.recieveOrder(recieveOrderDTO)
  }

  @Post()
  postSendOrder(@Req() sendOrderDTO: createOrderDTO, @Res() res) {
    return this.appService.sendOrder(sendOrderDTO)
  }
  @Post()
  postBuyOrder(@Req() buyOrderDTO: createOrderDTO, @Res() res) {
    return this.appService.buyOrder(buyOrderDTO)
  }

  @Post()
  postSellOrder(@Req() sellOrderDTO: createOrderDTO, @Res() res) {
    return this.appService.sellOrder(sellOrderDTO)
  }
}
