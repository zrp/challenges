import { inject, injectable } from 'tsyringe';
import IHeroRepository from '../repositories/IHeroRepository';
import AppError from '../../../share/errors/AppError';
import IHeroDTO from '../dtos/IHeroDTO';

@injectable()
class RemoveHeroService {
  constructor(
    @inject('HeroRepository')
    private heroRepository: IHeroRepository,
  ) {}

  public async execute(id: string): Promise<IHeroDTO> {
    const hero = await this.heroRepository.findById(id);

    if (!hero) {
      throw new AppError('Hero not found');
    }

    if (hero.threat_hero && hero.threat_hero.length > 0) {
      throw new AppError(
        'its not possible to delete hero with threat associated',
      );
    }

    await this.heroRepository.remove(hero);
    return hero;
  }
}

export default RemoveHeroService;
