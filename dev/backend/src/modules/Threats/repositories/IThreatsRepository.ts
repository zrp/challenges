import IThreatDto from '../dtos/IThreatDto';

export default interface IThreatsRepository {
  create(threat: IThreatDto): Promise<IThreatDto>;
  findById(id: string): Promise<IThreatDto>;
  findAll(): Promise<IThreatDto[]>;
}
