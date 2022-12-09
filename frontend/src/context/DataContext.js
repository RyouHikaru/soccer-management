import { createContext, useState, useEffect } from "react";
import useFetch from '../hooks/useFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
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

  useEffect(() => {
    const filteredResults = players.filter(player => (
      (formatFullName(player.firstName, player.lastName)).toLowerCase().includes(search.toLowerCase())))

      setSearchResults(filteredResults.reverse());
      setPlayerCount(filteredResults.length)
  }, [players, search])
  
  return (
    <DataContext.Provider value={{
      fetchError, isLoading, players, setPlayers, 
      player, setPlayer, formatFullName, playerCount,
      prompt, setPrompt, updatePlayer, setUpdatePlayer,
      search, setSearch, searchResults, setSearchResults
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;