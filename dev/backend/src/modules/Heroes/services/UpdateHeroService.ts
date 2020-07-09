import { injectable, inject } from 'tsyringe';
import IHeroRepository from '../repositories/IHeroRepository';

import IHeroClassRepository from '../repositories/IHeroClassRepository';
import IHeroDTO from '../dtos/IHeroDTO';

interface HeroProps {
  id: string;
  name?: string;
  classId?: string;
  isAvailable?: boolean;
  lat?: number;
  lng?: number;
}

@injectable()
class UpdateHeroService {
  constructor(
    @inject('HeroRepository')
    private heroRepository: IHeroRepository,
    @inject('HeroClassRepository')
    private heroClassRepository: IHeroClassRepository,
  ) {}
  public async execute({
    name,
    classId,
    id,
    isAvailable,
    lat,
    lng,
  }: HeroProps): Promise<IHeroDTO> {
    const hero = await this.heroRepository.findById(id);
    if (!hero) {
      throw new Error('Hero not found');
    }

    if (name) {
      const checkNameExist = await this.heroRepository.findByName(name);
      if (checkNameExist && checkNameExist.name !== hero.name) {
        throw new Error('Name already exist');
      }
    }

    if (classId) {
      const checkClassIdExist = await this.heroClassRepository.findById(
        classId,
      );
      if (!checkClassIdExist) {
        throw new Error('Class not found');
      }
    }

    hero.isAvailable = isAvailable;

    if (lat && lng) {
      hero.lat = lat;
      hero.lng = lng;
    }

    hero.name = name;
    hero.classId = classId;

    this.heroRepository.save(hero);

    return hero;
  }
}

export default UpdateHeroService;
