import { httpClient } from '../plugins/http-client';

const API_BASE_URL = 'http://localhost:8080/api/teams';

export const getMatchesByTeam = async (teamId: string) => {
   return await httpClient.get(`${API_BASE_URL}/${teamId}/matches`);
};

export const getPlayersByTeam = async (teamId: string) => {
   return await httpClient.get(`${API_BASE_URL}/${teamId}/players`);
};
