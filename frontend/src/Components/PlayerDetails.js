import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import PlayerInfo from './PlayerInfo';
import PlayerInfoStats from './PlayerInfoStats';

const PlayerDetails = () => {
  const { 
    player, playerCount, formatFullName, 
    setPrompt, setUpdatePlayer
  } = useContext(DataContext);

  const formatStats = (statPoints) => {
    const stat = [];

    for(let i = 0; i < 3; i++) {
      if (i < statPoints)
        stat.push(<div key={i} className='h-[10px] bg-green-400 border-2 border-slate-800 border-solid'></div>)
      else
        stat.push(<div key={i} className='h-[10px] bg-slate-100 border-2 border-slate-800 border-solid'></div>)
    }

    return stat;
  }

  const handleDelete = () => {
    setPrompt(true);
  }

  const handleUpdate = () => {
    setUpdatePlayer(player);
  }

  return (
    <section className='flex flex-col gap-2 p-5 font-semibold bg-gradient-to-tl from-slate-500 to-slate-100'>
      {playerCount > 0 && player !== null ? 
        <>
          <h1 className='text-2xl'>Details</h1>
          <div className='flex flex-col gap-2'>
            <PlayerInfo htmlFor="playerTeam" text="Team" value={player.team} />
            <PlayerInfo htmlFor="playerName" text="Name" value={formatFullName(player.firstName, player.lastName)} />
            <PlayerInfo htmlFor="playerEmail" text="Email" value={player.email} />
            <PlayerInfo htmlFor="playerPhone" text="Phone" value={player.phone} />
            <div className='flex flex-col'>
              <h2>Stats:</h2>
              <div className='grid grid-col gap-5 p-5 font-normal'>
                <PlayerInfoStats htmlFor="playerSpeed" text="Speed" value={formatStats(player.stats.speed)} />
                <PlayerInfoStats htmlFor="playerStrength" text="Strength" value={formatStats(player.stats.strength)} />
                <PlayerInfoStats htmlFor="playerEndurance" text="Endurance" value={formatStats(player.stats.endurance)} />
                <PlayerInfoStats htmlFor="playeraAbility" text="Ability" value={formatStats(player.stats.ability)} />
                <PlayerInfoStats htmlFor="playerTactical" text="Tactical" value={formatStats(player.stats.tactical)} />
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col">
            <button 
              onClick={handleUpdate}
              className='w-3/4 mx-auto rounded-full bg-slate-300 hover:bg-blue-800 hover:text-slate-100' type="button"
            >Update</button>
            <button
              onClick={handleDelete}
              value={"delete"}
              className='w-3/4 mx-auto rounded-full bg-slate-300 hover:bg-red-800 hover:text-slate-100' type="button"
            >Delete</button>
          </div>
        </>
      : playerCount > 0 ?  <p className='italic'>Select a player</p>
      :  ''
    }
    </section>
  );
}
 
export default PlayerDetails;