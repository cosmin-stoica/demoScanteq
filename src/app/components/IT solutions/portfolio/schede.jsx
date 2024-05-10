import Banner from "../../../sections/common/banner";
import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { bannerData } from "../../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";

function Schede() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.schede} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t110 mobile-page-padding">
                <div className="container">
                    <div className="sx-pic-l">
                        <ItodoImage id = "hardwarefoto" src="images/schedefoto.jpg" alt="image" />
                    </div>
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head left">
                            <div className="sx-head-s-title">Schede Elettroniche</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">Progettazione Elettronica Avanzata</h2>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="sx-our-service-info m-b30">
                            <p>

                            Benvenuti nella nostra sezione dedicata alle Schede Elettroniche di Scanteq. Qui, vi presentiamo le nostre soluzioni tecnologiche all'avanguardia per il controllo industriale nell'ambito dell'Industria 4.0. 

                            </p>
                            <p>

                            Le nostre schede sono progettate per offrire prestazioni, affidabilità e versatilità ineguagliate, consentendo di gestire ingressi, uscite, e molto altro ancora. Scoprite come le nostre soluzioni innovative possono migliorare il vostro controllo industriale e ottimizzare le vostre operazioni.

                            </p>
                            {/*<div className="sx-about-icon-bx2-column sx-bg-light m-tb50">
                                <div className="row ">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-category" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Category:</span>
                                                <span className="sx-icon-bx-title-info">Workout</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-calendar" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Date:</span>
                                                <span className="sx-icon-bx-title-info">June 18, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-leaf" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Author:</span>
                                                <span className="sx-icon-bx-title-info">Fabronia Andreas</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-image" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Class:</span>
                                                <span className="sx-icon-bx-title-info">Boxing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    </div> */}
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h2 className="sx-title">Soluzioni per controllo industriale</h2>
                                            <p>

                                            Scanteq offre soluzioni avanzate per il controllo industriale, tra cui le interfacce IO24ADC e ENCODER 4, progettate per fornire agli integratori soluzioni complete per il controllo delle periferiche.

                                            </p>
                                            <p>

                                            La scheda IO24ADC è una soluzione versatile per la gestione di ingressi e uscite digitali da 0 a 24VDC, nonché per la conversione analogico-digitale. Con 24 ingressi e 24 uscite protette, alimentate secondo lo standard industriale a 24V, questa scheda offre anche due canali di acquisizione segnali da celle di carico o torsiometri e due canali di acquisizione con un range di ingresso da 0 a 10V. La scheda è dotata di una porta digitale proprietaria per l'interfacciamento con moduli di espansione, e la connessione al PC di gestione avviene attraverso porte RS232 o CAN galvanicamente isolate.


                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/case-study-2/schedaio.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h3 className="sx-title">Espansione per lettura di encoder assoluti</h3>
                                            <p>

                                            Il modulo ENCODER 4 offre la possibilità di monitorare gli angoli di fino a quattro encoder assoluti o di ricevere coordinate da fino a quattro righe ottiche digitali. 
                                                </p>
                                            <p> Questa scheda comunica direttamente con il PC di gestione tramite la scheda IO24ADC, utilizzando la porta di espansione proprietaria. Con queste soluzioni, Scanteq fornisce ai professionisti del settore una gamma completa di strumenti per il controllo industriale.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/portfolio/encoder4.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s-post-pagination-control previous-next previous next">
                        <div className="paging-left paging-item">
                            <div className="paging-content">
                                <NavLink className="paging-link" to="/portfolio">
                                    <i className="fa  fa-long-arrow-left" />
                                </NavLink>
                                <div className="paging-content-inner">
                                    <NavLink className="paging-link2" to="/portfolio">Home</NavLink>
                                    <h4 className="paging-title">
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="paging-right paging-item">
                            <div className="paging-content reverse">
                                <NavLink className="paging-link" to="/hardware-solutions">
                                    <i className="fa  fa-long-arrow-right" />
                                </NavLink>
                                <div className="paging-content-inner">
                                    <NavLink className="paging-link2" to="/hardware-solutions">Prossimo</NavLink>
                                    <h4 className="paging-title">
                                        <NavLink to="/hardware-solutions">Soluzioni Hardware</NavLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END  */}
            {/* OUR CASE STUDY SECTION */}
            <div className="section-full p-t110 p-b80 sx-bg-white sx-case-study3-outer">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Soluzioni</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Le nostre soluzioni</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="owl-carousel sx-case-st-carousel-2 m-b30">
                            {/*One block*/}
                            <div className="item">
                                <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/hardware-solutions"><ItodoImage src="images/case-study-3/pic-1.jpg" alt="" /></NavLink>
                                        <NavLink to="/hardware-solutions" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Soluzioni Hardware</div>
                                        <NavLink className="sx-l-title" to="/hardware-solutions">
                                            <h2 className="sx-title">Visita le nostre soluzioni hardware</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/hardware-solutions" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Leggi di più</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*One two*/}
                            <div className="item">
                                <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/schede-hardware"><ItodoImage src="images/case-study-3/pic-2.jpg" alt="" /></NavLink>
                                        <NavLink to="/schede-hardware" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Schede Elettroniche</div>
                                        <NavLink className="sx-l-title" to="/schede-hardware">
                                            <h2 className="sx-title">Visita le nostre schede elettroniche</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/schede-hardware" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Leggi di più</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*One three*/}
                            {/*<div className="item">
                                <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio2"><ItodoImage src="images/case-study-3/pic-3.jpg" alt="" /></NavLink>
                                        <NavLink to="/portfolio2" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Apps Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio2">
                                            <h2 className="sx-title">Android &amp; Ios.</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/portfolio2" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
</div>*/}
                            {/*One four*/}
                         {/*<div className="item">
                                <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio2"><ItodoImage src="images/case-study-3/pic-1.jpg" alt="" /></NavLink>
                                        <NavLink to="/portfolio2" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Branding Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio2">
                                            <h2 className="sx-title">Visit Our planned.</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/portfolio2" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
            {/* OUR CASE STUDY END */}
        </>
    )
}

export default Schede;