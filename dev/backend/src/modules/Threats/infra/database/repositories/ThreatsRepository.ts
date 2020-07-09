import IThreatsRepository from 'modules/Threats/repositories/IThreatsRepository';
import IThreatDto from 'modules/Threats/dtos/IThreatDto';
import { Repository, getRepository } from 'typeorm';
import Threat from '../entities/Threat';

class ThreatsRepository implements IThreatsRepository {
  private ormRepository: Repository<Threat>;

  constructor() {
    this.ormRepository = getRepository(Threat);
  }

  public async create({
    monsterName,
    dangerLevel,
    lat,
    lng,
  }: IThreatDto): Promise<Threat> {
    const threatRegistered = this.ormRepository.create({
      monsterName,
      dangerLevel,
      lat,
      lng,
    });
    await this.ormRepository.save(threatRegistered);
    return threatRegistered;
  }

  public async findById(id: string): Promise<Threat> {
    const threat = await this.ormRepository.findOne(id);
    return threat;
  }

  public async findAll(): Promise<Threat[]> {
    const threats = await this.ormRepository.find();
    return threats;
  }
}

export default ThreatsRepository;
