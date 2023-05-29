import { Test, TestingModule } from '@nestjs/testing';
import { ThreatsService } from './threats.service';
import { HerosService } from '../heros/heros.service';
import { ThreatOccurrence } from './dto/threat.dto';
import { HistoryService } from '../history/history.service';
import { ThreatsGateway } from './threats.gateway';
import { PrismaModule } from '../prisma/prisma.module';

describe('ThreatsService', () => {
  let service: ThreatsService;
  let herosService: HerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ThreatsGateway, ThreatsService, HerosService, HistoryService],
    }).compile();

    service = module.get<ThreatsService>(ThreatsService);
    herosService = module.get<HerosService>(HerosService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('processThreatOccurrence', () => {
    it('should allocate the threat occurrence with an appropriate hero', async () => {
      // Mocking the hero service
      const mockGetAvailableHero = jest.spyOn(herosService, 'getAvailableHero');

      const threatOccurrence: ThreatOccurrence = {
        location: {
          lat: 123.45,
          lng: 67.89,
        },
        dangerLevel: 'God',
        monsterName: 'Some Monster',
        monster: {},
      };

      await service.processThreatOccurrence(threatOccurrence);

      // Verify that the getAvailableHero method was called with the correct parameters
      expect(mockGetAvailableHero).toHaveBeenCalledWith(
        threatOccurrence.location,
        [{ class: 'S', min: 5 * 60, max: 10 * 60 }],
        threatOccurrence,
      );
    });
  });
});
