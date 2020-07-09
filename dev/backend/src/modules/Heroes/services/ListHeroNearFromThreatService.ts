import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';
import IHeroRepository from '../repositories/IHeroRepository';

import CalculateDistance from '../../../share/providers/CalculateDistance';
import IHeroDTO from '../dtos/IHeroDTO';

interface IRequestCoordinate {
  lat: number;
  lng: number;
  damageLevel: string;
}
interface IHeroeswithDistance extends IHeroDTO {
  distance: number;
}

@injectable()
class ListHeroNearFromThreatService {
  constructor(
    @inject('HeroRepository')
    private heroRepository: IHeroRepository,
  ) {}

  public async execute({
    lat,
    lng,
    damageLevel,
  }: IRequestCoordinate): Promise<IHeroeswithDistance> {
    const CoordinateThreat = { latitude: lat, longitude: lng };
    const heroes = await this.heroRepository.findAllAvailable(damageLevel);

    if (heroes.length <= 0) {
      throw new Error('no hero is available');
    }

    const heroWithDistance = heroes.map(hero => {
      return {
        ...hero,
        distance: CalculateDistance(
          { latitude: hero.lat, longitude: hero.lng },
          CoordinateThreat,
        ),
      };
    });

    const heroNearest = heroWithDistance.reduce((prev, curr) =>
      prev.distance < curr.distance ? prev : curr,
    );

    return heroNearest;
  }
}

export default ListHeroNearFromThreatService;
