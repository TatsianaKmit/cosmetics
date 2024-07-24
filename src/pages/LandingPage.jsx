import React from "react";
import MultipleItems from "../components/slider/SliderComponent";
import { Link } from "react-router-dom";
import powder from '../assets/powder.jpg';
import both from '../assets/Both.png';
import girl from '../assets/girl.jpg';
import lipstick from '../assets/lipstick.png';

export default function LandingPage() {

    return (
        <>
            <div className="container-wide">

                <div className="landing-page">

                    <div className="lipstick">
                        <div className="container-slim">
                            <div className="lipstick__wrapper">
                                <div className="lipstick__text">
                                    <h2>Discover the Beauty <span className="line-break">of Makeup Products</span></h2>
                                    <h4>Elevate Your Look with Our Premium Makeup Collection</h4>
                                </div>
                                <div className="lipstick__buttons">
                                    <div className="lipstick__button">
                                        <Link to={"/brands"}>
                                            Featured Products
                                        </Link>
                                    </div>
                                    <div className="lipstick__button">
                                        <Link to={"/catalog"}>
                                            Shop by Category
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-tags">
                        <div className="container-slim">
                            <MultipleItems />
                        </div>
                    </div>

                    <div className="powder">
                        <div className="container-slim">
                            <div className="powder__wrapper">
                                <div className="powder__text">
                                    <h2>Explore Our <span className="line-break">Makeup Essentials</span></h2>
                                    <p>Discover Your Signature Look with Our Expansive Makeup Collection. From bold lipsticks to flawless foundations, we have everything you need to elevate your beauty game</p>
                                </div>
                                <div className="powder__photo">
                                    <img src={powder} alt="powder" />
                                </div>
                                <div className="powder__button">
                                    <Link to={"/catalog"}>
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* slider-brands */}

                    <div className="pink">
                        <div className="container-slim">
                            <div className="pink__wrapper">
                                <div className="pink__slider">
                                    {/* slider-categories */}
                                </div>
                                <div className="pink__text">
                                    <h2>Enhance Your <span className="line-break"> </span><span className="line-break">Beauty with Us</span></h2>
                                </div>
                                <div className="pink__photo">
                                    <img src={both} alt="both" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="girl">
                        <div className="container-slim">
                            <div className="girl__wrapper">
                                <div className="girl__photo_main">
                                    <img src={girl} alt="girl" />
                                </div>
                                <div className="girl__photo_secondary">
                                    <img src={lipstick} alt="lipstick" />
                                </div>
                                <div className="girl__text">
                                    <h2>Unleash <span className="line-break">Your </span><span className="line-break">Radiance</span></h2>
                                    <p>Discover the Transformative Power of Our Makeup Collection</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="landing-page__separator">
                    </div>

                </div>
            </div>
        </>
    );
}
