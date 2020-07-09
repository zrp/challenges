import { container } from 'tsyringe';

import IUserRepository from '../../modules/Users/repositories/IUserRepository';
import UserRepository from '../../modules/Users/infra/database/repositories/UserRepository';

import IHeroClassRepository from '../../modules/Heroes/repositories/IHeroClassRepository';
import HeroClassRepository from '../../modules/Heroes/infra/database/repositories/HeroClassRepository';

import IHeroRepository from '../../modules/Heroes/repositories/IHeroRepository';
import HeroRepository from '../../modules/Heroes/infra/database/repositories/HeroesRepository';

import IThreatsRepository from '../../modules/Threats/repositories/IThreatsRepository';
import ThreatsRepository from '../../modules/Threats/infra/database/repositories/ThreatsRepository';

import IThreatHeroRepository from '../../modules/Threats/repositories/IThreatHeroRepository';
import ThreatsHeroRepository from '../../modules/Threats/infra/database/repositories/ThreatHeroRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IHeroClassRepository>(
  'HeroClassRepository',
  HeroClassRepository,
);
container.registerSingleton<IHeroRepository>('HeroRepository', HeroRepository);
container.registerSingleton<IThreatsRepository>(
  'ThreatsRepository',
  ThreatsRepository,
);
container.registerSingleton<IThreatHeroRepository>(
  'ThreatHeroRepository',
  ThreatsHeroRepository,
);
