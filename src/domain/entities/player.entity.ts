export class PlayerEntity {
   constructor(
      public readonly id: number,
      public readonly player_name: string,
      public readonly player_number: string,
      public readonly player_type: string,
      public readonly player_age: string,
      public readonly player_match_played: string,
      public readonly player_goals: string,
      public readonly player_assists: string,
      public readonly player_birthdate: string,
      public readonly team_id: number,
   ) {}

   static fromRawData(data: any): PlayerEntity {
      return new PlayerEntity(
         data.id,
         data.player_name,
         data.player_number,
         data.player_type,
         data.player_age,
         data.player_match_played,
         data.player_goals,
         data.player_assists,
         data.player_birthdate,
         data.team_id,
      );
   }
}
