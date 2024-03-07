import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieThumb.module.css"

MovieThumb.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function MovieThumb({ id, coverImg, title, summary, genres }) {
  return (
    <li className={styles.container}>
      <Link to={`/detail/${id}`} className={styles.link}>
        <img src={coverImg} alt={title}  className={styles.img}/>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.genres}>
            {genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p className={styles.summary}>{summary}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieThumb;
