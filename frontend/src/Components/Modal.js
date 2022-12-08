import { useContext } from 'react';
import api from '../api/players';
import DataContext from '../context/DataContext';

const Modal = () => {
  const { 
    prompt, setPrompt, player, formatFullName,
    players, setPlayer, setPlayers 
  } = useContext(DataContext);

  const getModalClass = () => {
    let modalClass = "h-screen w-screen fixed bg-slate-900/80 hidden";
    return !prompt ? modalClass : modalClass.replace('hidden', '');
  }

  const handleConfirm = async (e) => {
    const answer = e.target.value;

    if (answer === "yes") {
      try {
        await api.delete(`/players/${player._id}`);
        const playerList = players.filter(data => data._id !== player._id);
        setPlayers(playerList);
        setPlayer(null);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }

    setPrompt(false);
  }

  return (
    <div className={getModalClass()}>
      <div className='flex flex-col justify-between p-7 w-[400px] h-[200px] top-1/2 left-1/2 -mt-[200px] -ml-[200px] rounded-md shadow-2xl bg-white text-slate-700 fixed'>
      <div>
        <h1 className='text-xl font-semibold'>Delete Player</h1>
      </div>
      <div className='text-center'>
        <p>
          Are you sure you wanna delete<br />
          <span className='font-bold text-blue-500'>{player !== null ? formatFullName(player.firstName, player.lastName) : ''}</span> ?
        </p>
      </div>
      <div className='flex items-center gap-10'>
        <button onClick={handleConfirm} value={"yes"} className='w-3/4 bg-green-800 text-slate-100 rounded-full hover:bg-green-500'>Yes</button>
        <button onClick={handleConfirm} value={"no"} className='w-3/4 bg-red-700 text-slate-100 rounded-full hover:bg-red-500'>No</button>
      </div>
    </div>
    </div>
  )
}

export default Modal;