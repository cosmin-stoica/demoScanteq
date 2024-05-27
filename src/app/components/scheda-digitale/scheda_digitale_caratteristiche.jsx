import React from "react";
import descrizioneData from "../../../globals/DataTEXT/Hardware/Scheda_Digitale/descrizioneData";
import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";


const SchedaDigitaleCaratteristiche = () => {
    return (
        <>
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">Soluzione Embedded Potente e Flessibile</h1>
            </div>

            {descrizioneData.map((data, index) => (
                <div className={`section-full wow fadeIn${data.fade}`} data-wow-duration="1500ms">
                    <div key={index} className={`servizio-card-upper ${data.margin ? 'margin-top100' : ''}`}>
                        <div className="servizio-card-title masp-card-title width100 perflex">
                            {data.titolo}
                        </div>
                        <div className="servizio-card">
                            <div className="masp-card-per-img">
                                <ItodoImage className="masp-card-img-tracciabilita" src={data.immagineSrc} alt={data.immagineAlt} />
                            </div>
                            <div className="servizio-card-secondapartemasp">
                                {data.dettagli.map((dettaglio, dettaglioIndex) => (
                                    <div key={dettaglioIndex} className="masp-card-secondaparte-div">
                                        <div className="masp-card-secondaparte-div-divi">
                                            <i className={dettaglio.iconaClasse} />
                                        </div>
                                        <p>{dettaglio.descrizione}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="width100 perflex margin-top100">
                <NavLink to="/schede-automazione"><button className="masp-btn-indietro">Indietro</button></NavLink>
            </div>


        </>
    );
};

export default SchedaDigitaleCaratteristiche;