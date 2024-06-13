import Banner from "../../elements/common/banner";
import SectionVideo2 from "../../elements/common/section-video2";
import SectionWhyChooseUs4 from "../perche_sceglierci/section-why-choose-us4";
import Clienti_Component from "../clienti/clienti_component";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import ServiziCard from "./servizicard";

function ServiziHome() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.services} />
            <ServiziCard></ServiziCard>
            <SectionVideo2 />
            <Clienti_Component />
            <SectionWhyChooseUs4 />
     
        </>
    )
}

export default ServiziHome;