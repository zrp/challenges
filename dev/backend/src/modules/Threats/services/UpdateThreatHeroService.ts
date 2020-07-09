import IThreatHeroRepository from '../repositories/IThreatHeroRepository';
import { injectable, inject } from 'tsyringe';

import IThreatHeroDto from '../dtos/IThreatHeroDto';
import IHeroRepository from '../../../modules/Heroes/repositories/IHeroRepository';
@injectable()
class UpdatethreatHeroService {
  constructor(
    @inject('ThreatHeroRepository')
    private threatheroRepository: IThreatHeroRepository,
    @inject('HeroRepository')
    private heroRepository: IHeroRepository,
  ) {}
  public async execute({
    threatId,
    heroId,
  }: IThreatHeroDto): Promise<IThreatHeroDto> {
    const threat_hero = await this.threatheroRepository.findById({
      threatId,
      heroId,
    });
    threat_hero.isAlive = false;

    const threat_heroUpdated = await this.threatheroRepository.save(
      threat_hero,
    );

    const heroUpdated = await this.heroRepository.findById(heroId);
    heroUpdated.isAvailable = true;
    await this.heroRepository.save(heroUpdated);
    return threat_heroUpdated;
  }
}

export default UpdatethreatHeroService;
