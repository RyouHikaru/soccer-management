const PlayerFormText = ({ name, text, value, handleInputChange, type }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input required className="pl-1" name={name} value={value} onChange={handleInputChange} type={type}/>
    </>
  )
}

export default PlayerFormText;