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
      public readonly teamId: number,
   ) {}
}
