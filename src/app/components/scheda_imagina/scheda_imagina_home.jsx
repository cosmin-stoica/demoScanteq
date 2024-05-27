import React from "react";
import Banner from "../../sections/common/banner";
import { bannerData } from "../../../globals/banner";
import { NavLink } from "react-router-dom";

const SchedaImaginaHome = () => {
    return (
        <>
            <Banner _data={bannerData.scheda_imagina} />
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding width100 perflex-column">
                <div className="container">
                    <p>imagina</p>

                    <div className="width100 perflex margin-top100">
                        <NavLink to="/scheda-controllo-digitale"><button className="masp-btn-indietro">Indietro</button></NavLink>
                    </div>

                </div>
            </div>
            {/*<div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <Controllo_I_Nostri_Prodotti></Controllo_I_Nostri_Prodotti>
                </div>
    </div>*/}

        </>
    );
};

export default SchedaImaginaHome;
