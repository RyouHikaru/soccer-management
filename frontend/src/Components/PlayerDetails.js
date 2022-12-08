import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const PlayerDetails = () => {
  const { player, playerCount, formatFullName } = useContext(DataContext);

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

  return (
    <section className='flex flex-col gap-2 p-5 font-semibold border-2 border-yellow-500 border-dashed'>
      {playerCount > 0 && player._id !== undefined ? 
        <>
          <h1 className='text-2xl'>Details</h1>
          <div className='flex flex-col gap-2'>
            <label htmlFor="playerTeam">Team:
              <span className='font-normal'> {player.team ? player.team : 'Independent'}</span>
            </label>
            <label htmlFor="playerName">Name:
              <span className='font-normal'> {formatFullName(player.firstName, player.lastName)}</span>
            </label>
            <label htmlFor="playerEmail">Email: 
              <span className="font-normal"> {player.email}</span>
            </label>
            <label htmlFor="playerPhone">Phone: 
              <span className="font-normal"> {player.phone}</span>
            </label>
            <div className='flex flex-col'>
              <h2>Stats:</h2>
              <div className='grid grid-col gap-5 p-5 font-normal'>
                <label htmlFor="playerSpeed">
                  Speed: 
                  <div className="grid grid-flow-col grid-cols-3">
                    {formatStats(player.stats.speed)}
                  </div>
                </label>
                <label htmlFor="playerStrength">
                  Strength: 
                  <div className="grid grid-flow-col grid-cols-3">
                    {formatStats(player.stats.strength)}
                  </div>
                </label>
                <label htmlFor="playerEndurance">
                  Endurance: 
                  <div className="grid grid-flow-col grid-cols-3">
                    {formatStats(player.stats.endurance)}
                  </div>
                </label>
                <label htmlFor="playeraAbility">
                  Ability: 
                  <div className="grid grid-flow-col grid-cols-3">
                    {formatStats(player.stats.ability)}
                  </div>
                </label>
                <label htmlFor="playerTactical">
                  Tactical: 
                  <div className="grid grid-flow-col grid-cols-3">
                    {formatStats(player.stats.tactical)}
                  </div>
                </label>
              </div>
            </div>
          </div>
        </>
      : playerCount > 0 ?  <p className='italic'>Select a player</p>
      :  ''
    }
    </section>
  );
}
 
export default PlayerDetails;