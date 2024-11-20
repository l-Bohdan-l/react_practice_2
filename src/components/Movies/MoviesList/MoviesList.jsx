export default function MoviesList({ moviesArray }) {
  return (
    <>
      <ul>
        {moviesArray.map(
          ({
            id,
            title,
            overview,
            vote_average,
            release_date,
            poster_path,
          }) => (
            <li key={id}>
              <h2>{title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <p>{overview}</p>
              <p>{vote_average}</p>
              <p>{release_date}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
