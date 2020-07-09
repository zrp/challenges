import { inject, injectable } from 'tsyringe';
import IHeroRepository from '../repositories/IHeroRepository';

import IHeroDTO from '../dtos/IHeroDTO';

@injectable()
class ListHeroesService {
  constructor(
    @inject('HeroRepository')
    private ormRepository: IHeroRepository,
  ) {}

  public async execute(): Promise<IHeroDTO[] | undefined> {
    const hero = await this.ormRepository.findAll();
    return hero;
  }
}

export default ListHeroesService;
