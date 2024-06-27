import React from "react";
import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SchedaDigitaleCaratteristiche = () => {
    
    const { t } = useTranslation("scheda_di_controllo");
    const descrizioneData = t('caratteristiche.data', { returnObjects: true });

    return (
        <>
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">{t('caratteristiche.header')}</h1>
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
                                        <div className="orange-circle">
                                            <i className={dettaglio.iconaClasse} />
                                            </div>
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
                <NavLink to="/schede-automazione"><button className="masp-btn-indietro">{t('button_indietro')}</button></NavLink>
            </div>


        </>
    );
};

export default SchedaDigitaleCaratteristiche;
