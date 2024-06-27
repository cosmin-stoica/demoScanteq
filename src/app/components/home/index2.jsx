import SectionSlider2 from "../slider/section-slider2";
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
import Intro_Prodotti from "./intro_prodotti";
import Title from "../../elements/title";
import HomeSection from "../../elements/homeSection";
import SupervisorHomeCard from "./supervisor_homecard";
import MesHomeCard from "./mes_homecard";
import SchedeHomeCard from "./schede_homecard";
import PercheSceglierciNew from "../perche_sceglierci/perche_sceglierci_new";

function Home2Page() {


  const isMobile = window.innerWidth >= 768;
  useEffect(() => {
    loadScript("js/custom.js")
  })

  return (
    <>

      <SectionSlider2 />
      <Intro_Prodotti></Intro_Prodotti>
      <HomeAutomazione titolo={false}></HomeAutomazione>
      <SupervisorHomeCard></SupervisorHomeCard>
      <MesHomeCard></MesHomeCard>
      <SchedeHomeCard></SchedeHomeCard>
      <ServicesHome></ServicesHome>
  <Clienti_Component></Clienti_Component>
      <PercheSceglierciNew></PercheSceglierciNew>
      {/*<SectionWhyChooseUs2 />*/}
    </>
  );
}

export default Home2Page;