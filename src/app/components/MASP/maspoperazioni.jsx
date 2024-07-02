import { bannerData } from "../../../globals/banner";
import Banner from "../../elements/common/bannerautoind";
import JobCardsDef from "./jobcardsDef";
import JobHeaderMasp from "./JobHeaderMasp";
function MaspOperazioni() {
    return (
        <>
            {<Banner _data={bannerData.autoindustriale} />}

         
            <div className="margin-bottom100">
                    <JobHeaderMasp></JobHeaderMasp>
            </div>

            <div id="containerinterfaccia" className="section-full p-t100 p-b70 mobile-page-padding">
                {/*<IndCont2/>  */}
                {/*<JobCards></JobCards>*/}
                {<JobCardsDef></JobCardsDef>}
            </div>
        </>
    )
}
export default MaspOperazioni;