import { inject, injectable } from 'tsyringe';
import IHeroClassRepository from '../repositories/IHeroClassRepository';

import IHeroClassDto from '../dtos/IHeroClassDto';

@injectable()
class ListHeroClassService {
  constructor(
    @inject('HeroClassRepository')
    private heroClassRepository: IHeroClassRepository,
  ) {}

  public async execute(): Promise<IHeroClassDto[]> {
    return this.heroClassRepository.findAll();
  }
}

export default ListHeroClassService;
