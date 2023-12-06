import { envs } from '../config/envs';
import { httpClient } from '../config/http-client.plugin';
import { TeamEntity } from '../domain/entities/team.entity';

export const fetchTeam = async (teamId: string): Promise<TeamEntity[]> => {
   const url = `${envs.APIFOOTBAL_URL}/?action=get_teams&team_id=${teamId}&APIkey=${envs.APIFOOTBAL_KEY}`;

   try {
      return await httpClient.get(url);
   } catch (error) {
      throw error;
   }
};
