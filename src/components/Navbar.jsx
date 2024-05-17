import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchSearchResults } from "../features/searchSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      dispatch(fetchSearchResults(search));
      navigate(`/search/${search}`);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <nav>
      <ul className={styles.navWrapper}>
        {user?.name && (
          <li className={styles.namePopup}>Welcome, {user.name}!</li>
        )}
        <li>
          <NavLink to={"/"}>Movies</NavLink>
        </li>
        <li className={styles.searchSection}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={styles.searchBtn} onClick={handleSearch}>
            Search
          </button>
        </li>
        <li>
          <NavLink to={"login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
