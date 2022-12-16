import React from "react";

export default function RecommendMovieCard(props) {
    return (
        <div className="col l-3">
            <a className="movie-recommend_wrap">
                <div className="movie-recommend_img" style={{ backgroundImage: 'url("https://media.glamour.com/photos/629e368cec7c4ceef05848ab/master/pass/JENNA-ORTEGA_GALLERY-SINGLE_0287R2C.jpg")' }}></div>
                <div className="movie-recommend_info">
                    <h4>Wednesday</h4>
                    <span>
                        Genres: Animation, Comedy, Family
                    </span>
                </div>
            </a>
        </div>
    );
}