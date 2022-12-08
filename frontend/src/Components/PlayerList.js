import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa'
import DataContext from '../context/DataContext';

const PlayerList = () => {
  const { setPlayer, players, playerCount, formatFullName } = useContext(DataContext);

  const handleClick = (id) => {
    const player = players.filter(player => player._id === id)[0];
    setPlayer(player);
  }

  return (
    <section className='flex flex-col p-5 border-2 border-green-500 border-dashed '>
      <h1 className='font-semibold text-2xl'>Players</h1>
      {playerCount > 0 ? 
        <ul>
        {players.map((player) => (
          <li onClick={() => handleClick(player._id)} key={player._id} className='flex gap-2 py-3 border-b-2 hover:cursor-pointer'>
            <FaUserCircle className='text-4xl' />
            <div>
              <p className='font-semibold'>{player.team ? player.team : 'Independent'}</p>
              <p>{formatFullName(player.firstName, player.lastName)}</p>
            </div>
          </li> 
        ))}
        </ul> 
        : <p className='p-5'>No available players.</p>
      }
    </section>
  );
}

export default PlayerList;