import 'reflect-metadata';
import FakeThreatHeroRepository from '../repositories/fake/FakeThreatHeroRepository';
import FakeHeroRepository from '../../Heroes/repositories/fakes/FakeHeroRepository';
import UpdateThreatHeroService from './UpdateThreatHeroService';
import FakeThreatRepository from '../repositories/fake/FakeThreatReposiotry';

describe('UpdateThreatHeroService', () => {
  it('should be able to update status Threat', async () => {
    const fakeThreatHeroRepository = new FakeThreatHeroRepository();
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeThreatRepository = new FakeThreatRepository();
    const updateThreatHeroService = new UpdateThreatHeroService(
      fakeThreatHeroRepository,
      fakeHeroRepository,
    );

    const hero = await fakeHeroRepository.create({
      name: 'teste',
      classId: '123',
      lat: 123,
      lng: 123,
    });
    const threat = await fakeThreatRepository.create({
      dangerLevel: 'God',
      monsterName: 'Gargula',
      lat: 1222,
      lng: 1234,
    });
    const threat_Hero = await fakeThreatHeroRepository.create({
      threatId: threat.id,
      heroId: hero.id,
    });

    const threat_HeroUpdated = await updateThreatHeroService.execute({
      threatId: threat.id,
      heroId: hero.id,
    });

    expect(threat_HeroUpdated.isAlive).toBe(false);
  });
});
