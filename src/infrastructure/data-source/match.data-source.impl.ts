import { fetchMatches } from '../../api/fetchMatches';
import { prisma } from '../../data/postgres';
import { MatchDataSource } from '../../domain/data-sources/match.data-source';
import { MatchDto } from '../../domain/dtos/create-match.dto';
import { MatchEntity } from '../../domain/entities/match.entity';
import { sqlMatches } from '../../sql';
import pool from '../../data/pg';

export class MatchDataSourceImpl implements MatchDataSource {
   async getMatchesByTeam(teamId: string): Promise<MatchEntity[]> {
      if (!teamId) throw `Team with id ${teamId} not found`;

      const client = await pool.connect();

      try {
         const matches = await this.getAllMatches(client, teamId);

         if (matches.length === 0) {
            const fetchedMatches = await fetchMatches(teamId);

            if ('error' in fetchedMatches) {
               throw 'No match found';
            }

            return await this.storeFetchedMatches(client, fetchedMatches);
         }

         return matches;
      } finally {
         client.release();
      }
   }

   private async getAllMatches(client: any, teamId: string): Promise<MatchEntity[]> {
      try {
         // return await prisma.match.findMany({
         //    where: { OR: [{ match_hometeam_id: teamId }, { match_awayteam_id: teamId }] },
         // });
         return sqlMatches.getMatchesQuery(client, teamId);
      } catch (error) {
         console.error(error);
         throw 'Database operation failed';
      }
   }

   private async storeFetchedMatches(client: any, matchesData: MatchEntity[]): Promise<MatchEntity[]> {
      await client.query('BEGIN');

      try {
         // const dbMatches = matchesData.map((matchData) => {
         //    return prisma.match.create({ data: MatchDto.fromApiData(matchData) });
         // });

         // return await Promise.all(dbMatches);
         for (const matchData of matchesData) {
            const matchDto = MatchDto.fromApiData(matchData);
            await sqlMatches.insertMatchQuery(client, matchDto);
         }

         await client.query('COMMIT');
         return matchesData.map((matchData) => MatchEntity.fromRawData(matchData));
      } catch (error) {
         await client.query('ROLLBACK');
         console.error('Error storing matches.', error);
         throw new Error('Database operation failed');
      }
   }
}
