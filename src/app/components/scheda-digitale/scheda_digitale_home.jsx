import React from "react";
import Banner from "../../sections/common/banner";
import { bannerData } from "../../../globals/banner";
import SchedaDigitaleIntro from "./scheda_digitale_intro";
import SchedaDigitaleCaratteristiche from "./scheda_digitale_caratteristiche";

const SchedaDigitaleHome = () => {
    return (
        <>
            <Banner _data={bannerData.scheda_controllo_digitale} />
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <SchedaDigitaleIntro></SchedaDigitaleIntro>
                </div>
            </div>

            <div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <SchedaDigitaleCaratteristiche></SchedaDigitaleCaratteristiche>
                </div>
            </div>
        </>
    );
};

export default SchedaDigitaleHome;
