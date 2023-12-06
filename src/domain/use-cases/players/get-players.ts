import { PlayerEntity } from '../../entities/player.entity';
import { PlayerRepository } from '../../repositories/player.repository';

export interface GetPlayersByTeamUseCase {
   execute(teamId: string): Promise<PlayerEntity[]>;
}

export class GetPlayers implements GetPlayersByTeamUseCase {
   constructor(private repository: PlayerRepository) {}

   async execute(teamId: string): Promise<PlayerEntity[]> {
      return await this.repository.getPlayersByTeam(teamId);
   }
}
