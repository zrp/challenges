import 'reflect-metadata';
import FakeHeroRepository from '../repositories/fakes/FakeHeroRepository';
import FakeHeroClassRepository from '../repositories/fakes/FakeHeroClassRepository';
import RemoveHeroService from './RemoveHeroService';

import AppError from '../../../share/errors/AppError';

describe('RemoveHeroService', () => {
  it('should be able to remove hero', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const removeHeroService = new RemoveHeroService(fakeHeroRepository);
    const newHeroClass = await fakeHeroClassRepository.create({ name: 'S' });
    const threathero = [];
    const hero = await fakeHeroRepository.create({
      name: 'hero1',
      classId: newHeroClass.id,
      lat: 123,
      lng: 123,
      isAvailable: true,
    });
    const hero2 = await fakeHeroRepository.create({
      name: 'hero2',
      classId: newHeroClass.id,
      lat: 123,
      lng: 123,
      isAvailable: true,
    });
    await removeHeroService.execute(hero.id);
    const heroes = await fakeHeroRepository.findAll();
    expect(heroes).toEqual([hero2]);
  });

  it('should not be able to remove hero nonexistent', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const removeHeroService = new RemoveHeroService(fakeHeroRepository);
    const newHeroClass = await fakeHeroClassRepository.create({ name: 'S' });
    await fakeHeroRepository.create({
      name: 'hero1',
      classId: newHeroClass.id,
      lat: 123,
      lng: 123,
      isAvailable: true,
    });
    await fakeHeroRepository.create({
      name: 'hero2',
      classId: newHeroClass.id,
      lat: 123,
      lng: 123,
      isAvailable: true,
    });

    await expect(
      removeHeroService.execute('nonexistenthero'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
