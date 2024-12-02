import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

import { fetchTrendingMovies } from "../../services/fetchMovies";
import MoviesList from "../../components/Movies/MoviesList/MoviesList";
import css from "./HomePage.module.css";
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTrendingMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetchTrendingMovies();
      setMovies(response.data.results);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
  // console.log(movies);
  return (
    <section>
      <h1>Trending today</h1>
      {!isLoading && !error && <MoviesList moviesArray={movies} />}
      {error && <p>Oooops, something went wrong</p>}
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
    </section>
  );
}
