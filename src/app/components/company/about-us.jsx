import Banner from "../../sections/common/banner";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../sections/company/about/section-why-choose-us4";
import { Clienti } from "../clienti/clienti";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import SectionAboutCompany5 from "../../sections/IT solutions/mission-vision/section-about-company5";

function AboutUsPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.about} />
            <SectionAboutCompany5></SectionAboutCompany5>
            <SectionServices1 />
            <SectionVideo2 />
                        <Clienti />
            <SectionWhyChooseUs4 />
        </>
    )
}

export default AboutUsPage;