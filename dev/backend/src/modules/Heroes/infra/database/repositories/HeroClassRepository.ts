import { getRepository, Repository } from 'typeorm';

import IHeroClassDto from 'modules/Heroes/dtos/IHeroClassDto';
import IHeroClassRepository from '../../../repositories/IHeroClassRepository';
import HeroClass from '../entities/Class';

class HeroClassRepository implements IHeroClassRepository {
  private ormRepository: Repository<HeroClass>;

  constructor() {
    this.ormRepository = getRepository(HeroClass);
  }

  public async create({ name }: IHeroClassDto): Promise<HeroClass> {
    const heroclass = this.ormRepository.create({ name });
    await this.ormRepository.save(heroclass);
    return heroclass;
  }

  public async findById(id: string): Promise<HeroClass | undefined> {
    const heroclass = await this.ormRepository.findOne(id);
    return heroclass;
  }

  public async findByName({
    name,
  }: IHeroClassDto): Promise<HeroClass | undefined> {
    const heroclass = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return heroclass;
  }

  public async findAll(): Promise<HeroClass[] | undefined> {
    return this.ormRepository.find();
  }
}

export default HeroClassRepository;
