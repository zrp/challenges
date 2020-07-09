import 'reflect-metadata';
import FakeThreatRepository from '../repositories/fake/FakeThreatReposiotry';
import CreateThreatService from './CreateThreatService';

describe('CreateThreatService', () => {
  it('should be able to create a Threat', async () => {
    const fakeThreatRepository = new FakeThreatRepository();
    const createThreatService = new CreateThreatService(fakeThreatRepository);

    const threat = await createThreatService.execute({
      dangerLevel: 'God',
      monsterName: 'The Best',
      lat: 123456,
      lng: 123457,
    });

    expect(threat.dangerLevel).toBe('God');
  });
});
