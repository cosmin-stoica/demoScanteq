import ItodoImage from "../../../elements/itodo-img";
import { useTranslation } from 'react-i18next';
function SectionAboutCompany2Inner() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div id="aboutpane" className="sx-about-bx3-content-wrap">

                <div className="row">
                    <h1 className="TitoloCapitolo">{t('home.chi_siamo.header')}</h1>
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-media">
                            <div className="sx-dot-bx1"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div className="sx-dot-bx2"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div id="divmage" className="sx-ab3-img-outer">
                                <div className="sx-ab3-media">
                                    <ItodoImage className="aboutlogo2" src="images/about/chisiamo.png" alt="media" />
                                    {/*<ItodoImage className="aboutlogo" src="images/logo.png" alt="media" />*/}
                                </div>
                            </div>
                            <div className="sx-ab-circle-box">
                                <div className="sx-ab-circle-box-content">
                                    <span className="sx-exp">{t('home.chi_siamo.esperienza')}</span>
                                    <div className="sx-exp-title-outer">
                                        <span className="sx-exp-title-1">It</span>
                                        <span className="sx-exp-title-2">Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-content">
                            <span className="sx-title-2">{t('home.chi_siamo.title')}
                            </span>
                            <p>
                            {t('home.chi_siamo.desc_1')}
                            </p>
                            <p>{t('home.chi_siamo.desc_2')}
                            </p>
                            <div className="row sx-about-icon-bx3-column">
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-incoming-call" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">{t('home.chi_siamo.contatto')}</span>
                                            <span className="sx-icon-bx-title">+39 327 5875963</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-email-1" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">Mail</span>
                                            <span className="sx-icon-bx-title">info@scanteq.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionAboutCompany2Inner;