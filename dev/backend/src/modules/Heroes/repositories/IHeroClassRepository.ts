import IHeroClassDto from '../dtos/IHeroClassDto';

export default interface IHeroClassRepository {
  create({ name }: IHeroClassDto): Promise<IHeroClassDto>;
  findById(id: string): Promise<IHeroClassDto | undefined>;
  findByName({ name }: IHeroClassDto): Promise<IHeroClassDto | undefined>;
  findAll(): Promise<IHeroClassDto[] | undefined>;
}
