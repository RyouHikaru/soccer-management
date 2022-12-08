import { useEffect, useState, useContext } from "react";
import PlayerFormText from "./PlayerFormText";
import PlayerFormRange from "./PlayerFormRange";
import api from '../api/players';
import DataContext from '../context/DataContext';

const PlayerForm = () => {
  const initialData = {
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

  const { updatePlayer, setUpdatePlayer, setPlayer, players, setPlayers } = useContext(DataContext);
  const [data, setData] = useState(initialData);
  
  useEffect(() => {
    if (updatePlayer !== null)
      setData(updatePlayer);
  }, [updatePlayer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('stats')) {
      let currPlayerStats = data.stats;
      currPlayerStats[name.split('.')[1]] = parseInt(value);

      setData(currPlayerState => ({ 
        ...currPlayerState, 
        stats: currPlayerStats
      }));
    } else {
      setData(currPlayerState => ({
        ...currPlayerState, [name]: value
      }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await api.post('/players', data);
      let playerList = [...players, response.data];

      if (updatePlayer !== null) {
        response = await api.put(`/players/${updatePlayer._id}`, data);
        playerList = players.map((item) => 
          item._id === updatePlayer._id ? response.data : item
        )
        setPlayer(response.data);
        setUpdatePlayer(null);
      }

      setPlayers(playerList);
      setData(initialData);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleReset = () => {
    setData(initialData);
    setUpdatePlayer(null);
  }

  return (
    <section className='flex flex-col p-5 font-semibold bg-gradient-to-tl from-slate-500 to-slate-100'>
      <form onSubmit={handleSubmit} className='grid grid-col gap-3'>
        <label className='text-2xl' htmlFor="Player Form">{updatePlayer === null ? "Add Player" : "Update Player"}</label>
        <label htmlFor="team">Team</label>
        <select required value={data.team} name="team" onChange={handleInputChange}>
          <option defaultValue={''}></option>
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
        </select>
        <PlayerFormText name={"firstName"} text={"First Name"} value={data.firstName} 
          handleInputChange={handleInputChange} type={"text"}/>
        <PlayerFormText name={"lastName"} text={"Last Name"} value={data.lastName} 
          handleInputChange={handleInputChange} type={"text"}/>
        <PlayerFormText name={"email"} text={"Email"} value={data.email} 
          handleInputChange={handleInputChange} type={"email"}/>
        <PlayerFormText name={"phone"} text={"Phone"} value={data.phone} 
          handleInputChange={handleInputChange} type={"text"}/>
        <label htmlFor="stats">Stats</label>
        <div className="grid grid-col p-1 gap-1">
          <PlayerFormRange name={"stats.speed"} text={"Speed"} value={data.stats.speed}
            handleInputChange={handleInputChange} />
          <PlayerFormRange name={"stats.strength"} text={"Strength"} value={data.stats.strength}
            handleInputChange={handleInputChange} />
          <PlayerFormRange name={"stats.endurance"} text={"Endurance"} value={data.stats.endurance}
            handleInputChange={handleInputChange} />
          <PlayerFormRange name={"stats.ability"} text={"Ability"} value={data.stats.ability}
            handleInputChange={handleInputChange} />
          <PlayerFormRange name={"stats.tactical"} text={"Tactical"} value={data.stats.tactical}
            handleInputChange={handleInputChange} />
        </div>
        <div className="grid grid-flow-col">
          <button onClick={handleReset} className='w-3/4 mx-auto rounded-full bg-slate-300 hover:bg-purple-800 hover:text-slate-100' type="button">Clear</button>
          <button className='w-3/4 mx-auto rounded-full bg-slate-300 hover:bg-green-800 hover:text-slate-100' type="submit">Save</button>
        </div>
      </form>
    </section>
  )
}

export default PlayerForm;