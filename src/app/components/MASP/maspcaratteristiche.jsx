import { bannerData } from "../../../globals/banner";
import Banner from "../../elements/common/bannerautoind";
import CaratteristicheMASP from "./caratteristicheMasp";
import IntroMasp from "./intromasp";
import MaspPrequel from "./maspprequel";

function MaspCaratteristiche() {
    return (
        <>
            {<Banner _data={bannerData.autoindustriale} />}

            <div className="bg-gray-light">
                {<MaspPrequel></MaspPrequel>}
            </div>

            <div className="section-full p-t100 p-b70 mobile-page-padding bg-gray-light">
                    {<CaratteristicheMASP></CaratteristicheMASP>}
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