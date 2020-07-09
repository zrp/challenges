import { uuid } from 'uuidv4';
import IHeroClassRepository from '../IHeroClassRepository';

import IHeroClassDto from 'modules/Heroes/dtos/IHeroClassDto';

interface heroClassProps {
  name: string;
}

class HeroClassRepository implements IHeroClassRepository {
  private heroClasses: IHeroClassDto[] = [];

  public async create({ name }: heroClassProps): Promise<IHeroClassDto> {
    const heroclass = { id: uuid(), name };
    this.heroClasses.push(heroclass);
    return heroclass;
  }

  public async findById(id: string): Promise<IHeroClassDto | undefined> {
    const heroclassfound = await this.heroClasses.find(
      heroclass => heroclass.id === id,
    );
    return heroclassfound;
  }

  public async findByName({
    name,
  }: heroClassProps): Promise<IHeroClassDto | undefined> {
    const heroclassfound = await this.heroClasses.find(heroclass =>
      heroclass.name.match(name),
    );

    return heroclassfound;
  }

  public async findAll(): Promise<IHeroClassDto[] | undefined> {
    return this.heroClasses;
  }
}

export default HeroClassRepository;
