import IThreatHeroDto from '../dtos/IThreatHeroDto';

export default interface IThreatHeroRepository {
  create(data: IThreatHeroDto): Promise<IThreatHeroDto>;
  findAll(status: boolean): Promise<IThreatHeroDto[]>;
  findById({ threatId, heroId }: IThreatHeroDto): Promise<IThreatHeroDto>;
  save(threat_hero: IThreatHeroDto): Promise<IThreatHeroDto>;
}
