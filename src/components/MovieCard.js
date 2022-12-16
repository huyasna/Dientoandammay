import React from "react";
import { Link } from 'react-router-dom'

export default function MovieCard(props) {
    console.log(props);
    return (
        <div className="col l-2-4 m-4 c-6 ">
            <Link className="home-movie-item" to={`/${props.movie}`}>
                <div className="home-movie-item__img" style={{ backgroundImage: 'url("https://rapchieuphim.com/photos/8925/312270911_5602823283139121_6709525026655649465_n.jpg")' }}></div>
                <h4 className="home-movie-item__name">Thế Giới Lạ Lùng - Strange World</h4>

                <div className="home-movie-item__action">
                    <span className="home-movie-item__like home-movie-item__like--liked">
                        <i className="home-movie-item__like-icon-empty fa-regular fa-heart"></i>
                        <i className="home-movie-item__like-icon-fill fa-solid fa-heart"></i>
                    </span>
                    <div className="home-movie-item__rating">
                        4.5
                    </div>

                </div>
                <div className="home-movie-item__origin">
                    <span className="home-movie-item__genre">Comedy</span>
                    <span className="home-movie-item__original-language">English</span>
                </div>
                <div className="home-movie-item__favourite">
                    <i className="fa-solid fa-check"></i>
                    <span className="">Yêu thích</span>
                </div>
            </Link>
        </div>
    );
}