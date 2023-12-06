import { envs } from '../config/envs';
import { httpClient } from '../config/http-client.plugin';
import { MatchEntity } from '../domain/entities/match.entity';

export const fetchMatches = async (teamId?: string): Promise<MatchEntity[]> => {
   const filterDate = 'from=2023-10-01&to=2023-10-03';

   const url = teamId
      ? `${envs.APIFOOTBAL_URL}/?action=get_events&${filterDate}&team_id=${teamId}&APIkey=${envs.APIFOOTBAL_KEY}`
      : `${envs.APIFOOTBAL_URL}/?action=get_events&${filterDate}&APIkey=${envs.APIFOOTBAL_KEY}`;

   console.log(url);

   try {
      return await httpClient.get(url);
   } catch (error) {
      throw error;
   }
};
