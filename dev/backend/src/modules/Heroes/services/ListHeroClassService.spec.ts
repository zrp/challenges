import 'reflect-metadata';
import FakeHeroClassRepository from '../repositories/fakes/FakeHeroClassRepository';
import ListHeroClassService from './ListHeroClassService';

describe('ListHeroClassService', () => {
  it('should be able to list all HeroClass', async () => {
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const listHeroClassService = new ListHeroClassService(
      fakeHeroClassRepository,
    );
    await fakeHeroClassRepository.create({
      name: 'S',
    });
    await fakeHeroClassRepository.create({
      name: 'B',
    });
    expect(await listHeroClassService.execute()).toHaveLength(2);
  });
});
