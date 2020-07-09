import { container } from 'tsyringe';
import { Request, Response } from 'express';

import ListHeroClassService from '../../../services/ListHeroClassService';
import HeroClassService from '../../../services/CreateHeroClassService';

class HeroClassController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listHeroClassservice = container.resolve(ListHeroClassService);
    const heroClasses = await listHeroClassservice.execute();
    return response.json(heroClasses);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const heroclassService = container.resolve(HeroClassService);
    const { name } = request.body;

    const heroClass = await heroclassService.execute({ name });
    return response.json(heroClass);
  }
}

export default HeroClassController;
