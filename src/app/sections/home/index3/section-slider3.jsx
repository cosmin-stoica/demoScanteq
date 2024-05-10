import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";
import { register } from 'swiper/element/bundle';
register();

function SectionSlider3() {
    return (
        <>
            <div className="sx-bnr-3-wrap-outer home-3-slider">
                {/* swiper slides */}
                <swiper-container
                    loop="true"
                    space-between="30"
                    effect="fade"
                    navigation-next-el=".swiper-button-next"
                    navigation-perv-el=".swiper-button-prev"
                    pagination-el=".swiper-pagination"
                    pagination-clickable="true"
                    parallax="true"
                    autoplay-delay="7000"
                    autoplay-disable-on-interaction="true"
                    class="swiper-wrapper"
                >
                    <swiper-slide class="sx-bnr-3-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider3/slide1.jpg")})` }}>
                        <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                        <div className="container">
                            <div className="sx-bnr-3-content">
                                <span className="sx-bnr-3-small-title">we are The best</span>
                                <h2 className="sx-bnr-3-large-title">We are ready
                                    To IT Solution Work.</h2>
                                <div className="sx-bnr-readmore">
                                    <NavLink to="/contact-us" className="site-button sx-btn-primary icon">
                                        <i className="fa  fa-long-arrow-right" />
                                        Free Quote
                                    </NavLink>
                                </div>
                                <div className="sx-bnr-video">
                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                        <i className="flaticon-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sx-bnr-text-masking large">
                            <div className="light">
                                <h1 className="sx-title">IT</h1>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="sx-bnr-3-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider3/slide2.jpg")})` }}>
                        <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                        <div className="container">
                            <div className="sx-bnr-3-content">
                                <span className="sx-bnr-3-small-title">We are Dedicated</span>
                                <h2 className="sx-bnr-3-large-title">Making IT a part of your business.</h2>
                                <div className="sx-bnr-readmore">
                                    <NavLink to="/about-us" className="site-button sx-btn-primary icon">
                                        <i className="fa  fa-long-arrow-right" />
                                        Read More
                                    </NavLink>
                                </div>
                                <div className="sx-bnr-video">
                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                        <i className="flaticon-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sx-bnr-text-masking large">
                            <div className="light">
                                <h1 className="sx-title">do!</h1>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>
                {/* !swiper slides */}
                {/* Add Arrows */}
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
            </div>
        </>
    )
}

export default SectionSlider3;