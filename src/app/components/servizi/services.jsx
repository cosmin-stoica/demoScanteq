import Banner from "../../sections/common/banner";
import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../sections/company/about/section-why-choose-us4";
import NewClienti from "../clienti/newClienti";
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
            <NewClienti />
            <SectionWhyChooseUs4 />
     
        </>
    )
}

export default ServiziHome;