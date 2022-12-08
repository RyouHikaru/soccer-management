const PlayerInfo = ({ htmlFor, text, value }) => {
  return (
    <label htmlFor={htmlFor}>{text}:
      <span className='font-normal'> {value}</span>
    </label>
  )
}

export default PlayerInfo;