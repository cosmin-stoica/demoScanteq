import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";

function Footer() {
    return (
        <>
            <footer className="site-footer footer-dark">
                <div className="sx-f-nl-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <h2 id="contt" className="sx-f-title">
                                    Contattaci
                                </h2>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="sx-nl-form">
                                    <form>
                                        <div className="sx-nl-form-inner">
                                            <input type="text" className="sx-nl-form-input" placeholder="info@scanteq.com" />
                                            <a className="sx-nl-form-btn"><i className="flaticon-back-left" /></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FOOTER BLOCKES START */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* ABOUT COMPANY */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix p-b15">
                                        <NavLink to="/" className="sx-text-primary"><ItodoImage id="logofooter" src="images/logo.png" alt="#" /></NavLink>
                                    </div>
                                    <p>Non esitare a contattarci per qualsiasi domanda, richiesta o feedback.
                                    </p>
                                    <div className="widget_about-call-section">
                                        <div className="sx-f-call-icon"><i className="flaticon-telephone" /></div>
                                        <div className="sx-f-call-section">
                                            <span>Contattaci </span>
                                            <a href="tel:+39 327 5875963">+39 327 5875963</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* EXPLORE LINKS */}
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 col">
                                <div className="widget widget_services">
                                    <h4 className="sx-f-title">Esplora Links</h4>
                                    <ul>
                                        <li><NavLink to="/services">Servizi</NavLink></li>
                                        <li><NavLink to="/software-solutions">Soluzioni software</NavLink></li>
                                        <li><NavLink to="/leadership">Leadership</NavLink></li>
                                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                        <li><NavLink to="/contact-us">Contattaci</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* USEFUL LINK */}
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 col">
                                <div className="widget widget_services">
                                    <h4 className="sx-f-title">Links Utili</h4>
                                    <ul>
                                        <li><NavLink to="/mission">Vision</NavLink></li>
                                        <li><NavLink to="/about-us">Chi siamo</NavLink></li>
                                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                        <li><NavLink to="/hardware-solutions">Soluzioni Hardware</NavLink></li>
                                        <li><NavLink to="/schede-hardware">Schede Elettroniche</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* SOLUTIONS */}
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 col footer-col-3">
                                <div className="widget widget_info">
                                    <h4 className="sx-f-title">Info</h4>
                                    <ul>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-phone" />
                                            </div>
                                            <div className="widget-info-detail">
                                                <a href="tel:+39 327 5875963">+39 327 5875963</a>                                            </div>
                                        </li>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-email" />
                                            </div>
                                            <div className="widget-info-detail">
                                                <p>info@scanteq.com</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-maps-and-flags" />
                                            </div>
                                            <div className="widget-info-detail">
                                                <p>Via XXIV Maggio 28, 10024, Moncalieri (TO) - Italy</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           {/* CONTACT US */} {/*
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="widget widget_insta-gallery">
                                    <h4 className="sx-f-title">Instagram</h4>
                                    <ul>
                                        <li>
                                            <div className="sx-f-insta">
                                                <NavLink to="/gallery">
                                                    <ItodoImage src="images/f-insta/pic1.jpg" alt="#" />
                                                    <i className="feather-instagram" />
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-f-insta">
                                                <NavLink to="/gallery">
                                                    <ItodoImage src="images/f-insta/pic2.jpg" alt="#" />
                                                    <i className="feather-instagram" />
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-f-insta">
                                                <NavLink to="/gallery">
                                                    <ItodoImage src="images/f-insta/pic3.jpg" alt="#" />
                                                    <i className="feather-instagram" />
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-f-insta">
                                                <NavLink to="/gallery">
                                                    <ItodoImage src="images/f-insta/pic4.jpg" alt="#" />
                                                    <i className="feather-instagram" />
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-f-insta">
                                                <NavLink to="/gallery">
                                                    <ItodoImage src="images/f-insta/pic5.jpg" alt="#" />
                                                    <i className="feather-instagram" />
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-f-insta">
                                                <NavLink to="/gallery">
                                                    <ItodoImage src="images/f-insta/pic6.jpg" alt="#" />
                                                    <i className="feather-instagram" />
                                                </NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/*<div className="sx-f-bottom-section">
                    <div className="sx-f-social">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/">
                                    <i className="flaticon-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <i className="flaticon-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/">
                                    <i className="flaticon-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <i className="flaticon-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sx-f-copy">
                        © 2023 by <NavLink to="/index">Itodo.</NavLink> All rights reserved.
                    </div>
                </div> */}
                {/* FOOTER COPYRIGHT */}
            </footer>

        </>
    )
}

export default Footer;