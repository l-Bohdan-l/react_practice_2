import MovieItem from "../MovieItem/MovieItem";
import css from "./MoviesList.module.css";
export default function MoviesList({ moviesArray }) {
  return (
    <>
      <ul className={css.movieList}>
        {moviesArray.map((el) => (
          <li key={el.id} className={css.movieListItem}>
            <MovieItem movie={el} />
          </li>
        ))}
      </ul>
    </>
  );
}
