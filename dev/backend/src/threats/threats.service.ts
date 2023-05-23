import { Injectable } from '@nestjs/common';
import { ThreatOccurrence } from './dto/threat.dto';
import { HerosService } from '../heros/heros.service';

@Injectable()
export class ThreatsService {
  constructor(private readonly heroService: HerosService) {}

  private threatClassMap = {
    God: [{ class: 'S', min: 5 * 60, max: 10 * 60 }],
    Dragon: [
      { class: 'A', min: 2 * 60, max: 5 * 60 },
      { class: 'S', min: 5 * 60, max: 10 * 60 },
    ],
    Tiger: [
      { class: 'B', min: 10, max: 20 },
      { class: 'A', min: 2 * 60, max: 5 * 60 },
      { class: 'S', min: 5 * 60, max: 10 * 60 },
    ],
    Wolf: [
      { class: 'C', min: 1, max: 2 },
      { class: 'B', min: 10, max: 20 },
      { class: 'A', min: 2 * 60, max: 5 * 60 },
      { class: 'S', min: 5 * 60, max: 10 * 60 },
    ],
  };

  async processThreatOccurrence(occurrence: ThreatOccurrence) {
    await this.heroService.getAvailableHero(
      occurrence.location,
      this.threatClassMap[occurrence.dangerLevel],
      occurrence,
    );
  }
}
