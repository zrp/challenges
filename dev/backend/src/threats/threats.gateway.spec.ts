import { Test, TestingModule } from '@nestjs/testing';
import { ThreatsGateway } from './threats.gateway';
import { ThreatsService } from './threats.service';

describe('ThreatsGateway', () => {
  let gateway: ThreatsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreatsGateway, ThreatsService],
    }).compile();

    gateway = module.get<ThreatsGateway>(ThreatsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
