import { MatchEntity } from '../entities/match.entity';

export abstract class MatchDataSource {
   abstract getMatchesByTeam(teamId: string): Promise<MatchEntity[]>;
}
