import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { loadScript } from "../../../globals/constants";
import { useEffect } from "react";

function Header1() {

    const [isActive, setIsActive] = useState(false);

    function toggleNavClass() {
        setIsActive(!isActive)
    }

    useEffect(()=>{
        loadScript("js/mobilenav.js")
    })

    return (
        <>
            <header className={"header-style1 site-header  mobile-sider-drawer-menu " + (isActive ? "active" : "")}>
                <div className="top-bar">
                    <div className="container">
                        <div className="d-flex justify-content-between  align-content-center">
                            <div className="sx-topbar-left">
                                <ul className="e-p-bx">
                                    <li>valentin.drogoreanu@scanteq.com</li>
                                    <li><a href="tel:+39 327 5875963">+39 327 5875963</a></li>
                                </ul>
                            </div>
                            <div className="sx-topbar-right">
                                <div className="top-bar-nav">
                                    <ul>
                                        <li><NavLink to="/about-us">Terms &amp; Condition</NavLink></li>
                                        <li><NavLink to="/faq">Privacy Policy</NavLink></li>
                                        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                                    </ul>
                                </div>
                                <div className="sx-language-dd dropdown">
                                    <div className="sl-nav-1">
                                        <div className="sx-language-first sx-title" id="FR"><b>FR</b></div>
                                        <button className="sl-nav-1-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            En
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <div className="sl-flag">
                                                    <div className="c-name">
                                                        <ItodoImage src="images/flag/germany.png" alt="alt" />
                                                    </div>
                                                </div>
                                                <span className="active">Germany</span>
                                            </li>
                                            <li>
                                                <div className="sl-flag">
                                                    <div className="c-name">
                                                        <ItodoImage src="images/flag/italy.png" alt="alt" />
                                                    </div>
                                                </div>
                                                <span className="active">Italy</span>
                                            </li>
                                            <li>
                                                <div className="sl-flag">
                                                    <div className="c-name">
                                                        <ItodoImage src="images/flag/spain.png" alt="alt" />
                                                    </div>
                                                </div>
                                                <span className="active">Spain</span>
                                            </li>
                                            <li>
                                                <div className="sl-flag">
                                                    <div className="c-name">
                                                        <ItodoImage src="images/flag/united-states.png" alt="alt" />
                                                    </div>
                                                </div>
                                                <span className="active">USA</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar">
                        <div className="container clearfix">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to="/">
                                    <ItodoImage id = "logoscanteq" src="images/Logo.png" alt="" />
                                    </NavLink>
                                </div>
                            </div>
                            {/* NAV Toggle Button */}
                            <button id="mobile-side-drawer"
                                data-target=".header-nav"
                                data-toggle="collapse"
                                className="navbar-toggler collapsed"
                                onClick={toggleNavClass}
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar icon-bar-first" />
                                <span className="icon-bar icon-bar-two" />
                                <span className="icon-bar icon-bar-three" />
                            </button>
                            {/* EXTRA NAV */}
                           {/* <div className="extra-nav">
                                <div className="extra-cell">
                                    <ul className="list-unstyled social-bx d-flex flex-wrap align-content-center">
                                        <li><a href="https://www.facebook.com/"><i className="feather-facebook" /> </a></li>
                                        <li><a href="https://twitter.com/"><i className="feather-twitter" /> </a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="feather-linkedin" /> </a></li>
                                        <li><a href="https://www.instagram.com/"><i className="feather-instagram" /> </a></li>
                                    </ul>
                                </div>
    </div> */}
                            {/* EXTRA Nav */}
                            {/* MAIN NAVIGATION */}
                            <div className="header-nav navbar-collapse collapse d-flex justify-content-center collapse ">
                                <ul className=" nav navbar-nav ">
                                    <li className="active">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about-us">Company</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to="/about-us">About Us</NavLink></li>
                                            <li><NavLink to="/faq">Faq Page</NavLink></li>
                                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                                            <li><NavLink to="/icons">Icons</NavLink></li>
                                            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                                            <li><NavLink to="/why-choose-us">Why Choose Us</NavLink></li>
                                            <li><NavLink to="/pricing">Pricing</NavLink></li>
                                            <li><NavLink to="/team">Team</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to="/mission">IT Solutions</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to="/mission">Mission &amp; Vision</NavLink></li>
                                            <li><NavLink to="/services">Services</NavLink></li>
                                            <li><NavLink to="/services/detail">Services Detail</NavLink></li>
                                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                            <li><NavLink to="/portfolio2">Portfolio-2</NavLink></li>
                                            <li><NavLink to="/portfolio/detail">Portfolio Detail</NavLink></li>
                                        </ul>
                                    </li>
                                    {/*<li>
                                        <NavLink to="/blogs">IT Blogs</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to="/blogs">Blog</NavLink></li>
                                            <li><NavLink to="/blogs/list">Blog Grid Sidebar </NavLink></li>
                                            <li><NavLink to="/blogs/detail-with-sidebar">Blog Detail Sidebar</NavLink></li>
                                            <li><NavLink to="/blogs/detail">Blog Detail</NavLink></li>
                                        </ul>
</li> */}
                                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header >

        </>
    )
}

export default Header1;