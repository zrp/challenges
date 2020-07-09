import { getRepository, Repository } from 'typeorm';

import IHeroDTO from '../../../dtos/IHeroDTO';
import IHeroRepository from '../../../repositories/IHeroRepository';
import Hero from '../entities/Heroes';

interface IDamageLevel {
  damageLevel: string;
}

class HeroRepository implements IHeroRepository {
  private ormRepository: Repository<Hero>;

  constructor() {
    this.ormRepository = getRepository(Hero);
  }

  public async create({ name, classId, lat, lng }: IHeroDTO): Promise<Hero> {
    const hero = this.ormRepository.create({ name, classId, lat, lng });
    await this.ormRepository.save(hero);
    return hero;
  }

  public async findAll(): Promise<Hero[]> {
    const heroes = await this.ormRepository.find();
    return heroes;
  }

  public async findAllAvailable(damageLevel: string): Promise<Hero[]> {
    const heroes = await this.ormRepository.find({
      where: {
        isAvailable: true,
        classId: damageLevel,
      },
    });

    return heroes;
  }

  public async findById(id: string): Promise<Hero> {
    const hero = await this.ormRepository.findOne({
      where: {
        id,
      },
    });
    return hero;
  }

  public async findByName(name: string): Promise<Hero | undefined> {
    const hero = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return hero;
  }

  public async save(hero: Hero): Promise<Hero> {
    const heroSaved = await this.ormRepository.save(hero);
    return heroSaved;
  }

  public async remove(hero: Hero): Promise<void> {
    await this.ormRepository.remove(hero);
  }
}

export default HeroRepository;
