const Button = ({ imageUrl, clickHandler }) => {
  return (
    <button title="hello" onClick={clickHandler}>
      <img src={imageUrl} alt="button" />
    </button>
  )
}

export default Button
