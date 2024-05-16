import axios from "axios";
//For data requests

export const getMovies = async () => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=`;
  try {
    const { data } = await axios(FEATURED_API);
    return data;
  } catch (error) {
    return error;
  }
};

export const getMoviesDetail = async (id) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const DETAIL_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  try {
    const { data } = await axios(DETAIL_API);
    return data;
  } catch (error) {
    return error;
  }
};
