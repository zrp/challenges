import FakeThreatHeroRepository from '../repositories/fake/FakeThreatHeroRepository';
import FakeThreatRepository from '../repositories/fake/FakeThreatReposiotry';
import FakeHeroRepository from '../../Heroes/repositories/fakes/FakeHeroRepository';
import ListThreatsWithStatusService from './ListThreatsWithStatusService';
import { uuid } from 'uuidv4';

describe('ListThreatsWithStatusService', () => {
  it('should be able to list threats', async () => {
    const fakeThreatHeroRepository = new FakeThreatHeroRepository();
    const fakeThreatRepository = new FakeThreatRepository();
    const fakeHeroRepository = new FakeHeroRepository();
    const listThreatsWithStatusService = new ListThreatsWithStatusService(
      fakeThreatHeroRepository,
    );

    const threat = await fakeThreatRepository.create({
      id: uuid(),
      dangerLevel: 'God',
      monsterName: 'The Best',
      lat: 123456,
      lng: 123457,
    });
    const heroId = uuid();

    const threatHero = await fakeThreatHeroRepository.create({
      threatId: uuid(),
      heroId,
    });

    const threats = await listThreatsWithStatusService.execute(true);

    expect(threats.length).toBe(1);
  });
});
