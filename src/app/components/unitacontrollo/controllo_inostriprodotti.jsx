import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Controllo_I_Nostri_Prodotti = () => {

    const { t } = useTranslation("unita_di_controllo");
    const iNostriProdottiData = t('i_nostri_prodotti.data', { returnObjects: true });

    return (
        <>
            <div>
                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <h1 className="TitoloCapitolo">{t("i_nostri_prodotti.header")}</h1>
                </div>

                {iNostriProdottiData.map((data, index) => (
                    <div className={`section-full wow fadeIn${data.fade}`} data-wow-duration="1500ms">
                        <div key={index} className={`servizio-card-upper ${data.margin ? 'margin-top100' : ''}`}>
                            <div className="servizio-card-title masp-card-title width100 perflex">
                                {data.titolo}
                            </div>
                            <div className="servizio-card">
                                <div className="masp-card-per-img">
                                    <ItodoImage className="masp-card-img-hardware-unitadicontrollo" src={data.immagineSrc} alt={data.immagineAlt} />
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
                    <NavLink to="/schede-automazione"><button className="masp-btn-avanti">{t("button_avanti")}</button></NavLink>
                </div>

            </div>
        </>
    );
};

export default Controllo_I_Nostri_Prodotti;