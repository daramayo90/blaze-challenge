import { Router } from 'express';
import { MatchesRoutes } from './matches/routes';
import { PlayersRoutes } from './players/routes';

export class AppRoutes {
   static get routes(): Router {
      const router = Router();

      router.use('/api/teams/:teamId', MatchesRoutes.routes);
      router.use('/api/teams/:teamId', PlayersRoutes.routes);

      return router;
   }
}
