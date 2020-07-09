import 'reflect-metadata';
import FakeThreatRepository from '../repositories/fake/FakeThreatReposiotry';
import ListThreatsService from './ListThreatsService';

describe('ListThreatsService', () => {
  it('should be able to list threats', async () => {
    const fakeThreatRepository = new FakeThreatRepository();
    const listThreatsService = new ListThreatsService(fakeThreatRepository);

    const threat = await fakeThreatRepository.create({
      dangerLevel: 'God',
      monsterName: 'The Best',
      lat: 123456,
      lng: 123457,
    });
    const threats = await listThreatsService.execute();

    expect(threats.length).toBe(1);
  });
});
