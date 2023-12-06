import { fetchTeam } from '../../api/fetchTeam';
import { prisma } from '../../data/postgres';
import { PlayerDataSource } from '../../domain/data-sources/player.data-source';
import { PlayerEntity } from '../../domain/entities/player.entity';
import { TeamEntity } from '../../domain/entities/team.entity';
import { TeamDto } from '../../domain/dtos/create-team.dto';
import { PlayerDto } from '../../domain/dtos/create-player.dto';

export class PlayerDataSourceImpl implements PlayerDataSource {
   async getPlayersByTeam(teamId: string): Promise<PlayerEntity[]> {
      if (!teamId) throw `Team with id ${teamId} not found`;

      const players = await this.getAllPlayers(teamId);

      if (players.length === 0) {
         const team = await fetchTeam(teamId);

         if ('error' in team) {
            throw 'No team found';
         }

         return await this.storeTeamAndPlayers(team[0]);
      }

      return players;
   }

   private async getAllPlayers(teamId: string): Promise<PlayerEntity[]> {
      try {
         return prisma.player.findMany({ where: { team: { team_key: teamId } } });
      } catch (error) {
         console.error(error);
         throw 'Database operation failed';
      }
   }

   private async storeTeamAndPlayers(teamData: TeamEntity): Promise<PlayerEntity[]> {
      try {
         let team = await prisma.team.findFirst({ where: { team_key: teamData.team_key } });

         if (!team) {
            team = await prisma.team.create({ data: TeamDto.fromApiData(teamData) });
         }

         const dbPlayers = teamData.players.map((playerData: PlayerEntity) =>
            prisma.player.create({ data: { ...PlayerDto.fromApiData(playerData), teamId: team!.id } }),
         );

         return await Promise.all(dbPlayers);
      } catch (error) {
         console.error('Error storing team and players:', error);
         throw 'Database operation failed';
      }
   }
}
