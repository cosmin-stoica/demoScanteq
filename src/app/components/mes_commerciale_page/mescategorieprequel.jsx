import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';
const MesCategoriePrequel = () => {
    
    const { t } = useTranslation("mes");

    return (
        <>
            <div className="container">

                <div className="categorie-div-row">

                    <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                        <div className="categoria-div">
                            <ItodoImage src="images/mes/lavorazioni.png"></ItodoImage>
                            <p>{t("prequel.processes_title")}</p>
                        </div>
                    </div>

                    <div className="section-full wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="categoria-div">
                            <ItodoImage src="images/mes/commesse.png"></ItodoImage>
                            <p>{t("prequel.orders_title")}</p>
                        </div>
                    </div>

                    <div className="section-full wow fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="categoria-div">
                            <ItodoImage src="images/mes/componenti.png"></ItodoImage>
                            <p>{t("prequel.components_title")}</p>
                        </div>
                    </div>

                    <div className="section-full wow fadeInRight" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="categoria-div">
                            <ItodoImage src="images/mes/info.png"></ItodoImage>
                            <p>{t("prequel.info_title")}</p>
                        </div>
                    </div>

                </div>

                <div className="section-full wow fadeInDown" data-wow-delay="900ms" data-wow-duration="1500ms">
                    <div className="width100 perflex">
                        <div className="mes-descrizione">
                            <p>{t("prequel.desc")}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MesCategoriePrequel;