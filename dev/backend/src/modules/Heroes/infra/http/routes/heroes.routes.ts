import { Router } from 'express';

import HeroesController from '../controllers/HeroesController';

const heroesRouter = Router();
const heroesController = new HeroesController();

heroesRouter.post('/', heroesController.store);
heroesRouter.get('/', heroesController.index);
heroesRouter.get('/:id', heroesController.show);
heroesRouter.put('/:id', heroesController.update);
heroesRouter.delete('/:id', heroesController.delete);

export default heroesRouter;
