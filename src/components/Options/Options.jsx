export default function Options({ updateFeedback }) {
  const handleClick = (e) => {
    updateFeedback(e.target.innerText.toLowerCase());
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Good
      </button>
      <button type="button" onClick={handleClick}>
        Neutral
      </button>
      <button type="button" onClick={handleClick}>
        Bad
      </button>
      {/* <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button> */}
      <button type="button">Reset</button>
    </div>
  );
}
