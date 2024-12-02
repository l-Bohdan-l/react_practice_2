import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

import SearchBar from "../../components/Movies/SearchBar/SearchBar";
import { fetchMovies } from "../../services/fetchMovies";
import css from "./Movies.module.css";
import ErrorMsg from "../../components/ImageFinder/ErrorMsg";
import LoadMoreBtn from "../../components/ImageFinder/LoadMoreBtn";
import MoviesList from "../../components/Movies/MoviesList/MoviesList";
export default function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const getMovies = async (searchQuery, page) => {
    try {
      setIsLoading(true);
      const response = await fetchMovies(page, searchQuery);
      page !== 1
        ? setMovies((prevState) => [...prevState, ...response.data.results])
        : setMovies(response.data.results);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (text) => {
    setSearchQuery(text);
    setPage(1);
  };

  const handleClickLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (searchQuery !== "") getMovies(searchQuery, page);
  }, [page, searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length !== 0 && !error && (
        <>
          <MoviesList moviesArray={movies} />
          <LoadMoreBtn handleClickLoadMore={handleClickLoadMore} />
        </>
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
    </>
  );
}
