import Banner from "../../../sections/common/banner";
import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { bannerData } from "../../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";

function Hardware() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.hardware} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t110 mobile-page-padding">
                <div className="container">
                    <div className="containertraccia">
                    <div className="sx-pic-l">
                        <ItodoImage id = "hardwarefoto" src="images/hardwarefoto.jpg" alt="image" />
                    </div>
                    </div>
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head left">
                            <div className="sx-head-s-title">Soluzioni Hardware</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">Progettazione Elettronica Avanzata</h2>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="sx-our-service-info m-b30">
                            <p>

                            Scanteq, esperta in elettronica, progetta schede innovative e riduce i tempi di lancio grazie a tecnologie consolidate o nuovi sviluppi. Offriamo competenze nei sistemi embedded, dalla progettazione hardware alle fasi di sviluppo e test, garantendo prestazioni e affidabilità. Ci occupiamo di una vasta gamma di progetti, dai microprocessori semplici alle soluzioni avanzate, come stampanti termiche USB. Assicuriamo un ottimale sviluppo e test del tuo nuovo prodotto.

                            </p>
                            <p>

                            La nostra esperienza nell'elettronica ci permette di coprire un'ampia gamma di progetti, da microprocessori semplici a soluzioni avanzate come le stampanti termiche USB. Siamo impegnati a garantire un'implementazione ottimale e test approfonditi per portare al successo il tuo nuovo prodotto.

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
                                            <h2 className="sx-title">Soluzioni Hardware per l'Industria 4.0</h2>
                                            <p>

                                            Scanteq è il tuo partner ideale per l'integrazione delle Information Technology nei sistemi produttivi. Offriamo soluzioni hardware all'avanguardia con prestazioni superiori e facilità d'uso, come le centraline Minibox x86, Minibox x86 e Totem x86. La piattaforma personalizzabile FASP (Factory Automation Software Platform) completa il pacchetto con soluzioni "chiavi in mano."
I nostri sistemi garantiscono prestazioni e affidabilità di alto livello, sono ergonomici e user-friendly, con opzioni di interfaccia touchscreen.

                                            </p>
                                            <p>

                                            La filosofia modulare dei sistemi Minibox x86 e Totem x86 semplifica l'integrazione e gli interventi tecnici.


                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/portfolio/pic1.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h3 className="sx-title">IT Solution Business Planning system.</h3>
                                            <p>

                                            Scanteq va oltre l'hardware, offrendo soluzioni software personalizzate per ottimizzare la produzione. Partiamo con un'analisi approfondita delle sfide produttive e delle potenziali implementazioni per garantire un aumento significativo della qualità dei prodotti.
                                                </p>
                                            <p>La nostra esperienza nella progettazione di sistemi di controllo con PC industriali ci ha portato allo sviluppo della piattaforma software FASP (Factory Automation Software Platform). FASP rappresenta un concentrato di soluzioni tecnologiche all'avanguardia, tra cui la condotta guidata delle operazioni di montaggio, la rintracciabilità delle componenti e la gestione delle operazioni di collaudo. Inoltre, FASP consente di salvare i risultati su etichette, file Excel o database MySQL o SQL Server, fornendo un notevole valore aggiunto al processo produttivo. Scanteq offre soluzioni software personalizzate "chiavi in mano" per migliorare l'efficienza e la qualità del tuo processo produttivo.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/portfolio/pic2.jpg" alt="image" />
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
                                <NavLink className="paging-link" to="/schede-hardware">
                                    <i className="fa  fa-long-arrow-right" />
                                </NavLink>
                                <div className="paging-content-inner">
                                    <NavLink className="paging-link2" to="/schede-hardware">Prossimo</NavLink>
                                    <h4 className="paging-title">
                                        <NavLink to="/schede-hardware">Schede Elettroniche</NavLink>
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
                                            <NavLink to="/hardware-solutions" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
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
                                            <NavLink to="/schede-hardware" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
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

export default Hardware;