import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/moviesSlice";
import styles from "../styles/Movies.module.css";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { getVote } from "../services/apiCall";

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieList, loading, error } = useSelector((state) => state.movies);
  const { searchResults } = useSelector((state) => state.search); 
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movie List:", movieList);
  }, [movieList]);

  return (
    <div className={styles.mainWrapper}>
      {error && <h1>{error}</h1>}
      {loading && <Loading />}
      {!loading && (searchResults.length > 0 || movieList.length > 0) ? ( 
        <div className={styles.moviesWrapper}>
          {(searchResults.length > 0 ? searchResults : movieList).map(
            (movie) => {
              const { id, title, vote_average, poster_path } = movie;
              return (
                <div
                  onClick={() => navigate(`/${id}`)}
                  key={id}
                  className={styles.cardWrapper}
                >
                  <img src={IMG_API + poster_path} alt="movie poster" />
                  <div className={styles.cardBottom}>
                    <h5>{title}</h5>
                    <span
                      className={styles.exportedStyle}
                      style={{ backgroundColor: `${getVote(vote_average)}` }}
                    >
                      {vote_average}
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default Movies;
