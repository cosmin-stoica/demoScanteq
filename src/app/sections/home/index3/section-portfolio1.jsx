import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";

function SectionPortfolio1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-portfolio-outer sx-bg-white">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Our Portfolio</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Our Latest Case Studies</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="sx-portfolio-bx-wrap m-b30">
                            <ul>
                                <li>
                                    <div className="sx-portfolio-bx">
                                        <div className="row d-flex justify-content-between">
                                            <div className="col-lg-4 col-md-4">
                                                <h4 className="sx-portfolio-title">Cyber Security Analysis</h4>
                                            </div>
                                            <div className="col-lg-2 col-md-4">
                                                <p className="sx-portfolio-type">design / development</p>
                                            </div>
                                            <div className="col-lg-6 col-md-4">
                                                <div className="sx-portfolio-btn text-right">
                                                    <NavLink to="/portfolio/detail" title="READ MORE" className="site-button icon">
                                                        <i className="fa  fa-long-arrow-right" />
                                                        View Detail
                                                    </NavLink>
                                                    <div className="sx-onshow-block">
                                                        <div className="sx-onshow-media sx-img-overlay">
                                                            <NavLink to="/portfolio/detail"><ItodoImage src="images/services/images/pic-1.jpg" alt=""/></NavLink>
                                                            <NavLink to="/portfolio/detail" className="sx-onshow-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sx-portfolio-bx">
                                        <div className="row d-flex justify-content-between">
                                            <div className="col-lg-4 col-md-4">
                                                <h4 className="sx-portfolio-title">Digital Product Design</h4>
                                            </div>
                                            <div className="col-lg-2 col-md-4">
                                                <p className="sx-portfolio-type">WordPress Theme</p>
                                            </div>
                                            <div className="col-lg-6 col-md-4">
                                                <div className="sx-portfolio-btn text-right">
                                                    <NavLink to="/portfolio/detail" title="READ MORE" className="site-button icon">
                                                        <i className="fa  fa-long-arrow-right" />
                                                        View Detail
                                                    </NavLink>
                                                    <div className="sx-onshow-block">
                                                        <div className="sx-onshow-media sx-img-overlay">
                                                            <NavLink to="/portfolio/detail"><ItodoImage src="images/services/images/pic-2.jpg" alt=""/></NavLink>
                                                            <NavLink to="/portfolio/detail" className="sx-onshow-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sx-portfolio-bx">
                                        <div className="row d-flex justify-content-between">
                                            <div className="col-lg-4 col-md-4">
                                                <h4 className="sx-portfolio-title">Apps UX/UI Design</h4>
                                            </div>
                                            <div className="col-lg-2 col-md-4">
                                                <p className="sx-portfolio-type">UX/UI Design</p>
                                            </div>
                                            <div className="col-lg-6 col-md-4">
                                                <div className="sx-portfolio-btn text-right">
                                                    <NavLink to="/portfolio/detail" title="READ MORE" className="site-button icon">
                                                        <i className="fa  fa-long-arrow-right" />
                                                        View Detail
                                                    </NavLink>
                                                    <div className="sx-onshow-block">
                                                        <div className="sx-onshow-media sx-img-overlay">
                                                            <NavLink to="/portfolio/detail"><ItodoImage src="images/services/images/pic-3.jpg" alt=""/></NavLink>
                                                            <NavLink to="/portfolio/detail" className="sx-onshow-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sx-portfolio-bx">
                                        <div className="row d-flex justify-content-between">
                                            <div className="col-lg-4 col-md-4">
                                                <h4 className="sx-portfolio-title">eCommerce Website Design</h4>
                                            </div>
                                            <div className="col-lg-2 col-md-4">
                                                <p className="sx-portfolio-type">Wordpress Theme</p>
                                            </div>
                                            <div className="col-lg-6 col-md-4">
                                                <div className="sx-portfolio-btn text-right">
                                                    <NavLink to="/portfolio/detail" title="READ MORE" className="site-button icon">
                                                        <i className="fa  fa-long-arrow-right" />
                                                        View Detail
                                                    </NavLink>
                                                    <div className="sx-onshow-block">
                                                        <div className="sx-onshow-media sx-img-overlay">
                                                            <NavLink to="/portfolio/detail"><ItodoImage src="images/services/images/pic-1.jpg" alt=""/></NavLink>
                                                            <NavLink to="/portfolio/detail" className="sx-onshow-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sx-portfolio-bx">
                                        <div className="row d-flex justify-content-between">
                                            <div className="col-lg-4 col-md-4">
                                                <h4 className="sx-portfolio-title">Multifunction Technology</h4>
                                            </div>
                                            <div className="col-lg-2 col-md-4">
                                                <p className="sx-portfolio-type">Branding</p>
                                            </div>
                                            <div className="col-lg-6 col-md-4">
                                                <div className="sx-portfolio-btn text-right">
                                                    <NavLink to="/portfolio/detail" title="READ MORE" className="site-button icon">
                                                        <i className="fa  fa-long-arrow-right" />
                                                        View Detail
                                                    </NavLink>
                                                    <div className="sx-onshow-block">
                                                        <div className="sx-onshow-media sx-img-overlay">
                                                            <NavLink to="/portfolio/detail"><ItodoImage src="images/services/images/pic-2.jpg" alt=""/></NavLink>
                                                            <NavLink to="/portfolio/detail" className="sx-onshow-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="sx-btn-center text-center">
                                <NavLink to="/portfolio/detail" className="site-button sx-btn-primary icon sx-btn-lg">
                                    <i className="fa  fa-long-arrow-right" />
                                    View All
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionPortfolio1;