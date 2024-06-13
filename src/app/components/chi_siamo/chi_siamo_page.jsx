import Banner from "../../elements/common/banner";
import SectionVideo2 from "../../elements/common/section-video2";
import SectionWhyChooseUs4 from "../perche_sceglierci/section-why-choose-us4";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import SectionAboutCompany5 from "./section-about-company5";
import  Clienti_Component from "../clienti/clienti_component";
import ServicesHome from "../servizi/servizi_home/servicesHome";

function Chi_Siamo_Page() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.about} />
            <SectionAboutCompany5></SectionAboutCompany5>
            <ServicesHome></ServicesHome>
            <SectionVideo2 />
            <Clienti_Component></Clienti_Component>
            <SectionWhyChooseUs4 />
        </>
    )
}

export default Chi_Siamo_Page;