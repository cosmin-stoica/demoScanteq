import Banner from "../../sections/common/banner";
import { bannerData } from "../../../globals/banner";
import MesIntro from "./mesintro";
import MesCategoriePrequel from "./mescategorieprequel";
import MesDeclaration from "./mesdeclaration";

const MesComm = () => {

    return (
        <>
            <Banner _data={bannerData.mes} />
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding">
                <MesIntro></MesIntro>
            </div>
            <div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding">
                <MesCategoriePrequel></MesCategoriePrequel>
            </div>
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding">
                <MesDeclaration></MesDeclaration>
            </div>
        </>
    );

};

export default MesComm;