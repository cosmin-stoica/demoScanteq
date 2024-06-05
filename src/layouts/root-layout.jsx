import { useLocation } from "react-router-dom";
import Footer from "../app/sections/common/footer";
import Header1 from "../app/sections/common/header1";
import Header2 from "../app/sections/common/header2";
import Header3 from "../app/sections/common/header3";
import Header22 from "../app/sections/common/header22";
import AppRoutes from "../routing/app-routes";
import Login from "../app/sections/common/login";
import Home from "../app/components/home/home";
import LoginDeploy from "../app/sections/common/logindeploy";

function RootLayout() {
    const { pathname } = useLocation();

    return (
        <>
          <div className="page-wraper">
            {/* Utilizza un'istruzione if per controllare il pathname */}
            {pathname === '/login' ? (
              <LoginDeploy />
            ) : pathname === '/home' ? ( // Se il pathname è "/home", reindirizza all'Home
              <Home />
            ): pathname === 'adminhome' || pathname ==="/halconfig" || pathname === "/parametri" || pathname === '/areapersonale' || pathname === "/attivita" || pathname === "/ticketscanteq" || pathname === '/picking' || pathname ==='/tracciabilita-coppia' || pathname ==='/panoramicapostazionipick' || pathname ==='/gestionipostazionipick' || pathname ==='/picktoimage' || pathname === '/pickdemo' || pathname === '/gestioneinfoausiliarie' || pathname === '/analisi-dinamica' || pathname === '/gestionecomponenti' || pathname === '/gestionelavorazioni' || pathname === '/gestionecommesse' || pathname === '/mes-home' || pathname === '/postazioni' || pathname === '/tracciabilita' || pathname ==='/tracciabilita-termoforo' || pathname === "/all-risultati" || pathname ==='/controllo-per-postazione' || pathname === '/ticket' || pathname === '/tracciabilita-avvitature' || pathname === '/ticketadmin' || pathname === '/stato-postazioni' || pathname === '/login' || pathname === '/home' || pathname === '/errori-postazioni' || pathname ==='/stato-postazioni' || pathname === '/controlhome' || pathname === '/maintenancehome' || pathname === '/adminhome' || pathname === '/tracciabilita' || pathname === '/tracciabilita-avvitature' || pathname === '/tracciabilita-barcode' || pathname === '/tracciabilita-collaudo' || pathname === '/tracciabilita-supervisor' || pathname === '/tracciabilita' || pathname === '/home' || pathname === '/ticket' || pathname === '/ticketadmin' || pathname ==='/log-postazioni' || pathname ==='/analytics' ? (
              // Se il pathname è "/private", non renderizzare alcun header
              null
            ) : (
              // Altrimenti, renderizza Header2 di default
              pathname === '/index' ? <Header3 /> : <Header2 />
            )}
    
            <div className="page-content">
              {pathname !== '/login' && pathname !== '/home'  && <AppRoutes />}
            </div>
    
            {pathname !== '/login' && pathname !== "/halconfig" && pathname !== "/parametri" && pathname !== "/incostruzione" && pathname !=="/attivita" && pathname !== '/areapersonale' && pathname !== '/picking' && pathname !== '/ticketscanteq' && pathname !== '/gestionipostazionipick' && pathname !== '/panoramicapostazionipick' && pathname !== '/home' && pathname !=='/picktoimage' && pathname !=='/pickdemo' && pathname !== '/postazioni' && pathname !== '/gestioneinfoausiliarie' && pathname !== '/gestionelavorazioni' && pathname !== '/gestionecomponenti' && pathname !== '/gestionecommesse' && pathname !== '/mes-home' && pathname !== '/analisi-dinamica' && pathname !== '/tracciabilita-coppia' && pathname !== '/tracciabilita-termoforo' && pathname !== '/errori-postazioni' && pathname !=='/all-risultati' && pathname !=='/stato-postazioni' && pathname !== '/controlhome' && pathname !== '/maintenancehome' && pathname !== '/adminhome' && pathname !== '/tracciabilita' && pathname !== '/tracciabilita-avvitature' && pathname !== '/tracciabilita-barcode' && pathname !== '/tracciabilita-collaudo' && pathname !== '/tracciabilita-supervisor' && pathname !== '/tracciabilita' && pathname !== '/home' && pathname !== '/ticket' && pathname !== '/ticketadmin' && pathname !== '/log-postazioni' && pathname !=='/analytics' && pathname !== '/controllo-per-postazione' && <Footer />}
            {/* <!-- BUTTON TOP START --> */}
            <button className="scroltop">
              <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
            </button>
          </div>
        </>
      );
    }

export default RootLayout;