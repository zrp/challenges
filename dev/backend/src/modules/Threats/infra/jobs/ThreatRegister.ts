import { container } from 'tsyringe';

import ThreatService from '../../services/CreateThreatService';
import ListHeroNearFromThreatService from '../../../Heroes/services/ListHeroNearFromThreatService';
import ListHeroClassByIdService from '../../../Heroes/services/ListHeroClassByIdService';
import CreateThreatAlocateService from '../../services/CreateThreatAlocateService';

const rank = [
  { damageLevel: 'S', type: 'God' },
  { damageLevel: 'A', type: 'Dragon' },
  { damageLevel: 'B', type: 'Tiger' },
  { damageLevel: 'C', type: 'Wolf' },
];

class ThreatRegister {
  public async handle({ data }): Promise<void> {
    const threatService = container.resolve(ThreatService);
    const listHeroNearestService = container.resolve(
      ListHeroNearFromThreatService,
    );
    const listHeroClassByIdService = container.resolve(
      ListHeroClassByIdService,
    );
    const createThreatAlocateService = container.resolve(
      CreateThreatAlocateService,
    );

    //recebe os dados da vila via socket
    const { monsterName, dangerLevel, location } = data.data;

    // salva nova ameaça no BD
    const threat = await threatService.execute({
      monsterName,
      dangerLevel,
      lat: location[0].lat,
      lng: location[0].lng,
    });

    // retorna id da Classe de heroi
    const Heroclass = await listHeroClassByIdService.execute(
      rank.find(level => level.type === dangerLevel).damageLevel,
    );

    // retorna heroi disponivel com a Classe Informada
    const heroAvailable = await listHeroNearestService.execute({
      lat: location[0].lat,
      lng: location[0].lng,
      damageLevel: Heroclass.id,
    });

    await createThreatAlocateService.execute({
      threatId: threat.id,
      heroId: heroAvailable.id,
    });
  }

  public key = 'ThreatRegister';
}

export default ThreatRegister;
