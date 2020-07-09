import { Router } from 'express';
import heroesRouter from '../../../../modules/Heroes/infra/http/routes/heroes.routes';
import usersRouter from '../../../../modules/Users/infra/http/routes/users.routes';
import sessionRouter from '../../../../modules/Users/infra/http/routes/session.routes';
import heroClassRouter from '../../../../modules/Heroes/infra/http/routes/heroClass.routes';
import threatsHeroRouter from '../../../../modules/Threats/infra/http/routes/threatsHero.routes';
import ensureAutenticated from '../../../../middlewares/ensureAuthenticated';
import threatsRouter from '../../../../modules/Threats/infra/http/routes/threats.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);
routes.use(ensureAutenticated);
routes.use('/threats', threatsRouter);
routes.use('/heroes', heroesRouter);
routes.use('/threatshero', threatsHeroRouter);
routes.use('/heroclass', heroClassRouter);

export default routes;
