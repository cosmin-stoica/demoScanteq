import Banner from "../../sections/common/banner";
import { bannerData } from "../../../globals/banner";
import IntroSupervisor from "./introsupervisor";
import HubPrequel from "./hubprequel";
import HubDeclaration from "./hubdeclaration";

const SupervisorHomeComm = () => {

    return (
        <>
            <Banner _data={bannerData.tracciabilita} />
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding">
                <IntroSupervisor></IntroSupervisor>
            </div>

            <div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding">
                <HubPrequel></HubPrequel>
            </div>

            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding">
                <HubDeclaration></HubDeclaration>
            </div>
        </>
    );

};

export default SupervisorHomeComm;