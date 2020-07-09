import IThreatsRepository from '../repositories/IThreatsRepository';
import { injectable, inject } from 'tsyringe';
import IThreatDto from '../dtos/IThreatDto';

@injectable()
class ListThreatsService {
  constructor(
    @inject('ThreatsRepository')
    private threatRepository: IThreatsRepository,
  ) {}

  public async execute(): Promise<IThreatDto[]> {
    const threats = await this.threatRepository.findAll();

    return threats;
  }
}

export default ListThreatsService;
