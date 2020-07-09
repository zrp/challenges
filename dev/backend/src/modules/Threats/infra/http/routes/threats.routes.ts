import { Router } from 'express';
import { container } from 'tsyringe';
import ThreatsController from '../controllers/ThreatsController';

const threatsRouter = Router();
const threatsController = new ThreatsController();
threatsRouter.post('/', threatsController.store);

threatsRouter.get('/', threatsController.index);

export default threatsRouter;
