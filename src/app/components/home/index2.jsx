import SectionSlider2 from "../slider/section-slider2";
import SectionAboutCompany2 from "../chi_siamo_home/section-about-company2";
import SectionWhyChooseUs2 from "../perche_sceglierci/section-why-choose-us2";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import MaspImaginaNew from "../imagina/imagina_home/maspimaginanew";
import HomeAutomazione from "../MASP/homeautomazione";
import SezioneSchede from "../schede_home/sezioneschede";
import Clienti_Component from "../clienti/clienti_component";
import ServicesHome from "../servizi/servizi_home/servicesHome";
import SupervisorHome from "../supervisor/supervisor_commerciale_home/supervisorhome";
import MesHome from "../mes_commerciale_home/meshome";

function Home2Page() {


    const isMobile = window.innerWidth >= 768;
    useEffect(() => {
        loadScript("js/custom.js")
    })

    return (       
      <>
            
            <SectionSlider2 />
            <SectionAboutCompany2 />
            <HomeAutomazione titolo={true}></HomeAutomazione>
            <SupervisorHome></SupervisorHome>
            <MesHome></MesHome>
            <MaspImaginaNew></MaspImaginaNew>
            <SezioneSchede></SezioneSchede>
            <ServicesHome></ServicesHome>
            <Clienti_Component></Clienti_Component> 
            <SectionWhyChooseUs2 />
      </>
  );
}

export default Home2Page;