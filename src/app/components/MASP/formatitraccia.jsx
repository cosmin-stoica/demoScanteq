import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const FormatiTraccia = () => {

    const { t } = useTranslation("masp_tracciabilita");
    const tracciabilitaDataIntro = t('data', { returnObjects: true });

    if (Array.isArray(tracciabilitaDataIntro) && tracciabilitaDataIntro !== null) {
        tracciabilitaDataIntro.forEach(item => {
            console.log(item);
        });
    } else {
        console.error('La lista non è disponibile o non è un array.');
    }


    return (
        <>
            {tracciabilitaDataIntro.map((data, index) => (
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

            <div className={`section-full wow fadeInRight`} data-wow-duration="1500ms">
                <div className={`servizio-card-upper margin-top100`}>
                    <div className="servizio-card-title masp-card-title width100 perflex">
                        {t("esempio_etichette")}
                    </div>
                    <div className="">
                        <div className="masp-card-per-img">
                            <ItodoImage className="masp-card-img-tracciabilita" src="" alt="" />
                        </div>
                        <div className="">
                            <div className="masp-card-secondaparte-div-imgstampa">
                                <ItodoImage src="images/masp/tracciabilita/16.png"></ItodoImage>
                                <div className="perflex-img-traccia">
                                    <div className="perflex-img-traccia-uno">
                                        <ItodoImage src="images/masp/tracciabilita/17.png"></ItodoImage>
                                    </div>
                                    <div className="perflex-img-traccia-due">
                                        <ItodoImage src="images/masp/tracciabilita/18.png"></ItodoImage>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="width100 perflex margin-top100">
                <NavLink to="/masp-operazioni"><button className="masp-btn-indietro">{t("button_indietro")}</button></NavLink>
                <NavLink to="/supervisor"><button className="masp-btn-avanti">{t("button_avanti")}</button></NavLink>

            </div>
        </>
    );
};

export default FormatiTraccia;