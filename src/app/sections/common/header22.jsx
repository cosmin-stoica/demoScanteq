import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import { getAuth } from 'firebase/auth';

function Header22() {

    const [email, setEmail] = useState(null);
    const auth = getAuth();
  
    useEffect(() => {
      // Verifica se c'è un utente autenticato
      if (auth.currentUser) {
        // Ottieni l'indirizzo email dell'utente autenticato
        const userEmail = auth.currentUser.email;
        setEmail(userEmail);
      }
    }, [auth]);

    const [isActive, setIsActive] = useState(false);

    function toggleNavClass() {
        setIsActive(!isActive)
    }
    useEffect(()=>{
        loadScript("js/mobilenav.js")
    })

    const isAdmin = email === 'admin@auth.com';

    return (
        <>
            <header className={"header-style2 site-header mobile-sider-drawer-menu full-navbar " + (isActive ? "active" : "")}>
                <div  className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div id="headertracc" className="main-bar">
                        <div className="container clearfix">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    {/*<NavLink to="/">
                                        <ItodoImage id = 'logoscanteq' src="images/logo.png" alt="#" />
    </NavLink>*/}
                                    <h2 className="arear">Scanteq © Area Riservata</h2>
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
                
                                <div className="extra-cell">
                                    <div className="sx-topbar-left">
                                        <ul className="e-p-bx">
                                            <li>{email}</li>
                                            {/*<li><a href="tel:+39 327 5875963"></a></li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* EXTRA Nav */}
                            {/* MAIN NAVIGATION */}
                            <div className="header-nav navbar-collapse collapse d-flex justify-content-center collapse ">
                                <ul className=" nav navbar-nav ">
                                    

                                    <li className="active">
                                        <NavLink to="/home">Esci</NavLink>
                                    </li>
                                    <li> 
                                        <NavLink to="/tracciabilita-avvitature">Avvitature</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/tracciabilita-barcode">Barcode</NavLink>
                                    </li>
                                    <li>
                                        
                                    <NavLink to="/tracciabilita-collaudo">Collaudo</NavLink>
    
                                    </li>
                                    <li>
                                        
                                    <NavLink to="/tracciabilita-supervisor">Supervisor</NavLink>
    
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header22;