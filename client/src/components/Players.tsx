import { useState, useEffect, FC } from 'react';
import { getPlayersByTeam } from '../api/teamApi';
import { IPlayer } from '../interfaces/players';
import { Player } from './Player';

import './players.scss';

interface Props {
   teamId: string;
}

const Players: FC<Props> = ({ teamId }) => {
   const [players, setPlayers] = useState<IPlayer[]>([]);

   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
         try {
            const data = await getPlayersByTeam(teamId);
            setPlayers(data);
            setError(null);
         } catch (err: any) {
            setError(err.response.data.error);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, [teamId]);

   if (loading) return <p>Loading...</p>;

   return (
      <div className='players'>
         <h2 className='players__lineup'>Line-up</h2>

         <div className='players__list'>
            {error ? (
               <span className='players__list__error'>Error: {error}</span>
            ) : (
               <>
                  {players.map((player: IPlayer) => (
                     <Player key={player.id} player={player} />
                  ))}
               </>
            )}
         </div>
      </div>
   );
};

export default Players;
