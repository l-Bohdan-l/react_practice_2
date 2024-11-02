import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/fetchMovies";
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
  return (
    <>
      <h1>Trending today</h1>
      <ul></ul>
    </>
  );
}
