import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListHeroservice from '../../../services/ListHeroesService';
import ShowHeroService from '../../../services/ShowHeroService';
import CreateHeroservice from '../../../services/CreateHeroService';
import UpdateHeroservice from '../../../services/UpdateHeroService';
import RemoveHeroService from '../../../services/RemoveHeroService';

class HeroesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const heroservice = container.resolve(ListHeroservice);
    const heroes = await heroservice.execute();
    return response.json(heroes);
  }
  public async show(request: Request, response: Response): Promise<Response> {
    const heroservice = container.resolve(ShowHeroService);
    const { id } = request.params;

    const hero = await heroservice.execute(id);

    return response.json(hero);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const heroservice = container.resolve(CreateHeroservice);
    const { name, classId, lat, lng } = request.body;
    const hero = await heroservice.execute({ name, classId, lat, lng });
    return response.json(hero);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const heroservice = container.resolve(UpdateHeroservice);
    const { name, classId, isAvailable, lat, lng } = request.body;
    const { id } = request.params;
    const hero = await heroservice.execute({
      name,
      classId,
      id,
      isAvailable,
      lat,
      lng,
    });

    return response.json(hero);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const heroservice = container.resolve(RemoveHeroService);
    const { id } = request.params;
    const resp = await heroservice.execute(id);
    return response.status(201).send();
  }
}

export default HeroesController;
