import { Request, Response } from 'express';
import { MatchRepository } from '../../domain/repositories/match.repository';
import { GetMatches } from '../../domain/use-cases/matches/get-matches';

export class MatchesController {
   constructor(private readonly matchRepository: MatchRepository) {}

   public getMatchesByTeam(req: Request, res: Response) {
      const teamId = req.params.teamId;

      new GetMatches(this.matchRepository)
         .execute(teamId)
         .then((matches) => res.status(200).json(matches))
         .catch((error) => res.status(400).json({ error }));
   }
}
