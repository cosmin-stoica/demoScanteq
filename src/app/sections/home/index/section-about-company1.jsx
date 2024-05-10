import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "../../../../globals/constants";
import SectionCounter1 from "./section-counter1";

function SectionAboutCompany1() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="sx-about-bx1-content-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-about-bx1-media">
                                        <div className="sx-dot-bx"><ItodoImage src="images/about/dotted-pic.png" alt="" /></div>
                                        <div className="sx-ab-img-outer">
                                            <div className="sx-ab-img-section-1-wrap">
                                                <div className="sx-ab-video">
                                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                                        <i className="flaticon-play" />
                                                    </a>
                                                </div>
                                                <div className="sx-ab-img-section-1" style={{ backgroundImage: `url(${publicUrlFor("images/about/left-pic.png")})` }} />
                                            </div>
                                            <div className="sx-ab-img-section-2">
                                                <ItodoImage src="images/about/p1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-about-bx1-content">
                                        <h2 className="sx-title"> Automazione e ufficio al top</h2>
                                        <span className="sx-title-2">Innovazione ed efficienza al servizio del tuo successo aziendale</span>
                                        <p>Scegli Scanteq per l'automazione industriale e soluzioni per l'ufficio: affidabilità, innovazione e efficienza al tuo servizio.</p>
                                        <div className="progress">
                                            <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '100%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}><span>100% Work Success</span></div>
                                        </div>
                                        <div className="row sx-about-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <p>Il Nostro Impegno per l'Efficienza e l'Innovazione a Tuo Servizio</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <p>Il Partner Affidabile per il Tuo Successo Aziendale</p>
                                            </div>
                                        </div>
                                        <div className="row sx-about-icon-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-mouse" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title">Soluzioni IT</span>
                                                        <span className="sx-icon-bx-title-info">Le migliori soluzioni scelte per te</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-download" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title">Consulenza IT</span>
                                                        <span className="sx-icon-bx-title-info">Le migliori soluzioni scelte per te</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COUNTER START */}
                        {/* COUNTER  END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany1;