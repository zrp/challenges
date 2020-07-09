import { inject, injectable } from 'tsyringe';
import IHeroRepository from '../repositories/IHeroRepository';

import IHeroDTO from '../dtos/IHeroDTO';

@injectable()
class ShowHeroService {
  constructor(
    @inject('HeroRepository')
    private ormRepository: IHeroRepository,
  ) {}

  public async execute(id: string): Promise<IHeroDTO | undefined> {
    const hero = await this.ormRepository.findById(id);
    return hero;
  }
}

export default ShowHeroService;
