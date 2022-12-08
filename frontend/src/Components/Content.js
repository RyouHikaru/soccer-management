import PlayerList from './PlayerList';
import PlayerDetails from './PlayerDetails';
import PlayerForm from './PlayerForm';

const Content = () => {
  return (
    <main className="grid grid-flow-col grid-cols-3 text-slate-700">
      <PlayerList />
      <PlayerDetails />
      <PlayerForm />
    </main>
  )
}

export default Content;