import { Router } from 'express';
import HeroClassController from '../controllers/HeroClassController';
const heroClassRouter = Router();
const heroClassController = new HeroClassController();

heroClassRouter.get('/', heroClassController.index);

heroClassRouter.post('/', heroClassController.store);

export default heroClassRouter;
