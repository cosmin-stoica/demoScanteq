import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import LavorazioniEsempio from "./lavorazioniesempio";
import CommesseEsempio from "./commesseesempio";
import ComponentiEsempio from "./componentiesempio";
import InfoEsempio from "./infoesempio";
import { useTranslation } from 'react-i18next';

const MesDeclaration = () => {

    const { t } = useTranslation("mes");
    const Arraydata = t('declaration.data', { returnObjects: true });

    if (!Arraydata || !Array.isArray(Arraydata)) {
        console.error('La lista non è disponibile o non è un array.');
        return <p>Data is not available</p>; // Render a fallback UI
    }

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
                                    <ItodoImage src={data.iconaSrc}></ItodoImage>
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


                            {data.isLavorazioni &&
                                <LavorazioniEsempio></LavorazioniEsempio>}

                            {data.isCommesse &&
                                <CommesseEsempio></CommesseEsempio>}

                            {data.isComponenti &&
                                <ComponentiEsempio></ComponentiEsempio>}

                            {data.isInfo &&
                                <InfoEsempio></InfoEsempio>}



                        </div>
                    </div>

                ))}

                <div className="width100 perflex margin-top100">
                    <NavLink to="/supervisor"><button className="masp-btn-indietro">{t("button_indietro")}</button></NavLink>
                </div>

            </div>
        </>
    );
};

export default MesDeclaration;