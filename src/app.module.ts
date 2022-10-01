import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LiriumLibService} from '@app/lirium-lib'
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LiriumLibService],
})
export class AppModule {}
