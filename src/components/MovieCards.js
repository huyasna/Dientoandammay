import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MovieCard from "./MovieCard"

const MovieCards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://127.0.0.1/movies/home");
      setMovies(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="home-movie">
      <div className="row sm-gutter">
        {movies.map((movie) =>
          <MovieCard movie={movie} key={movie.id} />
        )}
      </div>
    </div>
  )
}

export default MovieCards
