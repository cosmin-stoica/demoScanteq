import Banner from "../../../elements/common/banner";
import { bannerData } from "../../../../globals/banner";
import IntroSupervisor from "./introsupervisor";
import HubPrequel from "./hubprequel";
import HubDeclaration from "./hubdeclaration";

const SupervisorHomeComm = () => {

    return (
        <>
            <Banner _data={bannerData.tracciabilita} />
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding">
                <IntroSupervisor></IntroSupervisor>
                <HubPrequel></HubPrequel>
            </div>

            <div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding">
                <HubDeclaration></HubDeclaration>
            </div>
        </>
    );

};

export default SupervisorHomeComm;