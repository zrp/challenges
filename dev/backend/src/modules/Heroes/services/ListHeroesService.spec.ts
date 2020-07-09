import 'reflect-metadata';
import FakeHeroRepository from '../repositories/fakes/FakeHeroRepository';
import FakeHeroClassRepository from '../repositories/fakes/FakeHeroClassRepository';

import ListHeroService from './ListHeroesService';

describe('ListHeroes', () => {
  it('should be able to list the heroes', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const listHeroService = new ListHeroService(fakeHeroRepository);
    const newHeroClass = await fakeHeroClassRepository.create({ name: 'S' });
    const hero1 = await fakeHeroRepository.create({
      name: 'hero1',
      classId: newHeroClass.id,
      lat: 123,
      lng: 123,
    });

    const hero2 = await fakeHeroRepository.create({
      name: 'hero2',
      classId: newHeroClass.id,
      lat: 123,
      lng: 123,
    });
    const hero3 = await fakeHeroRepository.create({
      name: 'hero3',
      classId: newHeroClass.id,
      lat: 123,
      lng: 123,
    });
    const heroes = await listHeroService.execute();

    expect(heroes).toEqual([hero1, hero2, hero3]);
  });
});
