import IThreatHeroDto from 'modules/Threats/dtos/IThreatHeroDto';
import { uuid } from 'uuidv4';
import IThreatHeroRepository from '../IThreatHeroRepository';
import ThreatHero from '../../infra/database/entities/ThreatHero';

class FakeThreatHeroRepository implements IThreatHeroRepository {
  private fakeRepository: IThreatHeroDto[] = [];

  public async create({
    heroId,
    threatId,
  }: IThreatHeroDto): Promise<ThreatHero> {
    const threathero = new ThreatHero();
    Object.assign(threathero, {
      id: uuid(),
      heroId,
      threatId,
      isAlive: true,
    });
    this.fakeRepository.push(threathero);
    return threathero;
  }
  public async findAll(status: boolean): Promise<IThreatHeroDto[]> {
    const threatHero = this.fakeRepository.filter(
      threatHero => threatHero.isAlive === status,
    );
    return threatHero;
  }
  public async findById({
    threatId,
    heroId,
  }: IThreatHeroDto): Promise<IThreatHeroDto> {
    const threat_hero = this.fakeRepository.find(
      threathero =>
        threathero.heroId === heroId && threathero.threatId === threatId,
    );
    return threat_hero;
  }
  public async save(threat_hero: IThreatHeroDto): Promise<IThreatHeroDto> {
    const threat_hero_found = this.fakeRepository.findIndex(
      threathero =>
        threathero.heroId === threat_hero.heroId &&
        threathero.threatId === threat_hero.threatId,
    );
    this.fakeRepository[threat_hero_found].isAlive = false;
    return this.fakeRepository[threat_hero_found];
  }
}

export default FakeThreatHeroRepository;
