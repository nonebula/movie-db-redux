import { getMoviesDetail } from "../services/apiCall";
import { useLoaderData } from "react-router-dom";
import styles from "../styles/MovieDetail.module.css";

export const loader = async ({ params }) => {
  const data = await getMoviesDetail(params.id);
  return { data };
};
const MovieDetail = () => {
  const { data } = useLoaderData();

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const {
    title,
    poster_path,
    vote_average,
    vote_count,
    release_date,
    overview,
  } = data;
  return (
    <div className={styles.detailWrapper}>
      <h1>{title}</h1>
      <div className={styles.bottomWrapper}>
        <div className={styles.posterWrapper}>
          <img src={IMG_API + poster_path} alt={title} />
        </div>
        <ul className={styles.ul}>
          <li>
            <span>Overview:</span>
            {overview}
          </li>
          <li>
            <span>Name:</span>
            {title}
          </li>
          <li>
            <span>Release Date:</span>
            {release_date}
          </li>
          <li>
            <span>Rating:</span>
            {vote_average}
          </li>
          <li>
            <span>Vote Count:</span>
            {vote_count}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
