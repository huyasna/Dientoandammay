import React, { useState, useEffect } from 'react'
import MovieCard from "./MovieCard"

const MovieCards = () => {
  const [movies, setMovies] = useState([1, 2, 3, 4]);

  return (
    <div className="home-movie">
      <div className="row sm-gutter">
        {movies.map((movie) =>
          <MovieCard movie={movie} key={movie} />
        )}
      </div>
    </div>
  )
}

export default MovieCards
