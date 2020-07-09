import { injectable, inject } from 'tsyringe';

import IThreatsRepository from '../repositories/IThreatsRepository';
import IThreatDto from '../dtos/IThreatDto';

@injectable()
class CreateThreatservice {
  constructor(
    @inject('ThreatsRepository')
    private threatsRepository: IThreatsRepository,
  ) {}

  public async execute({
    monsterName,
    dangerLevel,
    lat,
    lng,
  }: IThreatDto): Promise<IThreatDto> {
    const threat = await this.threatsRepository.create({
      monsterName,
      dangerLevel,
      lat,
      lng,
    });

    return threat;
  }
}

export default CreateThreatservice;
