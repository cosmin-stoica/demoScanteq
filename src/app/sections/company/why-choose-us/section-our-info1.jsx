import { publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";

function SectionOurInfo1() {
    return (
        <>
            <div className="sx-mv-bx1-content-wrap">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx1-content">
                            <h2 className="sx-title">La nostra visione</h2>
                            <span className="sx-title-2">Innovazione e collaborazione per il tuo successo</span>
                            <p>
                            La strategia di sviluppo di Scanteq si fonda sulla continua ricerca di innovazione e sull'adozione delle più recenti tecnologie, unite all'attenta identificazione delle nuove opportunità che emergono sul mercato. Tale approccio implica una stretta e solida collaborazione con i nostri clienti, consentendo loro di trarre vantaggio dalle tecnologie all'avanguardia. Attraverso questa collaborazione, i nostri clienti possono arricchire i loro prodotti con valore aggiunto e ottenere risultati ottimali in modo altamente efficiente, sia dal punto di vista dei costi che dei tempi di sviluppo.
                            </p>
                            {/*<div className="progress">
                                <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '100%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}><span>100% Work Success</span></div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '100%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span>100% Work Success</span></div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '100%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}><span>100% Work Success</span></div>
    </div>*/}
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