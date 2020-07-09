import 'reflect-metadata';
import FakeHeroRepository from '../repositories/fakes/FakeHeroRepository';
import ShowHeroService from './ShowHeroService';

describe('ShowHeroService', () => {
  it('should be able to lis heroes', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const showHeroService = new ShowHeroService(fakeHeroRepository);

    const hero = await fakeHeroRepository.create({
      name: 'hero1',
      classId: '123455',
      lat: 123,
      lng: 123,
    });

    const hero2 = await fakeHeroRepository.create({
      name: 'hero2',
      classId: '123455',
      lat: 123,
      lng: 123,
    });
    const heroes = await showHeroService.execute(hero.id);

    expect(heroes).toBe(hero);
  });
});
