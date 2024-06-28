import React from "react";
import ClientiFinali from "./clientifinali";
import ContainerPartner from './containerpartner';
import { useTranslation } from 'react-i18next';
import Title from "../../elements/title";

function Clienti_Component({partner}) {

    const { t } = useTranslation();

    return <>
        <div id="clienti">
            {partner && 
            <>
            <Title title={t("home.clienti.header_1")} addClass="margin-top50 margin-bottom50"></Title>
            <div className="container section-full wow fadeInDown" data-wow-duration="1000ms">
                <ContainerPartner></ContainerPartner> 
            </div>
            </>
            } 
            <Title title={t("home.clienti.header_2")} addClass="margin-top100"></Title>
            <div className="container section-full wow fadeInDown" data-wow-duration="1000ms">
                <ClientiFinali></ClientiFinali>
            </div>
        </div>
    </>

}

export default Clienti_Component;