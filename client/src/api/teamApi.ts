import { httpClient } from '../plugins/http-client';

const API_BASE_URL = 'http://localhost:8080/api/teams';

export const getMatchesByTeam = async (teamId: string) => {
   const matches = await httpClient.get(`${API_BASE_URL}/${teamId}/matches`);
   console.log(matches);
   return matches;
};

export const getPlayersByTeam = async (teamId: string) => {
   return await httpClient.get(`${API_BASE_URL}/${teamId}/players`);
};
