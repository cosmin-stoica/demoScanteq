import React from "react";
import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

function ContainerPartner() {

    const { t } = useTranslation();

    return <>

        <div className="containerpartnergrosso">

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="cardPartner menomargin">
                    <div className="imageDivPartner">
                        <ItodoImage src="images/clienti/tecno.png" alt="" />
                    </div>
                    <div className="testoDivPartner">
                        {t("home.clienti.tecno_italia")}
                    </div>
                </div>
            </div>

            <div className="section-full wow fadeInRight" data-wow-duration="1000ms">
                <div className="cardPartner">
                    <div className="imageDivPartner">
                        <ItodoImage id="mibawidth" src="images/clienti/miba.png" alt="" />
                    </div>
                    <div className="testoDivPartner">
                        {t("home.clienti.miba")}
                    </div>
                </div>

            </div>
        </div>


    </>

}

export default ContainerPartner;