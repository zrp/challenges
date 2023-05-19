import { Test, TestingModule } from '@nestjs/testing';
import { ThreatsService } from './threats.service';

describe('ThreatsService', () => {
  let service: ThreatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreatsService],
    }).compile();

    service = module.get<ThreatsService>(ThreatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
