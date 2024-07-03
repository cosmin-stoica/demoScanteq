import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header2() {

    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();

    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('it');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

    useEffect(() => {
        const currentLanguage = i18n.language.toUpperCase();
        setSelectedLanguage(currentLanguage);
    }, [i18n])


    function toggleNavClass() {
        setIsActive(!isActive)
    }
    useEffect(() => {
        loadScript("js/mobilenav.js")
    })

    const handleSupervisorClick = async () => {
        if (auth.currentUser) {
            // User is already logged in, navigate to /home
            navigate("/home");
        } else {
            // User is not logged in, handle the login action or navigate to the login page
            // Example: navigate("/login");
        }
    };


    const handleTicketClick = async () => {
        if (!auth.currentUser) {
            navigate("/login")
        }
    };



    return (
        <>
            <header className={"header-style2 site-header mobile-sider-drawer-menu full-navbar " + (isActive ? "active" : "")}>
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar">
                        <div className="container clearfix">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one zindex1 ">
                                    <NavLink to="/">
                                        <ItodoImage id='logoscanteq' src="images/logohead_white.png" alt="#" />
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
                            <div className="extra-nav">
                                {<div className="extra-nav">
                                    <div className="sx-language-dd dropdown">
                                        <div className="sl-nav-1">
                                            {/*<div className="sx-language-first sx-title" id="FR"><b>FR</b></div>*/}
                                            <button className="sl-nav-1-btn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="perflex width100">
                                                    <div className="c-name c-name-outside">
                                                        <ItodoImage
                                                            src={["ro", "en", "fr"].includes(selectedLanguage) ? `images/flag/${selectedLanguage}.png` : 'images/flag/it.png'}
                                                            alt="flag"
                                                        />


                                                    </div>
                                                </div>
                                                <span className="color-white">{selectedLanguage}</span>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li onClick={() => changeLanguage('it')}>
                                                    <div className="sl-flag">
                                                        <div className="c-name">
                                                            <ItodoImage src="images/flag/it.png" alt="alt" />
                                                        </div>
                                                    </div>
                                                    <span className="active color-black">Italiano</span>
                                                </li>
                                                <li onClick={() => changeLanguage('en')}>
                                                    <div className="sl-flag">
                                                        <div className="c-name">
                                                            <ItodoImage src="images/flag/en.png" alt="alt" />
                                                        </div>
                                                    </div>
                                                    <span className="active color-black">English</span>
                                                </li>
                                                <li onClick={() => changeLanguage('fr')}>
                                                    <div className="sl-flag">
                                                        <div className="c-name">
                                                            <ItodoImage src="images/flag/fr.png" alt="alt" />
                                                        </div>
                                                    </div>
                                                    <span className="active color-black">Français</span>
                                                </li>
                                                <li onClick={() => changeLanguage('ro')}>
                                                    <div className="sl-flag">
                                                        <div className="c-name">
                                                            <ItodoImage src="images/flag/ro.png" alt="alt" />
                                                        </div>
                                                    </div>
                                                    <span className="active color-black">Română</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>}
                                {/* <div className="extra-cell">
                                    <ul className="list-unstyled social-bx d-flex flex-wrap align-content-center text-white ">
                                        <li><a href="https://www.facebook.com/"><i className="feather-facebook" /></a></li>
                                        <li><a href="https://twitter.com/"><i className="feather-twitter" /></a></li>
                                        <li><a href="https://www.linkedin.com/"><i className="feather-linkedin" /></a></li>
                                        <li><a href="https://www.instagram.com/"><i className="feather-instagram" /></a></li>
                                    </ul>
    </div> */}
                                <div className="extra-cell">
                                    <div className="sx-topbar-left">
                                        <ul className="e-p-bx">
                                            <li>info@scanteq.com</li>
                                            <li><a href="tel:+39 327 5875963">+39 327 5875963</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* EXTRA Nav */}
                            {/* MAIN NAVIGATION */}
                            <div className="header-nav navbar-collapse collapse d-flex justify-content-center collapse ">
                                <ul className=" nav navbar-nav ">
                                    <li className="active zindex100">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about-us" >{t('header.chi_siamo')}</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to="/about-us#aboutpane" >{t('header.la_nostra_storia')}</NavLink></li>
                                            <li><NavLink to="/mission">Vision</NavLink></li>
                                            <li><NavLink to="/leadership">Leadership</NavLink></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <NavLink>MASP</NavLink>
                                        <ul className="sub-menu">
                                            {/*<li><NavLink to="/masp">Piattaforma MASP</NavLink></li>*/}
                                            <li><NavLink to="/masp-caratteristiche">{t('header.masp_caratteristiche')}</NavLink></li>
                                            <li><NavLink to="/masp-operazioni">{t('header.masp_operazioni')}</NavLink></li>
                                            <li><NavLink to="/masp-tracciabilita">{t('header.masp_tracciabilità')}</NavLink></li>
                                            <li><NavLink to="/supervisor">Supervisor</NavLink></li>
                                            <li><NavLink to="/mes">Mes</NavLink></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <NavLink to="/imagina">Imagina</NavLink>
                                    </li>


                                    <li>
                                        <NavLink>Hardware</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to="/unitadicontrollo">{t("header.unità_di_controllo")}</NavLink></li>
                                            <li><NavLink to="/schede-automazione">{t("header.schede_per_automazione")}</NavLink></li>
                                            <li><NavLink to="/scheda-controllo-digitale">{t("header.scheda_di_controllo_digitale")}</NavLink></li>
                                        </ul>

                                    </li>
                                    {/*<li>
                                        <NavLink to="/picking">Picking</NavLink>

</li>*/}
                                    {/*<li>
                                        <NavLink to="/blogs">IT Blogs</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to="/blogs">Blog</NavLink></li>
                                            <li><NavLink to="/blogs/list">Blog Grid Sidebar </NavLink></li>
                                            <li><NavLink to="/blogs/detail-with-sidebar">Blog Detail Sidebar</NavLink></li>
                                            <li><NavLink to="/blogs/detail">Blog Detail</NavLink></li>
                                        </ul>
</li>*/}

                                    <li>
                                        <NavLink to="/services">{t('header.servizi')}</NavLink>
                                    </li>
                                    <li onClick={handleTicketClick}><NavLink to="/areapersonale">{t('header.area_personale')}</NavLink></li>
                                    {/*<li className="loginli" onClick={handleSupervisorClick}><NavLink to="/login">Supervisor</NavLink></li>}*/}
                                    <li><NavLink to="/contact-us">{t('header.contattaci')}</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header2;