import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

import { fetchMovieDetails } from "../../services/fetchMovies";
import ErrorMsg from "../../components/ImageFinder/ErrorMsg";
import css from "./MovieDetails.module.css";

export default function MovieDetails() {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");
  const { movieId } = useParams();

  const getMovieData = async (movieId) => {
    try {
      setIsLoading(true);
      const response = await fetchMovieDetails(movieId);
      setMovieData(response.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieData(movieId);
  }, [movieId]);
  console.log(movieData);

  return (
    <div className={css.movieDetails}>
      <Link to={backLinkHref.current} className={css.backLink}>
        Go back
      </Link>
      {movieData && (
        <div>
          <h1 className={css.title}>{movieData.original_title}</h1>
          <p className={css.text}>Overview: {movieData.overview}</p>
          <p className={css.text}>Release Date: {movieData.release_date}</p>
          <p className={css.text}>Runtime: {movieData.runtime} minutes</p>
          <p className={css.text}>Budget: ${movieData.budget}</p>
          <p className={css.text}>Vote Average: {movieData.vote_average}</p>
          <p className={css.text}>Vote Count: {movieData.vote_count}</p>
          <p className={`${css.text} ${css.genres}`}>
            Genres: {movieData.genres.map((genre) => genre.name).join(", ")}
          </p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt={movieData.original_title}
            className={css.poster}
          />
          <div className={css.additionalLinks}>
            <Link to="cast" className={css.link}>
              Cast
            </Link>
            <Link to="reviews" className={css.link}>
              Reviews
            </Link>
          </div>
          <Outlet />
        </div>
      )}
      {isLoading && (
        <div className={css.loadingWrapper}>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {error && <ErrorMsg errorMessage={error} />}
    </div>
  );
}
