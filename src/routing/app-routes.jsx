import React, { useEffect, useState } from "react";
import { Route,Routes, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import AboutUsPage from "../app/components/about-us/about-us";
import IconsPage from "../app/components/about-us/icons";
import MissionVisionPage from "../app/components/IT solutions/mission-vision";
import ServicesDetailPage from "../app/components/IT solutions/services/detail";
import Portfolio1Page from "../app/components/IT solutions/portfolio/portfolio1";
import Portfolio2Page from "../app/components/IT solutions/portfolio/portfolio2";
import PortfolioDetailPage from "../app/components/IT solutions/portfolio/detail";
import BlogGridPage from "../app/components/IT blogs/blog-grid";
import BlogListSidebarPage from "../app/components/IT blogs/blog-list-sidebar";
import BlogDetailPage from "../app/components/IT blogs/blog-detail";
import BlogDetailSidebarPage from "../app/components/IT blogs/blog-detail-sidebar";
import ContactUsPage from "../app/components/contactus/contact-us";
import Hardware from "../app/components/IT solutions/portfolio/hardware";
import Schede from "../app/components/IT solutions/portfolio/schede";
import Home2Page from "../app/components/home/index2";
import AutoHome from "../app/sections/automazione/autohome";
import Leadership from "../app/components/IT blogs/leadership";
import Home from "../app/components/home/home";
import AdminHome from "../app/components/home/adminhome";
import Tracciabilita from "../app/components/home/tracciabilita";
import TableTracc from "../app/components/traceability/tabletracc";
import TableBar from "../app/components/traceability/tablebar";
import TableCheck from "../app/components/home/tablecheck";
import Ticket from "../app/components/contactus/ticket";
import TableSuper from "../app/components/home/tablesuper";
import TicketAdmin from "../app/components/contactus/ticketadmin";
import ControlHome from "../app/components/control/controlhome";
import MaintenanceHome from "../app/components/maintenance/maintenancehome";
import ScegliPostazione from "../app/components/control/sceglipostazione";
import ErroriPostazioni from "../app/components/maintenance/erroripostazioni";
import LogPostazioni from "../app/components/maintenance/logpostazioni";
import ControlloPerPostazione from "../app/components/control/controlloperpostazione";
import Postazioni from "../app/components/control/postazioni";
import Risultati from "../app/components/traceability/risultati";
import Termoforo from "../app/components/traceability/termoforo";
import Coppia from "../app/components/traceability/coppia";
import AnalysisHome from "../app/components/maintenance/analysishome";
import AnalisiDinamica from "../app/components/maintenance/analisidinamica";
import MesHome from "../app/components/mes/meshome";
import GestioneCommesse from "../app/components/mes/gestionecommesse";
import GestioneLavorazioni from "../app/components/mes/gestionelavorazioni";
import GestioneComponenti from "../app/components/mes/gestionecomponenti";
import GestioneInfoAusiliarie from "../app/components/mes/gestioneinfoausiliarie";
import PickDemo from "../app/components/picktoimage/pickdemo";
import PickHome from "../app/components/picktoimage/pickhome";
import PickGestionePostazioni from "../app/components/picktoimage/pickgestionepostazioni";
import PickPanoramica from "../app/components/picktoimage/pickpanoramica";
import PickingHome from "../app/components/picking/pickinghome";
import PickingScreen from "../app/components/picking/pickingscreen";
import TicketSingolo from "../app/components/contactus/ticketsingolo";
import LoginDeploy from "../app/sections/common/logindeploy";
import AttivitaAdmin from "../app/components/contactus/attivitaAdmin";
import AreaPersonale from "../app/components/contactus/areapersonale";
import ServiziHome from "../app/components/servizi/services";
import InCostruzione from "../app/components/incostruzione/incostruzione";
import MaspCaratteristiche from "../app/sections/automazione/maspcaratteristiche";
import MaspOperazioni from "../app/sections/automazione/maspoperazioni";
import MaspTracciabilita from "../app/sections/automazione/masptracciabilita";
import SupervisorHomeComm from "../app/components/supervisorcomm/supervisorhomecomm";
import MesComm from "../app/components/mescomm/mescomm";
import HalConfigHome from "../app/components/halconfig/halconfig_home";
import UnitaControlloHome from "../app/components/unitacontrollo/unitacontrollo_home";
import SchedeAutomazioneHome from "../app/components/schede-automazione/schede_automazione_home";
import SchedaDigitaleHome from "../app/components/scheda-digitale/scheda_digitale_home";
import SchedaImaginaHome from "../app/components/scheda_imagina/scheda_imagina_home";
import ImaginaHome from "../app/components/imagina/imaginahome";
import PrendiParametriDoc from "../app/components/halconfig/prendiparametridoc";
import Loader from "../app/elements/loader";


function PrivateRoute2({ children }) {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return user ? <>{children}</> : <Navigate to="/login" />;
}

function PrivateRoute({ children }) {
  return children;
}
  

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home2Page />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/icons" element={<IconsPage />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/mission" element={<MissionVisionPage />} />
                <Route path="/services" element={<ServiziHome></ServiziHome>} />
                <Route path="/services/detail" element={<ServicesDetailPage />} />
                <Route path="/portfolio" element={<Portfolio1Page />} />
                <Route path="/portfolio2" element={<Portfolio2Page />} />
                <Route path="/portfolio/detail" element={<PortfolioDetailPage />} />
                <Route path="/blogs" element={<BlogGridPage />} />
                <Route path="/blogs/list" element={<BlogListSidebarPage />} />
                <Route path="/blogs/detail-with-sidebar" element={<BlogDetailSidebarPage />} />
                <Route path="/blogs/detail" element={<BlogDetailPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/hardware-solutions" element={<Hardware />} />
                <Route path="/schede-hardware" element={<Schede />} />
                <Route path="/automazione" element={<AutoHome />} />
                <Route path="/imagina" element={<ImaginaHome></ImaginaHome>} />
                <Route path="/login" element={<LoginDeploy></LoginDeploy>} />
                <Route path="/supervisor" element={<SupervisorHomeComm></SupervisorHomeComm>}/>
                <Route path="/errori-postazioni" element={<ErroriPostazioni></ErroriPostazioni>} />
                <Route path="/log-postazioni" element={<LogPostazioni></LogPostazioni>} />

                <Route
          path="/gestionecommesse"
          element={
            
              <GestioneCommesse />
            
          }/>

                <Route
          path="/mes-home"
          element={
            
              <MesHome />
            
          }/>

                <Route
          path="/home"
          element={
            
              <Home />
            
          }/>
              <Route
          path="/tracciabilita"
          element={
            
              <Tracciabilita />
           
          }/>
              <Route
          path="/ticket"
          element={
            
              <Ticket />
            
          }/>
           <Route
          path="/ticketadmin"
          element={
           
              <TicketAdmin />
         
          }/>
           <Route
          path="/adminhome"
          element={
            
              <AdminHome />
         
          }/>
           <Route
          path="/tracciabilita-avvitature"
          element={
           
              <TableTracc />
           
          }/>
           <Route
          path="/tracciabilita-barcode"
          element={
            
              <TableBar />
          
          }/>
           <Route
          path="/tracciabilita-collaudo"
          element={
            
              <TableCheck />
          
          }/>
            <Route
          path="/tracciabilita-supervisor"
          element={
           
              <TableSuper />
          
          }/>
            <Route
          path="/controlhome"
          element={
           
              <ControlHome />
          
          }/>
           <Route
          path="/maintenancehome"
          element={
           
              <MaintenanceHome />
          
          }/>
            <Route
          path="*"
          element={
           
              <Home2Page />
          
          }/>
            <Route
          path="/analytics"
          element={
           
              <AnalysisHome></AnalysisHome>
          
          }/>
             <Route
          path="/controllo-per-postazione"
          element={
           
              <ControlloPerPostazione></ControlloPerPostazione>
          
          }/>
            <Route
          path="/tracciabilita-termoforo"
          element={
           
              <Termoforo></Termoforo>
          
          }/>
           <Route
          path="/tracciabilita-coppia"
          element={
           
              <Coppia></Coppia>
          
          }/>
          <Route
          path="/all-risultati"
          element={
           
             <Risultati></Risultati>
          
          }/>
           <Route
          path="/postazioni"
          element={
           
             <Postazioni></Postazioni>
          
          }/>
            <Route
          path="/pickdemo"
          element={
           
             <PickDemo></PickDemo>
          
          }/>


                <Route path="/analisi-dinamica" element={<AnalisiDinamica></AnalisiDinamica>}/>
                <Route path="/stato-postazioni" element={<ScegliPostazione></ScegliPostazione>} />
                <Route path="/gestionelavorazioni" element={<GestioneLavorazioni></GestioneLavorazioni>} />
                <Route path="/gestionecomponenti" element={<GestioneComponenti></GestioneComponenti>} />
                <Route path="/gestioneinfoausiliarie" element={<GestioneInfoAusiliarie></GestioneInfoAusiliarie>} />
                <Route path="/picktoimage" element={<PickHome></PickHome>} />
                <Route path="/gestionipostazionipick" element={<PickGestionePostazioni></PickGestionePostazioni>} />
                <Route path="/panoramicapostazionipick" element={<PickPanoramica></PickPanoramica>} />
                <Route path="/picking" element={<PickingHome></PickingHome>} />
                <Route path="/pickingscreen" element={<PickingScreen></PickingScreen>} />
                <Route path="/ticketscanteq" element={<TicketSingolo></TicketSingolo>} />
                <Route path="/attivita" element={<AttivitaAdmin></AttivitaAdmin>} />
                <Route path="/areapersonale" element={<AreaPersonale></AreaPersonale>} />
                <Route path="/incostruzione" element={<InCostruzione></InCostruzione>} />

                <Route path="/masp-caratteristiche" element={<MaspCaratteristiche></MaspCaratteristiche>} />
                <Route path="/masp-operazioni" element={<MaspOperazioni></MaspOperazioni>} />
                <Route path="/masp-tracciabilita" element={<MaspTracciabilita></MaspTracciabilita>} />
                <Route path="/mes" element={<MesComm></MesComm>}></Route>
                <Route path="/halconfig" element={<HalConfigHome></HalConfigHome>}></Route>
                <Route path="/parametri" element={<PrendiParametriDoc></PrendiParametriDoc>}></Route>

                <Route path="/unitadicontrollo" element={<UnitaControlloHome></UnitaControlloHome>}></Route> 
                <Route path="/schede-automazione" element={<SchedeAutomazioneHome></SchedeAutomazioneHome>}></Route> 
                <Route path="/scheda-controllo-digitale" element={<SchedaDigitaleHome></SchedaDigitaleHome>}></Route>     
                <Route path="/scheda-imagina" element={<SchedaImaginaHome></SchedaImaginaHome>}></Route>     

                <Route path="/loader" element={<Loader></Loader>}></Route>
            </Routes>
        
    );
}

export default AppRoutes;