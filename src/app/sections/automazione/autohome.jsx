import Banner from "../../sections/common/banner";
import { NavLink } from "react-router-dom";
import { bannerData } from "../../../globals/banner";
import SectionCaseStudy1 from "../home/index/section-case-study1";
import SectionAboutCompany1 from "../home/index/section-about-company1";
import SectionClients2 from "../home/index2/section-clients2";
import { Clienti } from "../../components/clienti/clienti";
import SectionWhyChooseUs2 from "../home/index2/section-why-choose-us2";
import HomeAutomazione from "./homeautomazione";
import MaspImaginaNew from "../home/index/maspimaginanew";
function AutoHome() {
    
    return (
        <>

            <Banner _data={bannerData.automazione} />
            <HomeAutomazione titolo={false} carousel={false}></HomeAutomazione>
            <MaspImaginaNew></MaspImaginaNew>
                      
                        {/*<Clienti/>*/}
                        {/*<SectionWhyChooseUs2></SectionWhyChooseUs2>*/}
        </>
    )
}

export default AutoHome;