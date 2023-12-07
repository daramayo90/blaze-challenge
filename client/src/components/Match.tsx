import { FC } from 'react';
import { IMatch } from '../interfaces';

import './match.scss';

interface Props {
   event: IMatch;
}

export const Match: FC<Props> = ({ event }) => {
   return (
      <div key={event.id} className='match-item'>
         <div className='match-item__date'>
            <span className='match-item__date__day'>{event.match_date}</span>
         </div>

         <div className='match-item__versus'>
            <div className='match-item__versus__team'>
               <div className='match-item__versus__team__badge'>
                  <img src={event.team_home_badge} alt={event.match_hometeam_name} />
               </div>
               <div className='match-item__versus__team__name'>
                  <span>{event.match_hometeam_name}</span>
               </div>
            </div>

            <div className='match-item__versus__team'>
               <div className='match-item__versus__team__score'>
                  <span>{event.match_hometeam_score}</span>
                  <span>vs</span>
                  <span>{event.match_awayteam_score}</span>
               </div>
            </div>

            <div className='match-item__versus__team'>
               <div className='match-item__versus__team__badge'>
                  <img src={event.team_away_badge} alt={event.match_awayteam_name} />
               </div>
               <div className='match-item__versus__team__name'>
                  <span>{event.match_awayteam_name}</span>
               </div>
            </div>
         </div>

         <div className='match-item__referee'>
            <span>Referee: {event.match_referee}</span>
         </div>

         <div className='match-item__league'>
            <span>{event.league_name}</span>
         </div>

         <div className='match-item__stadium'>
            <span>{event.match_stadium}</span>
         </div>
      </div>
   );
};
