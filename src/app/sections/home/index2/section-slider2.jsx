import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";
import { useTranslation } from 'react-i18next';
import { register } from 'swiper/element/bundle';
register();


function SectionSlider2() {

    
    const {t} = useTranslation();

    return (
        <>
            <div className="abbassaSlider sx-bnr-2-wrap-outer home-2-slider">
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
                    autoplay-delay="3000"
                    autoplay-disable-on-interaction="true"
                    class="swiper-wrapper"
                >
                    <swiper-slide class="sx-bnr-2-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider2/slide1nuova.png")})` }}>
                        <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                        <div className="container">
                            <div className="automazioneScritte sx-bnr-2-content">
                                <h2 className="sx-bnr-2-large-title">{t("home.slider.slide_1_title")}</h2>
                                <h3 className="slider-large-title">{t("home.slider.slide_1_subtitle")}</h3>
                                <div className="sx-bnr-2-info">{t("home.slider.slide_1_desc")}</div>
                                <div className="sx-bnr-readmore">
                                    <NavLink to="/masp" className="bottoneRead">
                                        <i className="fa  fa-long-arrow-right" />
                                        {t("home.slider.slide_1_button")}
                                    </NavLink>
                                </div>
                                {/*<div className="sx-bnr-video">
                                    <a href="https://www.youtube.com/watch?v=FRh9sXb0bXM" className="mfp-video circle">
                                        <i className="flaticon-play" />
                                    </a>
    </div> */}
                            </div>
                        </div>
                        <div className="immagineBanner sx-bnr-images">
                            <ItodoImage src="images/main-slider/slider2/sm-pic1.png" alt="" />
                        </div>
                    </swiper-slide>
                    <swiper-slide class="sx-bnr-2-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider2/slide2nuova.png")})` }}>
                        <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                        <div className="container">
                            <div className="automazioneScritte sx-bnr-2-content">
                                <h2 className="sx-bnr-2-large-title">{t("home.slider.slide_2_title")}</h2>
                                <h3 className="slider-large-title">{t("home.slider.slide_2_subtitle")}</h3>
                                <div className="sx-bnr-2-info">{t("home.slider.slide_2_desc")}</div>                                <div className="sx-bnr-readmore">
                                    <NavLink to="/imagina" className="bottoneRead">
                                        <i className="fa  fa-long-arrow-right" />
                                        {t("home.slider.slide_2_button")}
                                    </NavLink>
                                </div>
                                    {/*<div className="sx-bnr-video">
                                    <a href="https://www.youtube.com/watch?v=o31RKZRu_as" className="mfp-video circle">
                                        <i className="flaticon-play" />
                                    </a>
</div>*/}
                                </div>
                            </div>
                            <div className="immagineBanner sx-bnr-images">
                                <ItodoImage src="images/main-slider/slider2/sm-pic2.png" alt="" />
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

export default SectionSlider2;