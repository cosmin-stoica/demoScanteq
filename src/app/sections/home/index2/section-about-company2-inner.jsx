import ItodoImage from "../../../elements/itodo-img";

function SectionAboutCompany2Inner() {
    return (
        <>
            <div id="aboutpane" className="sx-about-bx3-content-wrap">
                <div className="row">
                    <h1 className="TitoloCapitolo">Chi siamo</h1>
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-media">
                            <div className="sx-dot-bx1"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div className="sx-dot-bx2"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div id="divmage" className="sx-ab3-img-outer">
                                <div className="sx-ab3-media">
                                    <ItodoImage className="aboutlogo2" src="images/about/p2.jpg" alt="media" />
                                    {/*<ItodoImage className="aboutlogo" src="images/logo.png" alt="media" />*/}
                                </div>
                            </div>
                            <div className="sx-ab-circle-box">
                                <div className="sx-ab-circle-box-content">
                                    <span className="sx-exp">14 Anni di esperienza</span>
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
                            <span className="sx-title-2">La storia di Scanteq
                            </span>
                            <p>

                                Scanteq è stata fondata a Torino nel 2010 come ditta individuale specializzata nello sviluppo di tecnologie nell'ambito dell'automazione d'ufficio. All'inizio, l'azienda si concentrava sulla fornitura di software e hardware proprietari per la creazione di dispositivi per la digitalizzazione dei documenti e la stampa a getto d'inchiostro.

                            </p>
                            <p>Successivamente, la società ha intrapreso una nuova fase di sviluppo in collaborazione con Tecno Italia Srl di Orbassano, stabilendo una partnership che ha portato alla diversificazione delle attività, includendo la progettazione di soluzioni software e hardware destinate ai sistemi di avvitatura. Questa espansione ha consentito a Scanteq di ampliare la propria gamma di prodotti, aprendo nuove opportunità nel campo dell'automazione industriale. Ogni anno, l'azienda fornisce decine di soluzioni all'avanguardia per il controllo di postazioni all'interno di linee di produzione complesse per importanti aziende manifatturiere italiane.
                            </p>
                            <div className="row sx-about-icon-bx3-column">
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-incoming-call" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">Contatto telefonico</span>
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