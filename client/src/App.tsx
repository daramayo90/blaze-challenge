import Matches from './components/Matches';
import Players from './components/Players';

import './App.scss';

const App = () => {
   const teamId = '152'; // 76, 79, 130, 152

   return (
      <div className='app'>
         <h1 className='app__title'>Team Info</h1>
         <div className='app__content'>
            <Matches teamId={teamId} />
            <Players teamId={teamId} />
         </div>
      </div>
   );
};

export default App;
