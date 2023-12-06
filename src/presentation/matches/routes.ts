import { Router } from 'express';
import { MatchDataSourceImpl } from '../../infrastructure/data-source/match.data-source.impl';
import { MatchRepositoryImpl } from '../../infrastructure/repositories/match.repository.impl';
import { MatchesController } from './controller';

export class MatchesRoutes {
   static get routes(): Router {
      const router = Router({ mergeParams: true });

      const datasource = new MatchDataSourceImpl();
      const matchRepository = new MatchRepositoryImpl(datasource);
      const matchController = new MatchesController(matchRepository);

      router.get('/matches', matchController.getMatchesByTeam.bind(matchController));

      return router;
   }
}
