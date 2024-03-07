import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    ).then((response) =>
      response.json().then((json) => {
        setMovie(json.data.movie);
        setIsLoading(false);
      })
    );
  }, [id]);

  return (
    <div className="detail">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <div>
            <h2>{movie.title}</h2>
            <ul>
              {movie.genres?.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>{movie.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
