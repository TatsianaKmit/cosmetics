import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Telegram, LinkedIn, GitHub } from '../icons/index';

export default function Footer() {
    return (
        <div className="container-slim">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <div className="footer__photo">
                        <Link to={"/"}>
                            <picture>
                                <source media="(max-width: 768px)" srcSet='./assets/logo_lipstick.png' />
                                <source media="(min-width: 767px)" srcSet='./assets/logo_icon.png' />
                                <img src='./assets/logo_icon.png' />
                            </picture>
                        </Link>
                    </div>
                    <p>© 2024 cosmetics, Inc.
                        <br />
                        All rights reserved.</p>
                </div>

                <div className="footer__links">
                    <h6>Company</h6>
                    <Link className="footer__link" to={"/about"}>About</Link>
                    <Link className="footer__link" to={"/contact"}>Contact</Link>
                </div>

                <div className="footer__links">
                    <h6>Products</h6>
                    <Link className="footer__link" to={"/catalog"}>Catalog</Link>
                    <Link className="footer__link" to={"/brands"}>Brands</Link>
                    <Link className="footer__link" to={"/"}>Tags</Link>
                </div>

                <div className="footer__links">
                    <h6>Follow Us</h6>

                    <div className="footer__icons">
                        <div className="footer__icon">
                            <Link to='https://www.instagram.com/tania_kmit/' target="_blank">
                                <Instagram />
                            </Link>
                        </div>
                        <div className="footer__icon">
                            <Link to='https://www.facebook.com/tania_kmit' target="_blank">
                                <Facebook />
                            </Link>
                        </div>
                        <div className="footer__icon">
                            <Link to='https://t.me/tania_kmit' target="_blank">
                                <Telegram />
                            </Link>
                        </div>
                        <div className="footer__icon">
                            <Link to='https://www.linkedin.com/in/tatsiana-kmit-9a1409308' target="_blank">
                                <LinkedIn />
                            </Link>
                        </div>
                        <div className="footer__icon">
                            <Link to='https://github.com/TatsianaKmit' target="_blank">
                                <GitHub />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
