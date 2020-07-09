import 'reflect-metadata';
import FakeHeroClassRepository from '../repositories/fakes/FakeHeroClassRepository';
import ListHeroClassByIdService from './ListHeroClassByIdService';

describe('ListHeroClassByIdService', () => {
  it('should be able to list heroclass by id', async () => {
    const fakeheroClassRepository = new FakeHeroClassRepository();
    const listHeroClassByIdService = new ListHeroClassByIdService(
      fakeheroClassRepository,
    );

    const hero = await fakeheroClassRepository.create({
      name: 'A',
    });
    const heroes = await listHeroClassByIdService.execute(hero.name);
    expect(heroes.name).toBe('A');
  });
  it('should not be able to list heroclass by id', async () => {
    const fakeheroClassRepository = new FakeHeroClassRepository();
    const listHeroClassByIdService = new ListHeroClassByIdService(
      fakeheroClassRepository,
    );

    const heroClass = await fakeheroClassRepository.create({
      name: 'A',
    });

    const responseHeroClass = await listHeroClassByIdService.execute('S');
    expect(responseHeroClass).toBe(undefined);
  });
});
