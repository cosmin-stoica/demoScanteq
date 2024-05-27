import React from "react";
import Banner from "../../sections/common/banner";
import { bannerData } from "../../../globals/banner";
import IntroUnita from "./introunita";
import Controllo_I_Nostri_Prodotti from "./controllo_inostriprodotti";

const UnitaControlloHome = () => {
    return (
        <>
            <Banner _data={bannerData.unita_di_controllo} />
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding width100 perflex-column">
                <div className="container">
                    <IntroUnita></IntroUnita>
                </div>
            </div>
            <div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <Controllo_I_Nostri_Prodotti></Controllo_I_Nostri_Prodotti>
                </div>
            </div>

        </>
    );
};

export default UnitaControlloHome;
