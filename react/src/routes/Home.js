import { useEffect, useState } from "react";
import MovieThumb from "../components/MovieThumb";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home">
      <h1>Top Movies</h1>
      <hr></hr>
      {isLoading ?
      (<h2>Loading...</h2>) :
      (<ul>
        {movies?.map((movie) => (
          <MovieThumb
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
        ))}
      </ul>)
      }
      
    </div>
  );
}

export default Home;
