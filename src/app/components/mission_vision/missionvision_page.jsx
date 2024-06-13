import Banner from "../../elements/common/banner";
import SectionAboutCompany4 from "./section-about-company4";
import SectionOurInfo2 from "./section-our-info2";
import SectionVideo2 from "../../elements/common/section-video2";
import SectionWhyChooseUs2 from "../perche_sceglierci/section-why-choose-us2";
import  Clienti_Component  from "../clienti/clienti_component";
import { bannerData } from "../../../globals/banner";
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
            <Clienti_Component></Clienti_Component>
            <SectionWhyChooseUs2></SectionWhyChooseUs2>

        </>
    )
}

export default MissionVisionPage;