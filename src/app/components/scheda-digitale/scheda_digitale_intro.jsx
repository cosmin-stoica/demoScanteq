import React from "react";
import introData from "../../../globals/DataTEXT/Hardware/Scheda_Digitale/introData";
import introDataList from "../../../globals/DataTEXT/Hardware/Scheda_Digitale/introDataList";
import ItodoImage from "../../elements/itodo-img";

const SchedaDigitaleIntro = () => {
    return (
        <>
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">Scheda di controllo elettronico multifunzionale</h1>
            </div>



            <div className="scheda-digitale-intro-div">
                <div className="section-full wow fadeInDown width100 perflex" data-wow-duration="1500ms">
                    <ItodoImage className="scheda-digitale" src="images/hardware/controllodigitale/schedafinita.png"></ItodoImage>
                </div>
                <div className="margin-top50">
                    {introData[0].intro}
                </div>

                <div className="scheda-digitale-intro-div-list margin-top50">
                    {introDataList.map((data, index) => (
                        <div className="section-full wow fadeInRight" data-wow-delay={data.delay} data-wow-duration="1000ms">
                            <ItodoImage src={data.icona}></ItodoImage>
                            <p>{data.descrizione}</p>
                        </div>
                    ))}
                </div>

                <div className="width100 perflex">
                    <div className="scheda-digitale-descrizione-aux margin-top50 section-full wow fadeInDown width100 perflex" data-wow-duration="1500ms">
                      {introData[0].aux}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchedaDigitaleIntro;
