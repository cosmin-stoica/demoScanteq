import Banner from "../../sections/common/banner";
import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../sections/company/about/section-why-choose-us4";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import SectionAboutCompany5 from "../../sections/IT solutions/mission-vision/section-about-company5";
import  NewClienti from "../clienti/newClienti";
import ServicesHome from "../../sections/home/index2/servicesHome";

function AboutUsPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.about} />
            <SectionAboutCompany5></SectionAboutCompany5>
            <ServicesHome></ServicesHome>
            <SectionVideo2 />
            <NewClienti></NewClienti>
            <SectionWhyChooseUs4 />
        </>
    )
}

export default AboutUsPage;