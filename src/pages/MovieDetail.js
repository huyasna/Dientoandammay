import React, { useState, useEffect } from "react";
import RecommendMovieCards from "../components/RecommendedMovieCards";
import { useParams } from 'react-router-dom';
import axios from "axios";
import ls from 'local-storage'

export default function MovieDetail() {
    const { movieId } = useParams();

    function rateMovie(e) {
        axios.post("http://localhost:80/vote", {
            userId: ls("userId"),
            movieId: movieId,
            rating: e.target.value
        })
    }

    const [movie, setMovie] = useState({});
    const [recommendedMovie, setRecommendedMovie] = useState([]);

    useEffect(() => {
        async function fetchMovieData() {
            const response = await axios.get(`http://127.0.0.1/movies?id=${movieId}`);
            response.data.belongs_to_collection = response.data.belongs_to_collection.name;
            response.data.genres = (response.data.genres.map(genre => genre.name)).join(", ");
            response.data.production_companies = (response.data.production_companies.map(company => company.name)).join(", ");
            response.data.production_countries = (response.data.production_countries.map(country => country.name)).join(", ");
            response.data.spoken_languages = (response.data.spoken_languages.map(language => language.name)).join(", ");
            setMovie(response.data);
        }

        async function fetchRecommendedMovies() {
            const response = await axios.get("http://127.0.0.1/movies/recommend/");
            setRecommendedMovie(response.data);
        }
        fetchMovieData();
        fetchRecommendedMovies();
    }, [])

    return (
        <div className="app">

            {/* <!-- ======= Breadcrumbs ======= --> */}
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="breadcrumbs-content">
                    <h2>Chi tiết phim</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>Portfolio Details</li>
                    </ul>
                </div>
            </section>

            {/* <!-- End Breadcrumbs --> */}
            {/* <!-- ======= portfolio details ======= --> */}
            <section id="portfolio-details" className="portfolio-details">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-6">
                            <img className="portfolio-details-poster" src={"https://image.tmdb.org//t/p/w500" + movie.poster_path} alt={movie.title} />
                        </div>
                        <div className="col l-6 ">
                            <div className="portfolio-info">
                                <h3 className="portfolio-info-title">{movie.title}</h3>
                                <ul>
                                    <li><strong>Collection</strong>: {movie.belongs_to_collection}</li>
                                    <li><strong>Genres</strong>: {movie.genres}</li>
                                    <li><strong>Production Company</strong>: {movie.production_companies}</li>
                                    <li><strong>Production Country</strong>: {movie.production_countries}</li>
                                    <li><strong>Release date</strong>: {movie.release_date}</li>
                                    <li><strong>Revenue</strong>: {movie.revenue} </li>
                                    <li><strong>Languages</strong>: {movie.spoken_languages} </li>
                                    <li><strong>Status</strong>: {movie.status} </li>
                                    <li><strong>Score</strong>: {movie.vote_average} </li>
                                    <fieldset className="rating">
                                        <input type="radio" id="star10" name="rating" value="10" onChange={rateMovie} /><label className="full" htmlFor="star10" title="10 stars"></label>
                                        <input type="radio" id="star9" name="rating" value="9" onChange={rateMovie} /><label className="full" htmlFor="star9" title="9 stars"></label>
                                        <input type="radio" id="star8" name="rating" value="8" onChange={rateMovie} /><label className="full" htmlFor="star8" title="8 stars"></label>
                                        <input type="radio" id="star7" name="rating" value="7" onChange={rateMovie} /><label className="full" htmlFor="star7" title="7 stars"></label>
                                        <input type="radio" id="star6" name="rating" value="6" onChange={rateMovie} /><label className="full" htmlFor="star6" title="6 star"></label>
                                        <input type="radio" id="star5" name="rating" value="5" onChange={rateMovie} /><label className="full" htmlFor="star5" title="5 stars"></label>
                                        <input type="radio" id="star4" name="rating" value="4" onChange={rateMovie} /><label className="full" htmlFor="star4" title="4 stars"></label>
                                        <input type="radio" id="star3" name="rating" value="3" onChange={rateMovie} /><label className="full" htmlFor="star3" title="3 stars"></label>
                                        <input type="radio" id="star2" name="rating" value="2" onChange={rateMovie} /><label className="full" htmlFor="star2" title="2 stars"></label>
                                        <input type="radio" id="star1" name="rating" value="1" onChange={rateMovie} /><label className="full" htmlFor="star1" title="1 star"></label>
                                    </fieldset>
                                </ul>
                            </div>
                            <div className="portfolio-overview">
                                <h2>Overview</h2>
                                <p>
                                    {movie.overview}
                                </p>
                            </div>

                            {/* <div className="portfolio-credit">
                                <h3 className="portfolio-credit-title">Credit</h3>
                                <p><strong>Cast</strong>: Toy, Story, Woody</p>
                                <p><strong>Crew</strong>: JP Silli, JP Silli, JP Silli, JP Silli, JP Silli</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End portfolio details --> */}

            <RecommendMovieCards />
        </div>
    );
}