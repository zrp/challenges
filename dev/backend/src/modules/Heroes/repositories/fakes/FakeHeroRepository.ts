import IHeroDTO from 'modules/Heroes/dtos/IHeroDTO';
import { uuid } from 'uuidv4';
import IHeroRepository from '../IHeroRepository';

class FakeHeroRepository implements IHeroRepository {
  private heroes: IHeroDTO[] = [];

  public async create({
    name,
    classId,
    lat,
    lng,
    isAvailable,
  }: IHeroDTO): Promise<IHeroDTO> {
    const hero = {
      id: uuid(),
      name,
      classId,
      lat,
      lng,
      isAvailable,
    };
    this.heroes.push(hero);
    return hero;
  }

  public async findAll(): Promise<IHeroDTO[] | undefined> {
    return this.heroes;
  }

  public async findAllAvailable(): Promise<IHeroDTO[] | undefined> {
    return this.heroes.filter(hero => hero.isAvailable === true);
  }

  public async findById(id: string): Promise<IHeroDTO | undefined> {
    const heroFound = this.heroes.find(hero => hero.id === id);
    return heroFound;
  }

  public async findByName(name: string): Promise<IHeroDTO | undefined> {
    const heroFound = this.heroes.find(hero => hero.name.match(name));
    return heroFound;
  }

  public async save(hero: IHeroDTO): Promise<IHeroDTO> {
    const herofound = this.heroes.findIndex(heroIdx => heroIdx.id === hero.id);
    this.heroes[herofound] = hero;
    return hero;
  }

  public async remove(hero: IHeroDTO): Promise<void> {
    const heroIndex = this.heroes.findIndex(
      heroList => heroList.id === hero.id,
    );

    this.heroes.splice(heroIndex, 1);
  }
}

export default FakeHeroRepository;
