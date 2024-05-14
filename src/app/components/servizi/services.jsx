import Banner from "../../sections/common/banner";
import SectionWhyChooseUs1 from "../../sections/home/index/section-why-choose-us1";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../sections/company/about/section-why-choose-us4";
import SectionWhyChooseUs2 from "../../sections/home/index2/section-why-choose-us2";
import SectionClients2 from "../../sections/home/index2/section-clients2";
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