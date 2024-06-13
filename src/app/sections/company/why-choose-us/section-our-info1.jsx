import ItodoImage from "../../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

function SectionOurInfo1() {

    const { t } = useTranslation("vision");


    return (
        <>
            <div className="sx-mv-bx1-content-wrap">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx1-content">
                            <h2 className="sx-title">{t("intro.header")}</h2>
                            <span className="sx-title-2">{t("intro.title")}</span>
                            <p className="normalfont">
                            {t("intro.desc")}                            
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="containertraccia">
                        <div className="sx-mv-bx1-media">
                            <div className="sx-dot-bx-right"><ItodoImage src="images/about/dotted-pic.png" alt="image" /></div>
                            <div className="sx-mv-img-outer">
                                <div className="sx-mv-img-section-2">
                                    <ItodoImage src="images/about/p1-1.jpg" alt="image" />
                                    </div>
                                </div>
                                {/*<div className="sx-mv-img-section-1-wrap">
                                    <div className="sx-mv-video">
                                        <a href="https://www.youtube.com/watch?v=o31RKZRu_as" className="mfp-video circle">
                                            <i className="flaticon-play" />
                                        </a>
                                    </div>
                                    <div className="sx-mv-img-section-1" style={{ backgroundImage: `url(${publicUrlFor("images/about/right-pic.jpg")})` }} />
    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOurInfo1;