import { NavLink } from "react-router-dom";
import ControlEsempi from "./controlesempi";
import TracciabilitaEsempi from "./tracciabilitaesempi";
import MaintenanceEsempi from "./maintenanceesempi";
import { useTranslation } from 'react-i18next';

const HubDeclaration = () => {

    const { t } = useTranslation("supervisor");
    const Arraydata = t('declaration.data', { returnObjects: true });

    return (
        <>

            <div className="container">
                {Arraydata.map((data, index) => (
                    <div className={`section-full wow fadeIn${data.fade}`} data-wow-duration="1500ms">
                        <div key={index} className={`servizio-card-upper ${data.margin ? 'margin-top100' : ''}`}>
                            <div className="servizio-card-title masp-card-title width100 perflex">
                                {data.titolo}
                            </div>
                            <div className="servizio-card">
                                <div className="masp-card-per-img">
                                    <i className={data.iconaSrc} />
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

                            {data.isControl &&
                             <ControlEsempi></ControlEsempi>}



                            {data.isTraceability &&
                               <TracciabilitaEsempi></TracciabilitaEsempi>}

                            {data.isMaintenance &&
                               <MaintenanceEsempi></MaintenanceEsempi>
                            }
                        </div>
                    </div>

                ))}

                <div className="width100 perflex margin-top100">
                    <NavLink to="/masp-tracciabilita"><button className="masp-btn-indietro">{t("button_indietro")}</button></NavLink>
                    <NavLink to="/mes"><button className="masp-btn-avanti">{t("button_avanti")}</button></NavLink>

                </div>

            </div>
        </>
    );
};

export default HubDeclaration;