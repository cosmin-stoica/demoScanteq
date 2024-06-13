import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../globals/constants";
import { useTranslation } from 'react-i18next';

function Banner({ _data }) {

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;


    return (
        <>
            <div className="full-landing-image sx-bnr-inr overlay-wraper  bg-top-center" style={{ backgroundImage: `url(${publicUrlFor(_data.background)})` }}>
                <div className="overlay-main bg-white opacity-0" />
                <div className="container">
                    <div className="sx-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <span className="sx-bnr-sm-title">{currentLanguage === "it" ? "Sezione" : currentLanguage === "en" ? "Section" : currentLanguage === "ro" ? "Sectiunea" : "Section" }</span>
                                <h2 className="sx-title">{currentLanguage === "it" ? _data.title_it : currentLanguage === "en" ? _data.title_en : currentLanguage === "ro" ? _data.title_ro : _data.title_fr }</h2>
                            </div>
                            {/* BREADCRUMB ROW */}
                            <div>
                                <ul className="sx-breadcrumb breadcrumb-style-2">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li>{currentLanguage === "it" ? _data.crumb_it : currentLanguage === "en" ? _data.crumb_en : currentLanguage === "ro" ? _data.crumb_ro : _data.crumb_fr }</li>
                                </ul>
                            </div>
                            {/* BREADCRUMB ROW END */}
                        </div>
                    </div>
                </div>
                <div className="sx-bnr-outline-text">
                    <h1> {_data.watermark}</h1>
                </div>
            </div>
        </>
    )
}

export default Banner;