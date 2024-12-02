import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
// axios.defaults.headers.common.Authorization = `Bearer ${API_KEY}`;

export async function fetchTrendingMovies() {
  const options = {
    method: "GET",
    url: "trending/movie/week",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const response = await axios.request(options);
  return response;
}

export async function fetchMovies(page, query) {
  const options = {
    method: "GET",
    url: "search/movie",
    params: {
      include_adult: "false",
      language: "en-US",
      page,
      query,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const response = await axios.request(options);
  return response;
}

export async function fetchMovieDetails(movieId) {
  const options = {
    method: "GET",
    url: `movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const response = await axios.request(options);
  return response;
}
