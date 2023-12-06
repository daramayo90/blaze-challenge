// src/api.js
const API_BASE_URL = 'http://localhost:8080/api/teams';

export const getMatchesByTeam = async (teamId: string) => {
   const response = await fetch(`${API_BASE_URL}/${teamId}/matches`);
   if (!response.ok) throw new Error('Failed to fetch matches');
   return response.json();
};

export const getPlayersByTeam = async (teamId: string) => {
   const response = await fetch(`${API_BASE_URL}/${teamId}/players`);
   if (!response.ok) throw new Error('Failed to fetch players');
   return response.json();
};
