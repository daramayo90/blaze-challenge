import { useState, useEffect, FC } from 'react';
import { getMatchesByTeam } from '../api/teamApi';
import { IMatch } from '../interfaces';
import { Match } from './Match';

import './matches.scss';

interface Props {
   teamId: string;
}

const Matches: FC<Props> = ({ teamId }) => {
   const [matches, setMatches] = useState<IMatch[]>([]);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
         try {
            const data = await getMatchesByTeam(teamId);
            console.log(data);
            setMatches(data);
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
      <div className='matches'>
         <div className='matches__list'>
            {error ? (
               <span className='matches__list__error'>Error: {error}</span>
            ) : (
               <>
                  {matches.map((event: IMatch) => (
                     <Match key={event.id} event={event} />
                  ))}
               </>
            )}
         </div>
      </div>
   );
};

export default Matches;
