import React from "react";
import Banner from "../../elements/common/banner";
import { bannerData } from "../../../globals/banner";
import SchedeAutomazioneIntro from "./schede_automazione_intro";
import SchedeAutomazionePrequel from "./schede_automazione_prequel";
import Schede_Descrizione from "./schede_descrizione";

const SchedeAutomazioneHome = () => {
    return (
        <>
            <Banner _data={bannerData.schede_automazione} />

            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <SchedeAutomazioneIntro></SchedeAutomazioneIntro>
                    <SchedeAutomazionePrequel></SchedeAutomazionePrequel>
                </div>
            </div>

            
            <div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                   <Schede_Descrizione></Schede_Descrizione>
                </div>
            </div>

        </>
    );
};

export default SchedeAutomazioneHome;
