import { FaUserCircle } from 'react-icons/fa'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const PlayerListItem = ({ player }) => {
  const { setPlayer, players, formatFullName } = useContext(DataContext);

  const handleClick = (id) => {
    const player = players.filter(player => player._id === id)[0];
    setPlayer(player);
  }

  return (
    <li onClick={() => handleClick(player._id)} className='flex gap-2 py-3 border-b-2 hover:cursor-pointer'>
      <FaUserCircle className='text-4xl' />
      <div>
        <p className='font-semibold'>{player.team ? player.team : 'Independent'}</p>
        <p>{formatFullName(player.firstName, player.lastName)}</p>
      </div>
    </li> 
  )
}

export default PlayerListItem