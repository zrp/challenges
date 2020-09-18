import express from 'express';
import HeroesController from './controllers/HeroesController';
import AmeacasController from './controllers/AmeacasController';
import AlocaHeroController from './controllers/AlocaHeroController';

const routes = express.Router();
const heroesControllers = new HeroesController();
const ameacasControllers = new AmeacasController();
const alocaheroControllers = new AlocaHeroController();

routes.get('/heroes/total', heroesControllers.totalheroes);
routes.get('/heroes', heroesControllers.index);
routes.post('/heroes', heroesControllers.create);
routes.post('/authenticate', heroesControllers.authenticate);
routes.put('/heroes/:id', heroesControllers.update);
routes.delete('/heroes/:id', heroesControllers.destroy);

routes.delete('/ameacas/:id', ameacasControllers.destroy);
routes.get('/ameacas', ameacasControllers.show);
routes.put('/ameacas', ameacasControllers.updateStatus);

routes.get('/alocahero', alocaheroControllers.index);
routes.put('/alocahero', alocaheroControllers.atualizaAmeaca);

export default routes;