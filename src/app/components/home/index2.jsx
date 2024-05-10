import SectionSlider2 from "../../sections/home/index2/section-slider2";
import SectionAboutCompany2 from "../../sections/home/index2/section-about-company2";
import SectionWhyChooseUs2 from "../../sections/home/index2/section-why-choose-us2";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import MaspImaginaNew from "../../sections/home/index/maspimaginanew";
import HomeAutomazione from "../../sections/automazione/homeautomazione";
import SezioneSchede from "../../sections/home/index/sezioneschede";
import NewClienti from "../clienti/newClienti";
import ServicesHome from "../../sections/home/index2/servicesHome";
import SupervisorHome from "../supervisor/supervisorhome";
import MesHome from "../meshome/meshome";

function Home2Page() {


    const isMobile = window.innerWidth >= 768;
    useEffect(() => {
        loadScript("js/custom.js")
    })

    return (       
      <>
            
            <SectionSlider2 />
            <SectionAboutCompany2 />
            <HomeAutomazione titolo={true} carousel={false}></HomeAutomazione>
            <SupervisorHome></SupervisorHome>
            <MesHome></MesHome>
            <MaspImaginaNew></MaspImaginaNew>
            <SezioneSchede></SezioneSchede>
            <ServicesHome></ServicesHome>
            <NewClienti></NewClienti> 
            <SectionWhyChooseUs2 />
      </>
  );
}

export default Home2Page;