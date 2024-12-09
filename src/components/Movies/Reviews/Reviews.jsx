import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../../services/fetchMovies";
import { BallTriangle } from "react-loader-spinner";
import ErrorMsg from "../../ImageFinder/ErrorMsg";
import css from "./Reviews.module.css";
export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const getMovieData = async (movieId) => {
    try {
      setIsLoading(true);
      const response = await fetchMovieReviews(movieId);
      setMovieReviews(response.data);
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
  console.log("movieReviews", movieReviews);

  return (
    <>
      {movieReviews && (
        <ul>
          {movieReviews.results.map((movieReview) => (
            <div key={movieReview.id} className={css.movieReview}>
              <h2>{movieReview.author}</h2>
              <p>{movieReview.content}</p>
            </div>
          ))}
        </ul>
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
