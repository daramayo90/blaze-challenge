import { MatchDto } from '../../domain/dtos/create-match.dto';

export const getMatchesQuery = async (client: any, teamId: string) => {
   const query = `
      SELECT * FROM "Match" WHERE match_hometeam_id = $1 OR match_awayteam_id = $1
   `;
   const result = await client.query(query, [teamId]);
   return result.rows;
};

export const insertMatchQuery = async (client: any, matchDto: MatchDto): Promise<void> => {
   const query = `
      INSERT INTO "Match" 
      (country_name, league_name, match_date, match_hometeam_id, match_hometeam_name, match_hometeam_score, match_awayteam_id, match_awayteam_name, match_awayteam_score, match_stadium, match_referee, team_home_badge, team_away_badge, league_logo) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      `;

   const values = [
      matchDto.country_name,
      matchDto.league_name,
      matchDto.match_date,
      matchDto.match_hometeam_id,
      matchDto.match_hometeam_name,
      matchDto.match_hometeam_score,
      matchDto.match_awayteam_id,
      matchDto.match_awayteam_name,
      matchDto.match_awayteam_score,
      matchDto.match_stadium,
      matchDto.match_referee,
      matchDto.team_home_badge,
      matchDto.team_away_badge,
      matchDto.league_logo,
   ];

   await client.query(query, values);
};
