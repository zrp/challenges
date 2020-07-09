import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListThreatsWithStatus from '../../../services/ListThreatsWithStatusService';
import UpdateThreatHeroService from '../../../services/UpdateThreatHeroService';

class ThreatsHeroController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { isAlive } = request.query;
    const status = isAlive === '0' ? true : false;
    const listThreatsWithStatus = container.resolve(ListThreatsWithStatus);
    const threatsHero = await listThreatsWithStatus.execute(status);
    return response.json(threatsHero);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { threatId, heroId } = request.body;
    const updateThreatHeroService = container.resolve(UpdateThreatHeroService);
    const thredheroupdated = await updateThreatHeroService.execute({
      threatId,
      heroId,
    });
    return response.json(thredheroupdated);
  }
}

export default ThreatsHeroController;
