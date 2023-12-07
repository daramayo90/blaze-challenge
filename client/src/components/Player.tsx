import { FC } from 'react';
import { IPlayer } from '../interfaces';

import './player.scss';

interface Props {
   player: IPlayer;
}

export const Player: FC<Props> = ({ player }) => {
   return (
      <div key={player.id} className='player-item'>
         <div className='player-item__number'>
            <span>{player.player_number}</span>
         </div>

         <div className='player-item__name'>
            <span>{player.player_name}</span>
         </div>

         <div className='player-item__position'>
            <span>{player.player_type}</span>
         </div>

         <div className='player-item__age'>
            <span>{player.player_age} years old</span>
         </div>
      </div>
   );
};
