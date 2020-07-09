import IThreatDto from '../../dtos/IThreatDto';
import IThreatsRepository from '../IThreatsRepository';

import { uuid } from 'uuidv4';

class FakeThreatRepository implements IThreatsRepository {
  private fakeRepository: IThreatDto[] = [];

  public async create({
    dangerLevel,
    lat,
    lng,
    monsterName,
  }: IThreatDto): Promise<IThreatDto> {
    const threat = {
      id: uuid(),
      dangerLevel,
      lat,
      lng,
      monsterName,
    };
    this.fakeRepository.push(threat);
    return threat;
  }

  public async findById(id: string): Promise<IThreatDto> {
    const threatfound = this.fakeRepository.find(threat => threat.id === id);
    return threatfound;
  }

  public async findAll(): Promise<IThreatDto[]> {
    const threats = this.fakeRepository;
    return threats;
  }
}
export default FakeThreatRepository;
