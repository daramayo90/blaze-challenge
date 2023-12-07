import { TeamEntity } from '../../domain/entities/team.entity';
import { PlayerDto } from '../../domain/dtos/create-player.dto';
import { TeamDto } from '../../domain/dtos/create-team.dto';
import { PlayerEntity } from '../../domain/entities/player.entity';

export const isTeamQuery = async (client: any, teamData: TeamEntity): Promise<boolean> => {
   const query = `
        SELECT id FROM "Team" WHERE team_key = $1
      `;

   const result = await client.query(query, [teamData.team_key]);
   return result.rows.length > 0;
};

export const getPlayersQuery = async (client: any, team_id: string): Promise<PlayerEntity[]> => {
   const query = `
      SELECT "Player".* FROM "Player" 
      INNER JOIN "Team" ON "Player"."team_id" = "Team"."id" 
      WHERE "Team"."team_key" = $1;
    `;

   const result = await client.query(query, [team_id]);
   return result.rows;
};

export const insertTeamQuery = async (client: any, teamDto: TeamDto): Promise<number> => {
   const query = `
        INSERT INTO "Team" 
        (team_key, team_name, team_country, team_badge ) 
        VALUES ($1, $2, $3, $4)
        RETURNING id;
        `;

   const values = [teamDto.team_key, teamDto.team_name, teamDto.team_country, teamDto.team_badge];

   const result = await client.query(query, values);
   return result.rows[0].id;
};

export const insertPlayerQuery = async (client: any, playerDto: PlayerDto): Promise<void> => {
   const query = `
      INSERT INTO "Player" 
      (player_name, player_number, player_type, player_age, player_match_played, player_goals, player_assists, player_birthdate, "team_id") 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `;

   const values = [
      playerDto.player_name,
      playerDto.player_number,
      playerDto.player_type,
      playerDto.player_age,
      playerDto.player_match_played,
      playerDto.player_goals,
      playerDto.player_assists,
      playerDto.player_birthdate,
      playerDto.team_id,
   ];

   await client.query(query, values);
};
