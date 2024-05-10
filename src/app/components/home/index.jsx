import SectionSlider1 from "../../sections/home/index/section-slider1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionWhyChooseUs1 from "../../sections/home/index/section-why-choose-us1";
import SectionVideo1 from "../../sections/home/index/section-video1";
import SectionPricing1 from "../../sections/home/index/section-pricing1";
import SectionClients1 from "../../sections/home/index/section-clients1";
import SectionCaseStudy1 from "../../sections/home/index/section-case-study1";
import SectionBlogs1 from "../../sections/home/index/section-blogs1";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function Home1Page() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <SectionSlider1 />
            <SectionServices1 />
            <SectionAboutCompany1 />
            <SectionWhyChooseUs1 />
            <SectionVideo1 />
            <SectionPricing1 />
            <SectionClients1 />
            <SectionCaseStudy1 />
            <SectionBlogs1 />
        </>
    )
}

export default Home1Page;