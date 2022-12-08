const PlayerInfoStats = ({ htmlFor, text, value }) => {
  return (
    <label htmlFor={htmlFor}>
      {text}: 
      <div className="grid grid-flow-col grid-cols-3">{value}</div>
    </label>
  )
}

export default PlayerInfoStats;