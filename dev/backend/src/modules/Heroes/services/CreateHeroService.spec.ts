import 'reflect-metadata';
import FakeHeroRepository from '../repositories/fakes/FakeHeroRepository';
import FakeHeroClassRepository from '../repositories/fakes/FakeHeroClassRepository';
import CreateHeroService from './CreateHeroService';

describe('CreateHero', () => {
  it('should be able to create a hero', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const createHeroService = new CreateHeroService(
      fakeHeroRepository,
      fakeHeroClassRepository,
    );
    const newClass = await fakeHeroClassRepository.create({ name: 'S' });
    const hero = await createHeroService.execute({
      name: 'hero1',
      classId: newClass.id,
      lat: 123,
      lng: 123,
    });
    expect(hero).toHaveProperty('id');
  });

  it('should not be able to create a hero with same name', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const createHeroService = new CreateHeroService(
      fakeHeroRepository,
      fakeHeroClassRepository,
    );
    const newClass = await fakeHeroClassRepository.create({ name: 'S' });
    await createHeroService.execute({
      name: 'hero1',
      classId: newClass.id,
      lat: 123,
      lng: 123,
    });

    await expect(
      createHeroService.execute({
        name: 'hero1',
        classId: newClass.id,
        lat: 123,
        lng: 123,
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to create a hero with a classId nonexistent', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const createHeroService = new CreateHeroService(
      fakeHeroRepository,
      fakeHeroClassRepository,
    );

    await expect(
      createHeroService.execute({
        name: 'hero1',
        classId: 'nonexistent',
        lat: 123,
        lng: 123,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
