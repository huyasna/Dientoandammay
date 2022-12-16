import React from "react";
import RecommendMovieCards from "../components/RecommendedMovieCards";

export default function MovieDetail() {
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
                            <img className="portfolio-details-poster" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F468F9EA0CEA90E2A41FC5282BB449DCBA86AFD9B7776470E330EC6CCAC76045/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" />
                        </div>
                        <div className="col l-6 ">
                            <div className="portfolio-info">
                                <h3 className="portfolio-info-title">Toy Story</h3>
                                <ul>
                                    <li><strong>Collection</strong>: Toy Story Collection</li>
                                    <li><strong>Budget</strong>: 30000000</li>
                                    <li><strong>Genres</strong>: Animation, Comedy, Family</li>
                                    <li><strong>Popularity</strong>: 21.946943</li>
                                    <li><strong>Production Company</strong>: Pixar Animation Studios</li>
                                    <li><strong>Production Country</strong>: United States of America</li>
                                    <li><strong>Release date</strong>: 1995-10-30</li>
                                    <li><strong>Revenue</strong>: 373554033 </li>
                                    <li><strong>Languages</strong>: English </li>
                                    <li><strong>Status</strong>: Released </li>
                                    <li><strong>Vote Avarage</strong>: 7.7 </li>
                                    <li><strong>Vote Count</strong>: 5415</li>

                                </ul>
                            </div>
                            <div className="portfolio-overview">
                                <h2>Overview</h2>
                                <p>
                                    Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.
                                </p>
                            </div>

                            <div className="portfolio-credit">
                                <h3 className="portfolio-credit-title">Credit</h3>
                                <p><strong>Cast</strong>: Toy, Story, Woody</p>
                                <p><strong>Crew</strong>: JP Silli, JP Silli, JP Silli, JP Silli, JP Silli</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End portfolio details --> */}

            <RecommendMovieCards />
        </div>
    );
}