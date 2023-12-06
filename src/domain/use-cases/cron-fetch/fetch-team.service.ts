import { PlayerRepository } from '../../repositories/player.repository';

interface FetchTeamUseCase {
   execute(teamId: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class FetchTeamService implements FetchTeamUseCase {
   constructor(
      private readonly PlayerRepository: PlayerRepository,
      private readonly successCallback: SuccessCallback,
      private readonly errorCallback: ErrorCallback,
   ) {}

   public async execute(teamId: string): Promise<boolean> {
      try {
         this.PlayerRepository.getPlayersByTeam(teamId);

         this.successCallback && this.successCallback();

         return true;
      } catch (error) {
         const errorMessage = `Team with id ${teamId} not found. ${error}`;

         this.errorCallback && this.errorCallback(errorMessage);

         return false;
      }
   }
}
