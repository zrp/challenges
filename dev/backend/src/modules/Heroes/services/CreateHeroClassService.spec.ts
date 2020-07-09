import 'reflect-metadata';
import FakeHeroClassRepository from '../repositories/fakes/FakeHeroClassRepository';
import CreateHeroClassService from './CreateHeroClassService';

describe('CreateHeroClassService', () => {
  it('should be able to create HeroClass', async () => {
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const createHeroClassService = new CreateHeroClassService(
      fakeHeroClassRepository,
    );
    const newClass = await createHeroClassService.execute({ name: 'S' });

    expect(newClass).toHaveProperty('id');
  });
  it('should not be able to create HeroClass with name already exist ', async () => {
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const createHeroClassService = new CreateHeroClassService(
      fakeHeroClassRepository,
    );
    await createHeroClassService.execute({ name: 'S' });

    await expect(
      createHeroClassService.execute({ name: 'S' }),
    ).rejects.toBeInstanceOf(Error);
  });
});
