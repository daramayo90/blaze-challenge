import { PlayerDataSource } from '../../domain/data-sources/player.data-source';
import { PlayerEntity } from '../../domain/entities/player.entity';
import { PlayerRepository } from '../../domain/repositories/player.repository';

export class PlayerRepositoryImpl implements PlayerRepository {
   constructor(private readonly datasource: PlayerDataSource) {}

   getPlayersByTeam(teamId: string): Promise<PlayerEntity[]> {
      return this.datasource.getPlayersByTeam(teamId);
   }
}
