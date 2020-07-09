import IThreatHeroRepository from 'modules/Threats/repositories/IThreatHeroRepository';
import { Repository, getRepository } from 'typeorm';
import IThreatHeroDto from 'modules/Threats/dtos/IThreatHeroDto';
import ThreatHero from '../entities/ThreatHero';
import Heroes from '../../../../Heroes/infra/database/entities/Heroes';

class ThreatHeroRepository implements IThreatHeroRepository {
  private ormRepository: Repository<ThreatHero>;

  constructor() {
    this.ormRepository = getRepository(ThreatHero);
  }

  public async create({
    heroId,
    threatId,
  }: IThreatHeroDto): Promise<ThreatHero> {
    const threatheroAlocated = this.ormRepository.create({ threatId, heroId });
    await this.ormRepository.save(threatheroAlocated);
    return threatheroAlocated;
  }
  public async findAll(status: boolean): Promise<ThreatHero[]> {
    const threat_heroDefeated = await this.ormRepository
      .createQueryBuilder('threats_heroes')
      .select('threats_heroes.isAlive')
      .innerJoinAndSelect('threats_heroes.hero', 'hero')
      .innerJoinAndSelect('threats_heroes.threat', 'threats')
      .where('threats_heroes.isAlive= :status', { status })
      .getMany();

    return threat_heroDefeated;
  }
  public async findById({ threatId, heroId }: ThreatHero): Promise<ThreatHero> {
    const threat_hero = await this.ormRepository.findOne({
      where: {
        threatId,
        heroId,
      },
    });

    return threat_hero;
  }
  public async save(threat_hero: IThreatHeroDto): Promise<ThreatHero> {
    const threat_hero_updated = await this.ormRepository.save(threat_hero);
    return threat_hero_updated;
  }
}

export default ThreatHeroRepository;
