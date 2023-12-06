import { Router } from 'express';
import { PlayersController } from './controller';
import { PlayerRepositoryImpl } from '../../infrastructure/repositories/player.repository.impl';
import { PlayerDataSourceImpl } from '../../infrastructure/data-source/player.data-source.impl';

export class PlayersRoutes {
   static get routes(): Router {
      const router = Router({ mergeParams: true });

      const datasource = new PlayerDataSourceImpl();
      const playerRepository = new PlayerRepositoryImpl(datasource);
      const playerController = new PlayersController(playerRepository);

      router.get('/players', playerController.getPlayersByTeam.bind(playerController));

      return router;
   }
}
