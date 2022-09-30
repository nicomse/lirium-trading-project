import { LiriumLibService, createOrderDTO } from '@app/lirium-lib';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor (private liriumService: LiriumLibService) {}
  recieveOrder(recieveOrderDTO: createOrderDTO) {
    return this.liriumService.createOrder(recieveOrderDTO)
  }

  sendOrder(sendOrderDTO: createOrderDTO) {
    return this.liriumService.createOrder(sendOrderDTO)
  }
  buyOrder(buyOrderDTO: createOrderDTO) {
    return this.liriumService.createOrder(buyOrderDTO)
  }

  sellOrder(sellOrderDTO: createOrderDTO) {
    return this.liriumService.createOrder(sellOrderDTO)
  }
}
