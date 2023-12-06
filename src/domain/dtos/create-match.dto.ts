import { MatchEntity } from '../entities/match.entity';

export class MatchDto {
   constructor(
      public readonly id: number,
      public readonly country_name: string,
      public readonly league_name: string,
      public readonly match_date: string,
      public readonly match_hometeam_id: string,
      public readonly match_hometeam_name: string,
      public readonly match_hometeam_score: string,
      public readonly match_awayteam_id: string,
      public readonly match_awayteam_name: string,
      public readonly match_awayteam_score: string,
      public readonly match_stadium: string,
      public readonly match_referee: string,
      public readonly team_home_badge: string,
      public readonly team_away_badge: string,
      public readonly league_logo: string,
   ) {}

   static fromApiData(data: MatchEntity): MatchDto {
      return new MatchDto(
         data.id,
         data.country_name,
         data.league_name,
         data.match_date,
         data.match_hometeam_id,
         data.match_hometeam_name,
         data.match_hometeam_score,
         data.match_awayteam_id,
         data.match_awayteam_name,
         data.match_awayteam_score,
         data.match_stadium,
         data.match_referee,
         data.team_home_badge,
         data.team_away_badge,
         data.league_logo,
      );
   }
}
