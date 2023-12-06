import { fetchMatches } from '../../api/fetchMatches';
import { prisma } from '../../data/postgres';
import { MatchDataSource } from '../../domain/data-sources/match.data-source';
import { MatchDto } from '../../domain/dtos/create-match.dto';
import { MatchEntity } from '../../domain/entities/match.entity';
import pool from '../../data/pg-pool';

export class MatchDataSourceImpl implements MatchDataSource {
   async getMatchesByTeam(teamId: string): Promise<MatchEntity[]> {
      const client = await pool.connect();

      if (!teamId) throw `Team with id ${teamId} not found`;

      const matches = await this.getAllMatches(teamId);

      if (matches.length === 0) {
         const fetchedMatches = await fetchMatches(teamId);

         if ('error' in fetchedMatches) {
            throw 'No match found';
         }

         return await this.storeFetchedMatches(fetchedMatches);
      }

      return matches;
   }

   private async getAllMatches(teamId: string): Promise<MatchEntity[]> {
      try {
         return await prisma.match.findMany({
            where: {
               OR: [{ match_hometeam_id: teamId }, { match_awayteam_id: teamId }],
            },
         });
      } catch (error) {
         console.error(error);
         throw 'Database operation failed';
      }
   }

   private async storeFetchedMatches(matchesData: MatchEntity[]): Promise<MatchEntity[]> {
      const dbMatches = matchesData.map((matchData) => {
         return prisma.match.create({ data: MatchDto.fromApiData(matchData) });
      });

      try {
         return await Promise.all(dbMatches);
      } catch (error) {
         console.error('Error storing matches:', error);
         throw new Error('Database operation failed');
      }
   }
}
