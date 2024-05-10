import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionWhyChooseUs1 from "../../sections/home/index/section-why-choose-us1";
import SectionBlogs1 from "../../sections/home/index/section-blogs1";
import SectionWhyChooseUs3 from "../../sections/home/index3/section-why-choose-us3";
import SectionSlider3 from "../../sections/home/index3/section-slider3";
import SectionServices3 from "../../sections/home/index3/section-services3";
import SectionPortfolio1 from "../../sections/home/index3/section-portfolio1";
import SectionTeam2 from "../../sections/home/index3/section-team2";
import SectionTestimonials3 from "../../sections/home/index3/section-testimonials3";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function Home3Page() {

    useEffect(() => {
        loadScript("js/custom.js")
    })

    return (
        <>
            <SectionSlider3 />
            <SectionServices3 />
            <SectionAboutCompany1 />
            <SectionWhyChooseUs1 />
            <SectionPortfolio1 />
            <SectionTeam2 />
            <SectionTestimonials3 />
            <SectionWhyChooseUs3 />
            <SectionBlogs1 />
        </>
    )
}

export default Home3Page;