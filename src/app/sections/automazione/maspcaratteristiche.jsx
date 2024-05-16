import { bannerData } from "../../../globals/banner";
import Banner from "../common/bannerautoind";
import IndCont4 from "../IT blogs/detail/ind-cont4";
import CaratteristicheMASP from "./caratteristicheMasp";
import IntroMasp from "./intromasp";
import JobCardsDef from "./jobcardsDef";
import JobHeaderMasp from "./JobHeaderMasp";
import MaspPrequel from "./maspprequel";
function MaspCaratteristiche() {
    return (
        <>
            {<Banner _data={bannerData.autoindustriale} />}

            <div id="cont22" className="section-full p-t100 p-b70 mobile-page-padding ">
                <div className="container">
                    {<MaspPrequel></MaspPrequel>}
                </div>
            </div>

            <div id="cont22" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    {<CaratteristicheMASP></CaratteristicheMASP>}
                </div>
            </div>
            <div className="section-full p-t100 p-b70 mobile-page-padding containerjobheadermasp">
                <div className="container">
                    <IntroMasp></IntroMasp>
                </div>
            </div>
        </>
    )
}
export default MaspCaratteristiche;