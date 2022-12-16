import React, { useState, useEffect } from "react";
import RecommendMovieCard from './RecommendedMovieCard'

export default function RecommendMovieCards() {
    const [movies, setMovies] = useState([1, 2, 3, 4]);

    return (
        <section className="movie-recommend">
            <div className="grid wide">

                <div className="movie-recommend_title">
                    <h2>Recommend Movies</h2>
                    <p>We suggest you movies that may be right for you</p>
                </div>

                <div className="row">
                    {movies.map(movie =>
                        <RecommendMovieCard movie={movie} key={movie} />
                    )}
                </div>

            </div>
        </section>
    );
}