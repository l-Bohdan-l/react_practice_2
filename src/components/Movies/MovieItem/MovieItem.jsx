import { Link, useLocation } from "react-router-dom";
import css from "./MovieItem.module.css";
export default function MovieItem({ movie }) {
  const { id, title, overview, vote_average, release_date, poster_path } =
    movie;
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={location}>
      <h2 className={css.movieTitle}>{title}</h2>
      <div className={css.movieImageWrapper}>
        <img
          className={css.moviePoster}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <p className={css.movieOverview}>{overview}</p>
      </div>
      <p className={css.movieRating}>⭐ {vote_average}</p>
      <p className={css.movieReleaseDate}>📅 {release_date}</p>
    </Link>
  );
}
