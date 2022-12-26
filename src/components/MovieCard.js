import React from "react";
import { Link } from 'react-router-dom'

export default function MovieCard(props) {
    return (
        <div className="col l-2-4 m-4 c-6 ">
            <Link className="home-movie-item" to={`/${props.movie.id}`}>
                <div className="home-movie-item__img" style={{ backgroundImage: `url(${"https://image.tmdb.org//t/p/w500" + props.movie.poster_path})` }}></div>
                <h4 className="home-movie-item__name">{props.movie.title}</h4>

                <div className="home-movie-item__action">
                    <span className="home-movie-item__like home-movie-item__like--liked">
                        <i className="home-movie-item__like-icon-empty fa-regular fa-heart"></i>
                        <i className="home-movie-item__like-icon-fill fa-solid fa-heart"></i>
                    </span>
                    <div className="home-movie-item__rating">
                        {props.movie.vote_average}
                    </div>

                </div>
                <div className="home-movie-item__origin">
                    <span className="home-movie-item__genre">{(props.movie.genres.map(genre => genre.name)).join(", ")}</span>
                    <span className="home-movie-item__original-language">{props.movie.original_language}</span>
                </div>
                <div className="home-movie-item__favourite">
                    <i className="fa-solid fa-check"></i>
                    <span className="">Yêu thích</span>
                </div>
            </Link>
        </div>
    );
}