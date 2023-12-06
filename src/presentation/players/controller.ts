import { Request, Response } from 'express';
import { PlayerRepository } from '../../domain/repositories/player.repository';
import { GetPlayers } from '../../domain/use-cases/players/get-players';

export class PlayersController {
   constructor(private readonly playerRepository: PlayerRepository) {}

   public getPlayersByTeam(req: Request, res: Response) {
      const teamId = req.params.teamId;

      new GetPlayers(this.playerRepository)
         .execute(teamId)
         .then((players) => res.json(players))
         .catch((error) => res.status(400).json({ error }));
   }
}
