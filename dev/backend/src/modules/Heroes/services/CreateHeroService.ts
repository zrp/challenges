import { inject, injectable } from 'tsyringe';
import IHeroRepository from '../repositories/IHeroRepository';
import IHeroDTO from '../dtos/IHeroDTO';

import IHeroClassRepository from '../repositories/IHeroClassRepository';

@injectable()
class CreateHeroService {
  constructor(
    @inject('HeroRepository')
    private heroRepository: IHeroRepository,

    @inject('HeroClassRepository')
    private heroClassRepository: IHeroClassRepository,
  ) {}

  public async execute({
    name,
    classId,
    lat,
    lng,
  }: IHeroDTO): Promise<IHeroDTO> {
    const checkHeroSameName = await this.heroRepository.findByName(name);
    if (checkHeroSameName) {
      throw new Error('Name already exist');
    }

    const checkHeroClassExist = await this.heroClassRepository.findById(
      classId,
    );

    if (!checkHeroClassExist) {
      throw new Error('Class is not exist');
    }

    const hero = await this.heroRepository.create({ name, classId, lat, lng });
    return hero;
  }
}

export default CreateHeroService;
