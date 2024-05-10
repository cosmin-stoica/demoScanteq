import Banner from "../../../sections/common/banner";
import SectionClients2 from "../../../sections/home/index2/section-clients2";
import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";
import { bannerData } from "../../../../globals/banner";
function Portfolio1Page() {
    return (
        <>
            <Banner _data={bannerData.portfolio1} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b70 sx-bg-light mobile-page-padding">
                {/* TESTIMONIAL START */}
                <div className="container">
                    <div className="section-content">
                        {/* TITLE START */}
                        {/*Large Title*/}
                        <div className="large-title-block">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    {/* TITLE START */}
                                    <div className="section-head left">
                                        <div className="sx-head-s-title">Il nostro portfolio</div>
                                        <div className="sx-head-l-title">
                                            <h2 className="sx-title">Le nostre soluzioni IT specializzate</h2>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className=" large-title-info">
                                        <p>Scopri il nostro diversificato portfolio di soluzioni IT specializzate, progettate per affrontare le sfide più complesse e potenziare la tua azienda attraverso l'innovazione tecnologica.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="masonry-outer mfp-gallery news-grid clearfix row">
                            {/* COLUMNS 1 */}
                            <div className="masonry-item  col-lg-6 col-md-6 col-sm-12 m-b30">
                                <div className="sx-case-study-bx sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/hardware-solutions"><ItodoImage src="images/case-study/pic-1.jpg" alt="" /></NavLink>
                                        <NavLink to="/hardware-solutions" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Soluzioni Hardware</div>
                                        <NavLink className="sx-l-title" to="/hardware-solutions">
                                            <h2 className="sx-title">Minibox x86</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/hardware-solutions" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Leggi di piu'</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 2 */}
                            <div className="masonry-item  col-lg-6 col-md-6 col-sm-12 m-b30">
                                <div className="sx-case-study-bx sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/hardware-solutions"><ItodoImage src="images/case-study/pic-2.jpg" alt="" /></NavLink>
                                        <NavLink to="/hardware-solutions" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Soluzioni Hardware</div>
                                        <NavLink className="sx-l-title" to="/hardware-solutions">
                                            <h2 className="sx-title">Totem x86</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/hardware-solutions" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Leggi di piu'</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 3 */}
                            <div className="masonry-item  col-lg-6 col-md-6 col-sm-12 m-b30">
                                <div className="sx-case-study-bx sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/hardware-solutions"><ItodoImage src="images/case-study/pic-3.jpg" alt="" /></NavLink>
                                        <NavLink to="/hardware-solutions" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Soluzioni Hardware</div>
                                        <NavLink className="sx-l-title" to="/hardware-solutions">
                                            <h2 className="sx-title">Mini x86</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/hardware-solutions" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Leggi di piu'</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 4 */}
                            <div className="masonry-item  col-lg-6 col-md-6 col-sm-12 m-b30">
                                <div className="sx-case-study-bx sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/schede-hardware"><ItodoImage id = "image4" src="images/case-study/pic-4.jpg" alt="" /></NavLink>
                                        <NavLink to="/schede-hardware" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Schede Elettroniche</div>
                                        <NavLink className="sx-l-title" to="/schede-hardware">
                                            <h2 className="sx-title">Io 24 ADC</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/schede-hardware" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Leggi di piu'</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 5 */}
                            <div className="masonry-item  col-lg-6 col-md-6 col-sm-12 m-b30">
                                <div className="sx-case-study-bx sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/schede-hardware"><ItodoImage src="images/case-study/pic-5.jpg" alt="" /></NavLink>
                                        <NavLink to="/schede-hardware" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Schede Elettroniche</div>
                                        <NavLink className="sx-l-title" to="/schede-hardware">
                                            <h2 className="sx-title">Io 24 ADC</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/schede-hardware" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Leggi di piu'</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 6 */}
                            <div className="masonry-item  col-lg-6 col-md-6 col-sm-12 m-b30">
                                <div className="sx-case-study-bx sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/schede-hardware"><ItodoImage id = "image6" src="images/case-study/pic-6.jpg" alt="" /></NavLink>
                                        <NavLink to="schede-hardware" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Schede Elettroniche</div>
                                        <NavLink className="sx-l-title" to="/schede-hardware">
                                            <h2 className="sx-title">Encoder 4</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/schede-hardware" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Leggi di piu'</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   {/* <div className="sx-pagination-wra text-center">
                        <ul className="sx-pagination">
                            <li><a href="#"><span className="fa fa-long-arrow-left" /></a></li>
                            <li><a href="#">01</a></li>
                            <li className="active"><a href="#">02</a></li>
                            <li><a href="#">03</a></li>
                            <li><a href="#">04</a></li>
                            <li><a href="#"><span className="fa fa-long-arrow-right" /></a></li>
                        </ul>
    </div>*/}
                </div>
                {/* TESTIMONIAL END */}
            </div>
            {/* SECTION CONTENT END  */}

        </>
    )
}

export default Portfolio1Page;