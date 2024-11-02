import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <Link to="/">Return to Home</Link>
    </div>
  );
}
