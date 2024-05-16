import { bannerData } from "../../../globals/banner";
import Banner from "../common/bannerautoind";
import JobCardsDef from "./jobcardsDef";
import JobHeaderMasp from "./JobHeaderMasp";
function MaspOperazioni() {
    return (
        <>
            {<Banner _data={bannerData.autoindustriale} />}

         
            <div className="section-full p-t100 p-b70 mobile-page-padding containerjobheadermasp">
                <div className="container">
                    <JobHeaderMasp></JobHeaderMasp>
                </div>
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