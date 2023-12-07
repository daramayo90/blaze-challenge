import { fetchTeam } from '../../api/fetchTeam';
import { prisma } from '../../data/postgres';
import { PlayerDataSource } from '../../domain/data-sources/player.data-source';
import { PlayerEntity } from '../../domain/entities/player.entity';
import { TeamEntity } from '../../domain/entities/team.entity';
import { TeamDto } from '../../domain/dtos/create-team.dto';
import { PlayerDto } from '../../domain/dtos/create-player.dto';
import { sqlPlayers } from '../../sql';
import pool from '../../data/pg';

export class PlayerDataSourceImpl implements PlayerDataSource {
   async getPlayersByTeam(teamId: string): Promise<PlayerEntity[]> {
      if (!teamId) throw `Team with id ${teamId} not found`;

      const client = await pool.connect();

      try {
         const players = await this.getAllPlayers(client, teamId);

         if (players.length === 0) {
            const team = await fetchTeam(teamId);

            if ('error' in team) {
               throw 'No team found';
            }

            return await this.storeTeamAndPlayers(client, team[0]);
         }

         return players;
      } finally {
         client.release();
      }
   }

   private async getAllPlayers(client: any, teamId: string): Promise<PlayerEntity[]> {
      try {
         // return prisma.player.findMany({ where: { team: { team_key: teamId } } });
         return sqlPlayers.getPlayersQuery(client, teamId);
      } catch (error) {
         console.error(error);
         throw 'Database operation failed';
      }
   }

   private async storeTeamAndPlayers(client: any, teamData: TeamEntity): Promise<PlayerEntity[]> {
      await client.query('BEGIN');

      try {
         const isTeam = await sqlPlayers.isTeamQuery(client, teamData);

         let teamId: number = 0;

         if (!isTeam) {
            const teamDto = TeamDto.fromApiData(teamData);
            teamId = await sqlPlayers.insertTeamQuery(client, teamDto);
         }

         for (const player of teamData.players) {
            const playerDto = PlayerDto.fromApiData(player, teamId);
            await sqlPlayers.insertPlayerQuery(client, playerDto);
         }

         await client.query('COMMIT');
         return teamData.players.map((player) => PlayerEntity.fromRawData(player));
      } catch (error) {
         console.error('Error storing team and players:', error);
         throw 'Database operation failed';
      }
   }
}
