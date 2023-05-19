import { Test, TestingModule } from '@nestjs/testing';
import { HerosService } from './heros.service';

describe('HerosService', () => {
  let service: HerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HerosService],
    }).compile();

    service = module.get<HerosService>(HerosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
