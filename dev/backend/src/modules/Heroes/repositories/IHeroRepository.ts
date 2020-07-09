import IHeroDTO from '../dtos/IHeroDTO';

export default interface IHeroRepository {
  create(hero: IHeroDTO): Promise<IHeroDTO>;
  findAll(): Promise<IHeroDTO[]>;
  findById(id: string): Promise<IHeroDTO | undefined>;
  findAllAvailable(damageLevel: string): Promise<IHeroDTO[]>;
  findByName(name: string): Promise<IHeroDTO | undefined>;
  save(hero: IHeroDTO): Promise<IHeroDTO>;
  remove(hero: IHeroDTO): Promise<void>;
}
