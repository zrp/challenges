import FakeThreatHeroRepository from '../repositories/fake/FakeThreatHeroRepository';
import FakeHeroClassRepository from '../../Heroes/repositories/fakes/FakeHeroClassRepository';
import FakeThreatRepository from '../repositories/fake/FakeThreatReposiotry';
import FakeHeroRepository from '../../Heroes/repositories/fakes/FakeHeroRepository';
import CreateThreatAlocateService from './CreateThreatAlocateService';
import ListHeroNearFromThreatService from '../../Heroes/services/ListHeroNearFromThreatService';
import Threat from '../infra/database/entities/Threat';
import ThreatHero from '../infra/database/entities/ThreatHero';

describe('CreateThreatAlocateService', () => {
  it('should be able to alocate a hero to defeat threat', async () => {
    const fakeThreatHeroRepository = new FakeThreatHeroRepository();
    const fakeThreatRepository = new FakeThreatRepository();
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const listHeroNearFromThreatService = new ListHeroNearFromThreatService(
      fakeHeroRepository,
    );
    const createThreatAlocateService = new CreateThreatAlocateService(
      fakeThreatHeroRepository,
      fakeThreatRepository,
      fakeHeroRepository,
    );
    const newHeroClass = await fakeHeroClassRepository.create({ name: 'S' });
    const hero1 = await fakeHeroRepository.create({
      name: 'hero1',
      lat: -5.836597,
      lng: -35.236002,
      classId: newHeroClass.id,
      isAvailable: true,
    });

    await fakeHeroRepository.create({
      name: 'hero2',
      lat: -5.836597,
      lng: -35.246007,
      classId: newHeroClass.id,
      isAvailable: true,
    });

    const threat = await fakeThreatRepository.create({
      dangerLevel: 'S',
      lat: -5.836597,
      lng: -35.236007,
      monsterName: 'Dragon',
    });

    const heroNearest = await listHeroNearFromThreatService.execute({
      lat: -5.836597,
      lng: -35.236007,
      damageLevel: 'S',
    });

    const threatHeroAlocated = await createThreatAlocateService.execute({
      heroId: heroNearest.id,
      threatId: threat.id,
    });

    expect(threatHeroAlocated.heroId).toBe(hero1.id);
  });
});
