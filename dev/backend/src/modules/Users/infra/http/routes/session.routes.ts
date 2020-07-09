import { Router } from 'express';
import SessionController from '../controllers/SessionController';

const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post('/', sessionController.store);

export default sessionRouter;
