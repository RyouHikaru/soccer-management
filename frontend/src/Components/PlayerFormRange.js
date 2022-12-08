const PlayerFormRange = ({ name, text, value, handleInputChange }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input name={name} value={value} onChange={handleInputChange} type="range" min={0} max={3} />
    </>
  )
}

export default PlayerFormRange;