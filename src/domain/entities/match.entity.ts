export class MatchEntity {
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
}
