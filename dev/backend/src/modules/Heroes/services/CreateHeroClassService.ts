import { inject, injectable } from 'tsyringe';
import IHeroClassRepository from '../repositories/IHeroClassRepository';
import HeroClass from '../infra/database/entities/Class';
import IHeroClassDto from '../dtos/IHeroClassDto';

@injectable()
class CreateHeroClassService {
  constructor(
    @inject('HeroClassRepository')
    private heroclassRepository: IHeroClassRepository,
  ) {}

  public async execute({ name }: IHeroClassDto): Promise<IHeroClassDto> {
    const checkNameHeroClassExist = await this.heroclassRepository.findByName({
      name,
    });

    if (checkNameHeroClassExist) {
      throw new Error('Name already exist');
    }

    const heroclass = await this.heroclassRepository.create({ name });
    return heroclass;
  }
}

export default CreateHeroClassService;
