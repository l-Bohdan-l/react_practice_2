import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  isReviewsEmpty,
  resetFeedback,
}) {
  const handleClick = (e) => {
    updateFeedback(e.target.innerText.toLowerCase());
  };

  return (
    <div className={css.wrapper}>
      <button type="button" onClick={handleClick}>
        Good
      </button>
      <button type="button" onClick={handleClick}>
        Neutral
      </button>
      <button type="button" onClick={handleClick}>
        Bad
      </button>
      {!isReviewsEmpty && (
        <button onClick={resetFeedback} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
