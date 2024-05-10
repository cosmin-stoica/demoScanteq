import Banner from "../../sections/common/banner";
import SectionPricing2 from "../../sections/company/pricing/section-pricing2";
import SectionVideo3 from "../../sections/company/pricing/section-video3";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionWhyChooseUs3 from "../../sections/home/index3/section-why-choose-us3";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import { bannerData } from "../../../globals/banner";
import { video } from "../../../globals/data";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function PricingPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.pricing} />
            <SectionPricing2 />
            <SectionAboutCompany1 />
            <SectionVideo3 _data={video.pricing} />
            <SectionWhyChooseUs3 />
            <SectionClients2 />
        </>
    )
}

export default PricingPage;