import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListThreatsService from '../../../services/ListThreatsService';
import ThreatCreateService from '../../../services/CreateThreatService';

class ThreatsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listThreatsService = container.resolve(ListThreatsService);
    const threats = await listThreatsService.execute();
    return response.json(threats);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const threatCreateService = container.resolve(ThreatCreateService);
    const { lat, lng, dangerLevel, monsterName } = request.body;
    const threat = await threatCreateService.execute({
      lat,
      lng,
      dangerLevel,
      monsterName,
    });

    return response.json(threat);
  }
}
export default ThreatsController;
