import { useEffect, useState } from "react";
import MovieThumb from "../components/MovieThumb";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }  
`;

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://api.themoviedb.org/3/movie/popular?page=1&api_key=15929ba73ea97df7f30164465b7ea21f'
      )
    ).json();

    setMovies(json.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Wrapper>
      <h1>Top Movies</h1>
      <hr></hr>
      {isLoading ?
      (<h2>Loading...</h2>) :
      (<ul>
        {movies?.map((movie) => (
          <MovieThumb
              key={movie.id}
              id={movie.id}
              title={movie.title}
              release={movie.release_date}
              posterImg={movie.poster_path}
              summary={movie.overview}
              genres={movie.genres}
            />
        ))}
      </ul>)
      }      
    </Wrapper>
  );
}

export default Home;
