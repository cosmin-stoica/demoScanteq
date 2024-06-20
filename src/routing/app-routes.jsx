import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Chi_Siamo_Page from "../app/components/chi_siamo/chi_siamo_page";
import IconsPage from "../app/components/icons/icons";
import MissionVisionPage from "../app/components/mission_vision/missionvision_page";
import ContattaciPage from "../app/components/contattaci/contattaci_page";
import Home2Page from "../app/components/home/index2";
import Leadership from "../app/components/leadership/leadership";
import SupervisorHome from "../app/components/supervisor/supervisor_tecnico/supervisor_home";
import Tracciabilita from "../app/components/supervisor/supervisor_tecnico/traceability/tracciabilita";
import TableTracc from "../app/components/supervisor/supervisor_tecnico/traceability/tabletracc";
import TableBar from "../app/components/supervisor/supervisor_tecnico/traceability/tablebar";
import TableCheck from "../app/components/supervisor/supervisor_tecnico/traceability/tablecheck";
import TicketAdminPage from "../app/components/area_personale/ticket/ticketadmin_page";
import ControlHome from "../app/components/supervisor/supervisor_tecnico/control/controlhome";
import MaintenanceHome from "../app/components/supervisor/supervisor_tecnico/maintenance/maintenancehome";
import ScegliPostazione from "../app/components/supervisor/supervisor_tecnico/control/sceglipostazione";
import ErroriPostazioni from "../app/components/supervisor/supervisor_tecnico/maintenance/erroripostazioni";
import LogPostazioni from "../app/components/supervisor/supervisor_tecnico/maintenance/logpostazioni";
import ControlloPerPostazione from "../app/components/supervisor/supervisor_tecnico/control/controlloperpostazione";
import Postazioni from "../app/components/supervisor/supervisor_tecnico/control/postazioni";
import Risultati from "../app/components/supervisor/supervisor_tecnico/traceability/risultati";
import Termoforo from "../app/components/supervisor/supervisor_tecnico/traceability/termoforo";
import Coppia from "../app/components/supervisor/supervisor_tecnico/traceability/coppia";
import AnalysisHome from "../app/components/supervisor/supervisor_tecnico/maintenance/analysishome";
import AnalisiDinamica from "../app/components/supervisor/supervisor_tecnico/maintenance/analisidinamica";
import MesHome from "../app/components/supervisor/supervisor_tecnico/mes/meshome";
import GestioneCommesse from "../app/components/supervisor/supervisor_tecnico/mes/gestionecommesse";
import GestioneLavorazioni from "../app/components/supervisor/supervisor_tecnico/mes/gestionelavorazioni";
import GestioneComponenti from "../app/components/supervisor/supervisor_tecnico/mes/gestionecomponenti";
import GestioneInfoAusiliarie from "../app/components/supervisor/supervisor_tecnico/mes/gestioneinfoausiliarie";
import PickDemo from "../app/components/pick_to_image/picktoimage_tecnico/pickdemo";
import PickHome from "../app/components/pick_to_image/picktoimage_tecnico/pickhome";
import PickGestionePostazioni from "../app/components/pick_to_image/picktoimage_tecnico/pickgestionepostazioni";
import PickPanoramica from "../app/components/pick_to_image/picktoimage_tecnico/pickpanoramica";
import PickingHome from "../app/components/pick_to_image/picktoimage_commerciale/pickinghome";
import PickingScreen from "../app/components/pick_to_image/picktoimage_commerciale/pickingscreen";
import TicketUserPage from "../app/components/area_personale/ticket/ticketuser_page";
import LoginDeploy from "../app/components/login/logindeploy";
import AttivitaAdminPage from "../app/components/area_personale/attivita/attivitaAdmin_page";
import AreaPersonalePage from "../app/components/area_personale/areapersonale_page";
import ServiziHome from "../app/components/servizi/services";
import InCostruzione from "../app/components/incostruzione/incostruzione";
import MaspCaratteristiche from "../app/components/MASP/maspcaratteristiche";
import MaspOperazioni from "../app/components/MASP/maspoperazioni";
import MaspTracciabilita from "../app/components/MASP/masptracciabilita";
import SupervisorHomeComm from "../app/components/supervisor/supervisor_commerciale_page/supervisorhomecomm";
import MesComm from "../app/components/mes_commerciale_page/mescomm";
import HalConfigHome from "../app/components/halconfig/halconfig_home";
import UnitaControlloHome from "../app/components/unitacontrollo/unitacontrollo_home";
import SchedeAutomazioneHome from "../app/components/schede_automazione/schede_automazione_home";
import SchedaDigitaleHome from "../app/components/scheda_digitale/scheda_digitale_home";
import ImaginaHome from "../app/components/imagina/imaginahome";
import PrendiParametriDoc from "../app/components/halconfig/prendiparametridoc";
import Loader from "../app/elements/loader";
import Job_Config_Home from "../app/components/jobconfig/job_config_home";


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
      <Route path="/about-us" element={<Chi_Siamo_Page />} />
      <Route path="/icons" element={<IconsPage />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/mission" element={<MissionVisionPage />} />
      <Route path="/services" element={<ServiziHome></ServiziHome>} />
      <Route path="/contact-us" element={<ContattaciPage />} />
      <Route path="/imagina" element={<ImaginaHome></ImaginaHome>} />
      <Route path="/login" element={<LoginDeploy></LoginDeploy>} />
      <Route path="/supervisor" element={<SupervisorHomeComm></SupervisorHomeComm>} />
      <Route path="/errori-postazioni" element={<ErroriPostazioni></ErroriPostazioni>} />
      <Route path="/log-postazioni" element={<LogPostazioni></LogPostazioni>} />

      <Route path="/gestionecommesse" element={<GestioneCommesse />} />
      <Route path="/mes-home" element={<MesHome />} />
      <Route path="/home" element={<SupervisorHome />} />
      <Route path="/tracciabilita" element={<Tracciabilita />} />
      <Route path="/ticketadmin" element={<TicketAdminPage />} />
      <Route path="/tracciabilita-avvitature" element={<TableTracc />} />
      <Route path="/tracciabilita-barcode" element={<TableBar />} />
      <Route path="/tracciabilita-collaudo" element={<TableCheck />} />
      <Route path="/controlhome" element={<ControlHome />} />
      <Route path="/maintenancehome" element={<MaintenanceHome />} />
      <Route path="*" element={<Home2Page />} />
      <Route path="/analytics" element={<AnalysisHome />} />
      <Route path="/controllo-per-postazione" element={<ControlloPerPostazione />} />
      <Route path="/tracciabilita-termoforo" element={<Termoforo />} />
      <Route path="/tracciabilita-coppia" element={<Coppia />} />
      <Route path="/all-risultati" element={<Risultati />} />
      <Route path="/postazioni" element={<Postazioni />} />
      <Route path="/pickdemo" element={<PickDemo />} />
      <Route path="/analisi-dinamica" element={<AnalisiDinamica></AnalisiDinamica>} />
      <Route path="/stato-postazioni" element={<ScegliPostazione></ScegliPostazione>} />
      <Route path="/gestionelavorazioni" element={<GestioneLavorazioni></GestioneLavorazioni>} />
      <Route path="/gestionecomponenti" element={<GestioneComponenti></GestioneComponenti>} />
      <Route path="/gestioneinfoausiliarie" element={<GestioneInfoAusiliarie></GestioneInfoAusiliarie>} />
      <Route path="/picktoimage" element={<PickHome></PickHome>} />
      <Route path="/gestionipostazionipick" element={<PickGestionePostazioni></PickGestionePostazioni>} />
      <Route path="/panoramicapostazionipick" element={<PickPanoramica></PickPanoramica>} />
      <Route path="/picking" element={<PickingHome></PickingHome>} />
      <Route path="/pickingscreen" element={<PickingScreen></PickingScreen>} />
      <Route path="/ticketscanteq" element={<TicketUserPage></TicketUserPage>} />
      <Route path="/attivita" element={<AttivitaAdminPage></AttivitaAdminPage>} />
      <Route path="/areapersonale" element={<AreaPersonalePage></AreaPersonalePage>} />
      <Route path="/incostruzione" element={<InCostruzione></InCostruzione>} />

      <Route path="/masp-caratteristiche" element={<MaspCaratteristiche></MaspCaratteristiche>} />
      <Route path="/masp-operazioni" element={<MaspOperazioni></MaspOperazioni>} />
      <Route path="/masp-tracciabilita" element={<MaspTracciabilita></MaspTracciabilita>} />
      <Route path="/mes" element={<MesComm></MesComm>}></Route>
      <Route path="/halconfig" element={<HalConfigHome></HalConfigHome>}></Route>
      <Route path="/jobconfig" element={<Job_Config_Home></Job_Config_Home>}></Route>
      <Route path="/parametri" element={<PrendiParametriDoc></PrendiParametriDoc>}></Route>

      <Route path="/unitadicontrollo" element={<UnitaControlloHome></UnitaControlloHome>}></Route>
      <Route path="/schede-automazione" element={<SchedeAutomazioneHome></SchedeAutomazioneHome>}></Route>
      <Route path="/scheda-controllo-digitale" element={<SchedaDigitaleHome></SchedaDigitaleHome>}></Route>

      <Route path="/loader" element={<Loader></Loader>}></Route>

    </Routes>

  );
}

export default AppRoutes;