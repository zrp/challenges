import { Router } from 'express';

import ThreatsHeroController from '../controllers/ThreatsHeroController';

const threatsHeroRouter = Router();
const threatheroController = new ThreatsHeroController();

threatsHeroRouter.get('/', threatheroController.index);

threatsHeroRouter.put('/', threatheroController.update);
export default threatsHeroRouter;
