import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LiriumLibService } from './lirium-lib.service';

@Module({
  imports: [HttpModule],
  providers: [LiriumLibService],
  exports: [LiriumLibService],
})
export class LiriumLibModule {}
