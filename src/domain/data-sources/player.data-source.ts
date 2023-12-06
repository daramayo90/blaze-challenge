import { PlayerEntity } from '../entities/player.entity';

export abstract class PlayerDataSource {
   abstract getPlayersByTeam(teamId: string): Promise<PlayerEntity[]>;
}
