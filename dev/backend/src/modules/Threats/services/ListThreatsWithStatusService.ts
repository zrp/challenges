import { injectable, inject } from 'tsyringe';

import IThreatHeroRepository from '../repositories/IThreatHeroRepository';

import IThreatHeroDto from '../dtos/IThreatHeroDto';

@injectable()
class ListThreatsWithStatusService {
  constructor(
    @inject('ThreatHeroRepository')
    private threatHeroRepository: IThreatHeroRepository,
  ) {}

  public async execute(status: boolean): Promise<IThreatHeroDto[]> {
    const threathero = await this.threatHeroRepository.findAll(status);
    return threathero;
  }
}
export default ListThreatsWithStatusService;
