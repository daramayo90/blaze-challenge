import { MatchEntity } from '../../entities/match.entity';
import { MatchRepository } from '../../repositories/match.repository';

export interface GetMatchesByTeamUseCase {
   execute(teamId: string): Promise<MatchEntity[]>;
}

export class GetMatches implements GetMatchesByTeamUseCase {
   constructor(private repository: MatchRepository) {}

   async execute(teamId: string): Promise<MatchEntity[]> {
      return await this.repository.getMatchesByTeam(teamId);
   }
}
