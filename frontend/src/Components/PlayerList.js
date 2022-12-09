import { useContext } from 'react';
import DataContext from '../context/DataContext';
import PlayerListItem from './PlayerListItem';
import { FaSearch } from 'react-icons/fa'

const PlayerList = () => {
  const { search, setSearch, searchResults, playerCount } = useContext(DataContext);

  return (
    <section className='h-screen overflow-y-scroll gap-2 flex flex-col p-5 bg-gradient-to-tl from-slate-500 to-slate-100'>
      <h1 className='font-semibold text-2xl'>Players</h1>
      <div className="flex gap-1 justify-center">
        <input
          placeholder='Search player'
          type="text"
          className='pl-1 w-full rounded-full'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className='pl-1'><FaSearch /></button>
      </div>
      {playerCount > 0 ? 
        <ul>
        {searchResults.map((player) => (
          <PlayerListItem key={player._id} player={player} />
        ))}
        </ul> 
        : <p className='p-5'>No players found.</p>
      }
    </section>
  );
}

export default PlayerList;