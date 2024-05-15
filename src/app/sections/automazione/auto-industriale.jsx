import { bannerData } from "../../../globals/banner";
import Banner from "../common/bannerautoind";
import IndCont3 from "../IT blogs/detail/ind-cont3";
import IndCont4 from "../IT blogs/detail/ind-cont4";
import CaratteristicheMASP from "./caratteristicheMasp";
import IntroMasp from "./intromasp";
import JobCardsDef from "./jobcardsDef";
import JobHeaderMasp from "./JobHeaderMasp";
function AutoIndustriale() {
    return (
        <>
            {<Banner _data={bannerData.autoindustriale} />}
            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b70 mobile-page-padding containerjobheadermasp">
                <div className="container">
                    <IntroMasp></IntroMasp>
                </div>
            </div>
            <div id="cont22" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    {<CaratteristicheMASP></CaratteristicheMASP>}
                </div>
            </div>
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
            <div id="containertracciabilità" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    <IndCont4 />
                </div>
            </div>

            {/*<div id="containertabella" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    <IndCont3 />
                </div>
    </div>*/}


            {/* SECTION CONTENT END */}
        </>
    )
}
export default AutoIndustriale;