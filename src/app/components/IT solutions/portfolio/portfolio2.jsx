import { bannerData } from "../../../../globals/banner";
import Banner from "../../../sections/common/banner";
import SectionClients2 from "../../../sections/home/index2/section-clients2";
import { Clienti } from "../../clienti/clienti";
import SectionPortfolio1 from "../../../sections/home/index3/section-portfolio1";

function Portfolio2Page() {
    return (
        <>
            <Banner _data={bannerData.portfolio2} />
            <SectionPortfolio1 />
            <Clienti />
        </>
    )
}

export default Portfolio2Page;