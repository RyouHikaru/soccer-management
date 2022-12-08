import { useState } from "react";
import api from '../api/players';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const PlayerForm = () => {
  const initialPlayer = {
    team: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    stats: {
      speed: 1,
      strength: 1,
      endurance: 1,
      ability: 1,
      tactical: 1
    }
  }

  const { players, setPlayers } = useContext(DataContext);
  const [player, setPlayer] = useState(initialPlayer);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('stats')) {
      let currPlayerStats = player.stats;
      currPlayerStats[name.split('.')[1]] = parseInt(value);

      setPlayer(currPlayerState => ({ 
        ...currPlayerState, 
        'stats': currPlayerStats
      }))
    } else {
      setPlayer(currPlayerState => ({
        ...currPlayerState, [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/players', player);
      const playerList = [...players, response.data];
      setPlayers(playerList);
      setPlayer(initialPlayer);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <section className='flex flex-col p-5 font-semibold border-2 border-red-500 border-dashed'>
      <form onSubmit={handleSubmit} className='grid grid-col gap-3'>
        <label className='text-2xl' htmlFor="Player Form">Player Form</label>
        <label htmlFor="team">Team</label>
        <select value={player.team} name="team" onChange={handleInputChange}>
          <option defaultValue={''}></option>
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
        </select>
        <label htmlFor="firstName">First Name</label>
        <input className="pl-1" name="firstName" value={player.firstName} onChange={handleInputChange} type="text"/>
        <label htmlFor="lastName">Last Name</label>
        <input className="pl-1" name="lastName" value={player.lastName} onChange={handleInputChange} type="text"/>
        <label htmlFor="email">Email</label>
        <input className="pl-1" name="email" value={player.email} onChange={handleInputChange} type="email"/>
        <label htmlFor="phone">Phone</label>
        <input className="pl-1" name="phone" value={player.phone} onChange={handleInputChange} type="text"/>
        <label htmlFor="stats">Stats</label>
        <div className="grid grid-col p-1 gap-1">
          <label htmlFor="speed">Speed</label>
          <input name="stats.speed" value={player.stats.speed} onChange={handleInputChange} type="range" min={0} max={3} />
          <label htmlFor="strength">Strength</label>
          <input name="stats.strength" value={player.stats.strength} onChange={handleInputChange} type="range" min={0} max={3} />
          <label htmlFor="endurance">Endurance</label>
          <input name="stats.endurance" value={player.stats.endurance} onChange={handleInputChange} type="range" min={0} max={3} />
          <label htmlFor="ability">Ability</label>
          <input name="stats.ability" value={player.stats.ability} onChange={handleInputChange} type="range" min={0} max={3} />
          <label htmlFor="tactical">Tactical</label>
          <input name="stats.tactical" value={player.stats.tactical} onChange={handleInputChange} type="range" min={0} max={3} />
        </div>
        <button className='w-1/2 mx-auto bg-slate-400 hover:bg-slate-300' type="submit">Add</button>
      </form>
    </section>
  )
}

export default PlayerForm;