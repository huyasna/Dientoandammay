import React from "react";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';

export default function Header() {
    const suggestions = ["a", "b", "c", "d"];

    function handleChange() {
        console.log("something changed");
    }

    return (
        <header className="header">
            <div className="grid wide">
                <nav className="header__navbar hide-on-mobile-tablet">
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item">
                            <span className="header__navbar-title--no-pointer"> Kết nối</span>
                            <Link to="/" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fa-brands fa-facebook"></i>
                            </Link>

                            <Link to="/" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fa-brands fa-instagram"></i>
                            </Link>
                        </li>
                    </ul>

                    <ul className="header__navbar-list">
                        <li className="header__navbar-item header__navbar-item--has-notify">
                            <a href="" className="header__navbar-item-link">
                                <i className="header__navbar-icon fa-regular fa-bell"></i>
                                Thông báo
                            </a>

                            <div className="header__notify">
                                <header className="header__notify-header">
                                    <h3>Thông báo mới nhận</h3>
                                </header>
                                <ul className="header__notify-list">
                                    <li className="header__notify-item header__notify-item--viewed">
                                        <a href="" className="header__notify-link">
                                            <img src="https://rapchieuphim.com/photos/8925/312270911_5602823283139121_6709525026655649465_n.jpg"
                                                alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">THẾ GIỚI LẠ LÙNG - STRANGE WORLD</span>
                                                <span className="header__notify-description">Thế Giới Lạ Lùng - Strange World sẽ ra mắt tại các rạp chiếu phim trên toàn quốc từ ngày 25.11.2022.</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="header__notify-item header__notify-item--viewed">
                                        <a href="" className="header__notify-link">
                                            <img src="https://rapchieuphim.com/photos/8925/312270911_5602823283139121_6709525026655649465_n.jpg"
                                                alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">THẾ GIỚI LẠ LÙNG - STRANGE WORLD</span>
                                                <span className="header__notify-description">Thế Giới Lạ Lùng - Strange World sẽ ra mắt tại các rạp chiếu phim trên toàn quốc từ ngày 25.11.2022.</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="header__notify-item">
                                        <a href="" className="header__notify-link">
                                            <img src="https://rapchieuphim.com/photos/8925/312270911_5602823283139121_6709525026655649465_n.jpg"
                                                alt="" className="header__notify-img" />
                                            <div className="header__notify-info">
                                                <span className="header__notify-name">THẾ GIỚI LẠ LÙNG - STRANGE WORLD</span>
                                                <span className="header__notify-description">Thế Giới Lạ Lùng - Strange World sẽ ra mắt tại các rạp chiếu phim trên toàn quốc từ ngày 25.11.2022.</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <footer className="header__notify-footer">
                                    <a href="" className="header__notify-footer-btn">Xem tất cả</a>
                                </footer>

                            </div>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                <i className="header__navbar-icon fa-regular fa-circle-question"></i>
                                Trợ giúp
                            </a>

                        </li>

                        <li className="header__navbar-item header__navbar-user">
                            <img src="./assets/img/avatar-user/avatar1.jpg" alt="" className="header__navbar-user-img" />
                            <span className="header__navbar-user-name">Na Huy</span>

                            <ul className="header__navbar-user-menu">
                                <li className="header__navbar-user-item">
                                    <a href="">Tài khoản của tôi</a>
                                </li>

                                <li className="header__navbar-user-item header__navbar-user-item--separate">
                                    <a href="">Đăng xuất</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                {/*  Header with search  */}
                <div className="header-with-search">
                    <label htmlFor="mobile-search-checkbox" className="header__mobile-search">
                        <i className="fas fa-search header__mobile-search-icon"></i>
                    </label>

                    <div className="header__logo hide-on-tablet">
                        <Link to="/" className="header__logo-link">
                            <img src="https://ghienreview.com/wp-content/uploads/2020/11/logo-trang-1024x1024.png" className="header_logo-img" viewBox="0 0 192 65">

                            </img>
                        </Link>
                    </div>

                    <input type="checkbox" hidden id="mobile-search-checkbox" className="header__search-checkbox" />
                    {/* <div className="header__search ">
                        <div className="header__search-input-wrap">
                            <input type="text" className="header__search-input" placeholder="Nhập để tìm kiếm phim" />

                            <div className="header__search-history">
                                <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
                                <ul className="header__search-history-list">
                                    <li className="header__search-history-item">
                                        <a href="">A star is born</a>
                                    </li>

                                    <li className="header__search-history-item">
                                        <a href="">Emily in Paris</a>
                                    </li>

                                    <li className="header__search-history-item">
                                        <a href="">Lalaland</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button className="header__search-btn">
                            <i className="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                        </button>

                    </div> */}

                    <Autocomplete
                        disablePortal
                        id="search box"
                        options={suggestions}
                        sx={{ width: 800 }}
                        size="small"
                        renderInput={(params) => <TextField {...params} label="Tìm kiếm" />}
                        onChange={handleChange}
                    />
                </div>
            </div>

        </header>
    );
}