import React from "react";
import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

function ClientiFinali() {

    const { t } = useTranslation();

    return <>
        <div className="riquadroTestoClientiFinali wow fadeInDown" data-wow-duration="2000ms">
            {t("home.clienti.automotive_componentistica_desc")}</div>
        <div className="clientifinalipane">

            <div className="clientefinalediv menomarginclienti wow fadeInLeft" data-wow-duration="1500ms">
                <ItodoImage className="iconaclienti" src="images/clienti/autoprodotti.png"></ItodoImage>
                <div className="primapartecliente">
                    {t("home.clienti.automotive_componentistica_title")}
                </div>
                <div className="logoparte">
                    <ItodoImage src="images/clienti/lamborghini.png"></ItodoImage>
                    <ItodoImage src="images/clienti/sabelt.png"></ItodoImage>
                    <ItodoImage src="images/clienti/lear.png"></ItodoImage>
                    <ItodoImage src="images/clienti/aras.png"></ItodoImage>
                    <ItodoImage src="images/clienti/same.png"></ItodoImage>
                    <ItodoImage src="images/clienti/tristone.png"></ItodoImage>
                </div>

            </div>


            <div className="clientefinalediv wow fadeInRight" data-wow-duration="1500ms">
                <ItodoImage className="iconaclienti" src="images/clienti/processo.png"></ItodoImage>
                <div className="primapartecliente">
                    {t("home.clienti.lavorazioni_meccaniche_title")}
                </div>
                <div className="logoparte">
                    <ItodoImage src="images/clienti/proma.png"></ItodoImage>
                    <ItodoImage src="images/clienti/cellino.png"></ItodoImage>
                    <ItodoImage src="images/clienti/tmb.png"></ItodoImage>
                    <ItodoImage src="images/clienti/gkn.png"></ItodoImage>
                    <ItodoImage src="images/clienti/komatsu.png"></ItodoImage>
                    <ItodoImage src="images/clienti/steparava.png"></ItodoImage>
                </div>
            </div>


            <div className="riquadroTestoClientiFinali margin-top50 wow fadeInDown" data-wow-duration="2000ms">
                {t("home.clienti.automazione_ufficio_desc")}
            </div>



            <div className="clientefinalediv wow fadeInLeft" data-wow-duration="1500ms">
                <ItodoImage className="iconaclienti" src="images/clienti/ufficio.png"></ItodoImage>
                <div className="primapartecliente">
                    {t("home.clienti.automazione_ufficio_title")}
                </div>
                <div className="logoparte">
                    <ItodoImage src="images/clienti/musafree.png"></ItodoImage>
                </div>
            </div>


            <div className="riquadroTestoClientiFinali margin-top50 wow fadeInDown" data-wow-duration="2000ms">
                {t("home.clienti.istruzione_ricerca_desc")}
            </div>



            <div className="clientefinalediv wow fadeInRight" data-wow-duration="1500ms">
                <ItodoImage className="iconaclienti" src="images/clienti/ricerca.png"></ItodoImage>
                <div className="primapartecliente">
                {t("home.clienti.istruzione_ricerca_title")}
                </div>
                <div className="logoparte">
                    <ItodoImage src="images/clienti/polito.png"></ItodoImage>
                </div>

            </div>

        </div>

    </>

}

export default ClientiFinali;