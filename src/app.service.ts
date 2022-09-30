import { LiriumLibService } from '@app/lirium-lib';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor (private liriumService: LiriumLibService) {}
  recieveOrder() {
    return this.liriumService.createOrder({})
  }

  sendOrder() {
    return this.liriumService.createOrder({})
  }
  buyOrder() {
    return this.liriumService.createOrder({})
  }

  sellOrder() {
    return this.liriumService.createOrder({})
  }
}
