import { TeamEntity } from '../entities/team.entity';

export class TeamDto {
   constructor(
      public readonly id: number,
      public readonly team_key: string,
      public readonly team_name: string,
      public readonly team_country: string,
      public readonly team_badge: string,
   ) {}

   static fromApiData(data: TeamEntity): TeamDto {
      return new TeamDto(data.id, data.team_key, data.team_name, data.team_country, data.team_badge);
   }
}
