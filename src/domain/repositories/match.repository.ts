import { MatchEntity } from '../entities/match.entity';

export abstract class MatchRepository {
   abstract getMatchesByTeam(teamId: string): Promise<MatchEntity[]>;
}
