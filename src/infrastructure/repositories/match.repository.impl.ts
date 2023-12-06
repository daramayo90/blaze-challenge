import { MatchDataSource } from '../../domain/data-sources/match.data-source';
import { MatchEntity } from '../../domain/entities/match.entity';
import { MatchRepository } from '../../domain/repositories/match.repository';

export class MatchRepositoryImpl implements MatchRepository {
   constructor(private readonly datasource: MatchDataSource) {}

   getMatchesByTeam(teamId: string): Promise<MatchEntity[]> {
      return this.datasource.getMatchesByTeam(teamId);
   }
}
