import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <div id="error-page" className={css.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <Link to="/">Return to Home</Link>
    </div>
  );
}
