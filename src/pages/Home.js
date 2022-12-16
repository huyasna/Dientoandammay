import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCards from "../components/MovieCards";
import Pagination from "../components/Pagination";

export default function Home(props) {
    return (
        <div className="app">
            <div className="app__container">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <div className="col l-2 m-0 c-0 ">
                            <nav className="category">
                                <h3 className="category__heading"> Thể loại </h3>
                                <ul className="category-list">
                                    <li className="category-item">
                                        <a href="#" className="category-item__link">Hành động</a>
                                    </li>

                                    <li className="category-item">
                                        <a href="#" className="category-item__link">Tình cảm</a>
                                    </li>

                                    <li className="category-item">
                                        <a href="#" className="category-item__link">Kinh dị</a>
                                    </li>

                                    <li className="category-item">
                                        <a href="#" className="category-item__link">Hài hước</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col l-10 m-12 c-12">
                            <div className="home-filter hide-on-mobile-tablet">
                                <span className="home-filter__label">Sắp xếp theo</span>
                                <button className="home-filter__btn btn">Phổ biến</button>
                                <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                                <button className="home-filter__btn btn">Điểm đánh giá</button>

                                <div className="home-filter__page">
                                    <span className="home-filter__page-num">
                                        <span className="home-filter__page-current">1</span>/14
                                    </span>

                                    <div className="home-filter__page-control">
                                        <a href="" className="home-filter__page-btn home-filter__page-btn--disabled">
                                            <i className="home-filter__page-icon fa-solid fa-angle-left"></i>
                                        </a>

                                        <a href="" className="home-filter__page-btn">
                                            <i className="home-filter__page-icon fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <nav className="mobile-category">
                                <ul className="mobile-category__list">
                                    <li className="mobile-category__item">
                                        <a href="" className="mobile-category__link">Hành động</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="" className="mobile-category__link">Tình cảm</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="" className="mobile-category__link">Hài hước</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="" className="mobile-category__link">Kinh dị</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="" className="mobile-category__link">Hoạt hình</a>
                                    </li>
                                </ul>
                            </nav>

                            <MovieCards />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

