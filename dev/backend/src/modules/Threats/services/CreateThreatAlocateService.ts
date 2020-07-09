import { injectable, inject } from 'tsyringe';
import IHeroRepository from '../../Heroes/repositories/IHeroRepository';
import IThreatHeroRepository from '../repositories/IThreatHeroRepository';
import IThreatHeroDto from '../dtos/IThreatHeroDto';
import IThreatsRepository from '../repositories/IThreatsRepository';

@injectable()
class CreateThreatAlocateService {
  constructor(
    @inject('ThreatHeroRepository')
    private threatHeroRepository: IThreatHeroRepository,
    @inject('ThreatsRepository')
    private threatRepository: IThreatsRepository,
    @inject('HeroRepository')
    private heroRepository: IHeroRepository,
  ) {}

  public async execute({
    heroId,
    threatId,
  }: IThreatHeroDto): Promise<IThreatHeroDto> {
    const threat = await this.threatRepository.findById(threatId);
    if (!threat) {
      throw new Error('Threat nonexistent');
    }

    const hero = await this.heroRepository.findById(heroId);

    if (!hero) {
      throw new Error('Hero nonexistetnt');
    }
    const threatHeroAlocated = await this.threatHeroRepository.create({
      heroId,
      threatId,
    });
    hero.isAvailable = false;

    await this.heroRepository.save(hero);

    return threatHeroAlocated;
  }
}
export default CreateThreatAlocateService;
