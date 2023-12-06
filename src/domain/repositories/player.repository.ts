import { PlayerEntity } from '../entities/player.entity';

export abstract class PlayerRepository {
   abstract getPlayersByTeam(teamId: string): Promise<PlayerEntity[]>;
}
