import { httpClient } from '../plugins/http-client';

const API_BASE_URL = 'http://localhost:8080/api/teams';

export const getTeams = async () => {
   return await httpClient.get(
      'https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=e9b4e633585cdf8de93879e978c26c06e64bb2ddd8a423f801982f00f27f2fee',
   );
};

export const getMatchesByTeam = async (teamId: string) => {
   return await httpClient.get(`${API_BASE_URL}/${teamId}/matches`);
};

export const getPlayersByTeam = async (teamId: string) => {
   return await httpClient.get(`${API_BASE_URL}/${teamId}/players`);
};
