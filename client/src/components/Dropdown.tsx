import { FC, useState, useEffect } from 'react';
import { ITeam } from '../interfaces';
import { getTeams } from '../api/teamApi';

import './dropdown.scss';

interface Props {
   onSelect: (selectedTeamId: string) => void;
}

export const Dropdown: FC<Props> = ({ onSelect }) => {
   const [teams, setTeams] = useState<ITeam[]>([]);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
         try {
            const data = await getTeams();
            setTeams(data);
            setError(null);
         } catch (err: any) {
            setError(err.response.data.error);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, []);

   if (loading) return <p>Loading...</p>;

   return (
      <div className='dropdown'>
         <select className='dropdown__select' onChange={(e) => onSelect(e.target.value)}>
            {error ? (
               <span className='dropdown__error'>Error: {error}</span>
            ) : (
               <>
                  {teams.map((team: ITeam) => (
                     <option key={team.team_key} value={team.team_key} className='dropdown__option'>
                        {team.team_name}
                     </option>
                  ))}
               </>
            )}
         </select>
      </div>
   );
};
