import { PlayerEntity } from './player.entity';

export class TeamEntity {
   constructor(
      public readonly id: number,
      public readonly team_key: string,
      public readonly team_name: string,
      public readonly team_country: string,
      public readonly team_badge: string,
      public readonly players: PlayerEntity[],
   ) {}
}
