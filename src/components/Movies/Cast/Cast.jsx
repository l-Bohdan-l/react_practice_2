import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { fetchMovieCredits } from "../../../services/fetchMovies";
import ErrorMsg from "../../ImageFinder/ErrorMsg";
import css from "./Cast.module.css";

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const getMovieData = async (movieId) => {
    try {
      setIsLoading(true);
      const response = await fetchMovieCredits(movieId);
      setMovieCredits(response.data);
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
  console.log("movieCredits", movieCredits);

  return (
    <>
      {movieCredits && (
        <ul className={css.castList}>
          {movieCredits.cast.map((castMember, index) => (
            <li className={css.castItem} key={index}>
              <img
                className={css.castPhoto}
                src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                alt={castMember.name}
              />
              <h3 className={css.castName}>{castMember.name}</h3>
              <p className={css.castCharacter}>{castMember.character}</p>
            </li>
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
