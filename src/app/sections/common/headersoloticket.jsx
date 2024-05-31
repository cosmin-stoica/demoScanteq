import { NavLink, useNavigate } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import { getAuth, signOut } from 'firebase/auth';

function HeaderSoloTicket() {

    const [email, setEmail] = useState(null);
    const auth = getAuth();
    const [isComponentMounted, setIsComponentMounted] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se c'è un utente autenticato
        if (auth.currentUser) {
            // Ottieni l'indirizzo email dell'utente autenticato
            const userEmail = auth.currentUser.email;
            setEmail(userEmail);
        }

        // Cleanup della componente quando viene smontata
        return () => {
            setIsComponentMounted(false);
        };
    }, [auth]);


    const [isActive, setIsActive] = useState(false);

    function toggleNavClass() {
        setIsActive(!isActive)
    }
    useEffect(() => {
        loadScript("js/mobilenav.js")
    })

    const isAdmin = email === 'admin@auth.com';


    const handleLogout = async () => {
        try {
            await signOut(auth);

            // Chiama la funzione destroy solo se il componente è montato
            if (isComponentMounted) {
                // Chiamare la funzione destroy o la logica necessaria per chiudere il menu
            }

            navigate("/login"); // Reindirizza l'utente alla pagina di login dopo il logout
        } catch (error) {
            console.error("Errore durante il logout:", error.message);
        }
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 991);
        };
    
        const intervalId = setInterval(() => {
          handleResize();
        }, 300);
    
        handleResize();
        return () => {
          clearInterval(intervalId);
        };
      }, []); 
    return (
        <>
            <header className={"header-style2 site-header mobile-sider-drawer-menu full-navbar " + (isActive ? "active" : "")}>
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
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
                                        {!isSmallScreen && <ul className="e-p-bx">
                                            <li>{email}</li>
                                             <li className="active">
                                                <NavLink id="logout" onClick={handleLogout}>Logout</NavLink>
                                            </li>
                                            {/*<li><a href="tel:+39 327 5875963"></a></li>*/}
                                        </ul>}
                                    </div>
                                </div>
                            </div>
                            {/* EXTRA Nav */}
                            {/* MAIN NAVIGATION */}
                            <div className="header-nav navbar-collapse collapse d-flex justify-content-center collapse ">
                                <ul className=" nav navbar-nav ">
                                    {isAdmin &&<li className="activesss">
                                        <NavLink to="/attivita">Attivita</NavLink>
                                    </li>}
                                    {isAdmin &&<li className="activesss">
                                        <NavLink to="/halconfig">Config</NavLink>
                                    </li>}
                                    <li className="activesss">
                                        <NavLink to="/ticketscanteq">Ticket</NavLink>
                                    </li>
                                    <li className="activesss">
                                        <NavLink to="/">Esci</NavLink>
                                    </li>
                                    {isSmallScreen && <li className="activess">
                                                <NavLink id="logout" onClick={handleLogout}>Logout ({email})</NavLink>
                                            </li>
                                    }
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default HeaderSoloTicket;