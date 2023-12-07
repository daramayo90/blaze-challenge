import { Suspense, lazy, useState } from 'react';
import { Dropdown } from './components';

import './App.scss';

const Matches = lazy(() => import('./components/Matches'));
const Players = lazy(() => import('./components/Players'));

const App = () => {
   const [teamId, setTeamId] = useState('');

   const handleTeamSelect = (selectedTeamId: string) => {
      setTeamId(selectedTeamId);
   };

   return (
      <div className='app'>
         <h1 className='app__title'>Team Selection</h1>
         <Dropdown onSelect={handleTeamSelect} />
         {teamId && (
            <div className='app__content'>
               <Suspense fallback={<div>Loading matches...</div>}>
                  <Matches teamId={teamId} />
               </Suspense>
               <Suspense fallback={<div>Loading players...</div>}>
                  <Players teamId={teamId} />
               </Suspense>
            </div>
         )}
      </div>
   );
};

export default App;
