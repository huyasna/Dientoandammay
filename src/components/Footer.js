import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="grid wide footer__content">
                <div className="row">
                    <div className="col l-2-4 m-4 c-6 ">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Trung Tâm Trợ Giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Giới thiệu</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Điều khoản</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Hành động</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Tình cảm</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Kinh dị</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Hài hước</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Theo dõi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <i className="footer-item__icon fa-brands fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <i className="footer-item__icon fa-brands fa-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <i className="footer-item__icon fa-brands fa-linkedin"></i>
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-8 c-12">
                        <h3 className="footer__heading">Vào Review movie trên ứng dụng</h3>
                        <div className="footer__download">
                            <img src="./assets/img/info/qr_code.png" alt="Download QRcode" className="footer__download-qr" />
                            <div className="footer__download-app">
                                <a href="" className="footer__download-app-link">
                                    <img src="./assets/img/info/app_store.png" alt="App Store" className="footer__download-app-img" />
                                </a>
                                <a href="" className="footer__download-app-link">
                                    <img src="./assets/img/info/goole_play.png" alt="Google Play" className="footer__download-app-img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                <div className="grid wide">
                    <p className="footer__text">© 2022 - Bản quyền thuộc về Review movie</p>
                </div>
            </div>

        </footer>
    );
}