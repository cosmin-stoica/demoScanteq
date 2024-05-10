import { NavLink, useNavigate } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import { getAuth, signOut } from 'firebase/auth';

function HeaderSupervisor() {

    const [email, setEmail] = useState(null);
    const auth = getAuth();
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [isComponentMounted, setIsComponentMounted] = useState(true);
  
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
    
      function toggleNavClass() {
        setIsActive(!isActive);
      }


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
                                        <ul className="e-p-bx">
                                            <li>{email}</li>
                                            <li className="active">
                                        <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
                                    </li>c
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
                                        <NavLink to="/home">Traceability Hub </NavLink>
                                    </li>
                                    <li className="active">
                                        <NavLink to="/tracciabilita">Control Hub</NavLink>
                                    </li>
                                    <li className="active">
                                        <NavLink to="/ticket">Maintenance Hub</NavLink>
                                    </li>
                                    <li className="active">
                                        <NavLink to="/ticket">Ticket</NavLink>
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

export default HeaderSupervisor;