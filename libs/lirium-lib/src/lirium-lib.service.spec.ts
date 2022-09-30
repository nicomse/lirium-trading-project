import { Test, TestingModule } from '@nestjs/testing';
import { LiriumLibService } from './lirium-lib.service';

describe('LiriumLibService', () => {
  let service: LiriumLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiriumLibService],
    }).compile();

    service = module.get<LiriumLibService>(LiriumLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
