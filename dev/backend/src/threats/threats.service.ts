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
    //buscar por herois que estejam perto e no rank adequado;
    //apos o match de hero X threat alocar o heroi (alterar lati & longi & tempo de fim da batalha)
    //gerar um registro na entidade de historico de threats
    const matchingHero = await this.heroService.getAvailableHero(
      occurrence.location,
      this.threatClassMap[occurrence.dangerLevel],
      occurrence,
    );
    // console.log('match!:', matchingHero);
    // Execute ação desejada com base na ocorrência recebida
    // Implemente a lógica para alocar o herói adequado com base na ameaça e seu rank
    // Use a lógica descrita nas regras do desafio para determinar o tempo de batalha e prioridades
    // console.log('Alocando herói para ameaça:', occurrence);
  }
}
