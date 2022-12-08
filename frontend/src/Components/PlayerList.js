import { useContext } from 'react';
import DataContext from '../context/DataContext';
import PlayerListItem from './PlayerListItem';

const PlayerList = () => {
  const { players, playerCount } = useContext(DataContext);

  return (
    <section className='h-screen overflow-y-scroll flex flex-col p-5 bg-gradient-to-tl from-slate-500 to-slate-100'>
      <h1 className='font-semibold text-2xl'>Players</h1>
      {playerCount > 0 ? 
        <ul>
        {players.map((player) => (
          <PlayerListItem key={player._id} player={player} />
        ))}
        </ul> 
        : <p className='p-5'>No available players.</p>
      }
    </section>
  );
}

export default PlayerList;