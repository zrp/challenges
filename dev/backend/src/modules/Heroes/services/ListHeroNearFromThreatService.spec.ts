import 'reflect-metadata';
import ListHeroNearFromThreatService from './ListHeroNearFromThreatService';
import FakeHeroRepository from '../repositories/fakes/FakeHeroRepository';
import FakeHeroClassRepository from '../repositories/fakes/FakeHeroClassRepository';
import CalculateDistance from '../../../share/providers/CalculateDistance';

describe('ListHeroNearFromThreatService', () => {
  it('should be able to list heroes  your distance between threat', async () => {
    const fakeHeroRepository = new FakeHeroRepository();
    const fakeHeroClassRepository = new FakeHeroClassRepository();
    const listHeroNearFromThreatService = new ListHeroNearFromThreatService(
      fakeHeroRepository,
    );
    const CorrdenateThreat = { latitude: -5.836597, longitude: -35.236007 };
    const newClass = await fakeHeroClassRepository.create({ name: 'S' });
    const hero1 = await fakeHeroRepository.create({
      name: 'hero1',
      classId: newClass.id,
      lat: -5.83186,
      lng: -35.248971,
      isAvailable: false,
    });
    const hero2 = await fakeHeroRepository.create({
      name: 'hero2',
      classId: newClass.id,
      lat: -5.83186,
      lng: -35.248971,
      isAvailable: true,
    });
    await fakeHeroRepository.create({
      name: 'hero3',
      classId: newClass.id,
      lat: -5.897122,
      lng: -35.243907,
      isAvailable: true,
    });

    const heroNearest = await listHeroNearFromThreatService.execute({
      lat: -5.836597,
      lng: -35.236007,
      damageLevel: 'S',
    });

    const distance = CalculateDistance(
      { latitude: hero1.lat, longitude: hero1.lng },
      CorrdenateThreat,
    );
    expect(heroNearest.distance).toBe(distance);
  });
});
