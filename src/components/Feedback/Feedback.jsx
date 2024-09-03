import css from "./Feedback.module.css";

export default function Feedback({ reviewsObj }) {
  // const [reviewsObj, setReviewsObj] = useState(reviewsObj);
  const { good, neutral, bad } = reviewsObj;
  const total = good + bad + neutral;
  const positivePersent = ((good * 100) / total).toFixed(2);
  return (
    <div className={css.wrapper}>
      <h2>Feedback Results</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive: {positivePersent} %</p>
    </div>
  );
}
