import { createContext, useState, useEffect } from "react";
import useFetch from '../hooks/useFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState(null);
  const [updatePlayer, setUpdatePlayer] = useState(null);
  const [playerCount, setPlayerCount] = useState(0);
  const [prompt, setPrompt] = useState(false);
  const { data, fetchError, isLoading } = useFetch('http://localhost:4000/players');
  const formatFullName = (firstName, lastName) => {
    return (firstName + ' ' + lastName);
  }
  
  useEffect(() => {
    setPlayers(data);
    setPlayerCount(data.length);
  }, [data])
  
  return (
    <DataContext.Provider value={{
      fetchError, isLoading, players, setPlayers, 
      player, setPlayer, formatFullName, playerCount,
      prompt, setPrompt, updatePlayer, setUpdatePlayer
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;