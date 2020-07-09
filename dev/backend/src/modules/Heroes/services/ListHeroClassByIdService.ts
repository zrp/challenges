import { inject, injectable } from 'tsyringe';
import IHeroClassRepository from '../repositories/IHeroClassRepository';

import IHeroClassDto from '../dtos/IHeroClassDto';

@injectable()
class ListHeroClassByIdService {
  constructor(
    @inject('HeroClassRepository')
    private heroClassRepository: IHeroClassRepository,
  ) {}

  public async execute(name: string): Promise<IHeroClassDto> {
    const heroClass = this.heroClassRepository.findByName({
      name,
    });
    if (!heroClass) {
      throw new Error('HeroClass not found');
    }

    return heroClass;
  }
}

export default ListHeroClassByIdService;
