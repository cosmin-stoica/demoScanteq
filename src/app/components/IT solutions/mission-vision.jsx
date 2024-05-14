import Banner from "../../sections/common/banner";
import SectionAboutCompany4 from "../../sections/IT solutions/mission-vision/section-about-company4";
import SectionOurInfo2 from "../../sections/IT solutions/mission-vision/section-our-info2";
import SectionVideo3 from "../../sections/company/pricing/section-video3";
import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionTeam1 from "../../sections/home/index2/section-team1";
import SectionWhyChooseUs2 from "../../sections/home/index2/section-why-choose-us2";
import  NewClienti  from "../clienti/newClienti";
import { bannerData } from "../../../globals/banner";
import { video } from "../../../globals/data";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function MissionVisionPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.mission} />
            <SectionAboutCompany4 />
            <SectionOurInfo2/ >
            <SectionVideo2 />
            <NewClienti></NewClienti>
            <SectionWhyChooseUs2></SectionWhyChooseUs2>

        </>
    )
}

export default MissionVisionPage;