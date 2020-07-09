import 'reflect-metadata';
import FakeHeroRepository from '../repositories/fakes/FakeHeroRepository';
import FakeHeroClassRepository from '../repositories/fakes/FakeHeroClassRepository';
import UpdateHeroService from './UpdateHeroService';

describe('UpdateHero', () => {
  it('should be able to update a hero', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const updateHeroService = new UpdateHeroService(
      fakeHeroRepository,
      fakeHeroClassRepository,
    );

    const hero = await fakeHeroRepository.create({
      name: 'hero1',
      classId: '123455',
      lat: 123,
      lng: 123,
    });

    const newHeroClass = await fakeHeroClassRepository.create({ name: 'S' });

    await updateHeroService.execute({
      id: hero.id,
      name: 'hero 1',
      classId: newHeroClass.id,
    });

    expect(hero.name).toBe('hero 1');
    expect(hero.classId).toBe(newHeroClass.id);
  });

  it('should not be able to update hero nonexistent', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const updateHeroService = new UpdateHeroService(
      fakeHeroRepository,
      fakeHeroClassRepository,
    );

    await expect(
      updateHeroService.execute({
        name: 'hero1',
        classId: '123455',
        id: 'nonexistent',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to update the hero`s name with an existing name', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const updateHeroService = new UpdateHeroService(
      fakeHeroRepository,
      fakeHeroClassRepository,
    );
    await fakeHeroRepository.create({
      name: 'hero1',
      classId: '12345',
      lat: 123,
      lng: 123,
    });

    const hero = await fakeHeroRepository.create({
      name: 'hero2',
      classId: '12345',
      lat: 123,
      lng: 123,
    });

    await expect(
      updateHeroService.execute({
        name: 'hero1',
        id: hero.id,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
  it('should not be able to update the hero`s classId with an existing ClassId', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const updateHeroService = new UpdateHeroService(
      fakeHeroRepository,
      fakeHeroClassRepository,
    );
    const hero = await fakeHeroRepository.create({
      name: 'hero2',
      classId: '12345',
      lat: 123,
      lng: 123,
    });

    await expect(
      updateHeroService.execute({
        classId: 'nonexistent',
        id: hero.id,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
