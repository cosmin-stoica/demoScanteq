import React from "react";
import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const SchedaDigitaleIntro = () => {

    const { t } = useTranslation("scheda_di_controllo");
    const introDataList = t('intro.data', { returnObjects: true });


    const getIncrementalDescriptions = (variabile) => {
        let descriptions = [];
        let i = 1;
        let desc;

        while ((desc = t(`${variabile}${i}`)) && desc !== `${variabile}${i}`) {
            descriptions.push(desc);
            i++;
        }

        return descriptions;
    };

    const descriptionsUpper = getIncrementalDescriptions("intro.upper_desc_");
    const descriptionsLower = getIncrementalDescriptions("intro.lower_desc_");

    return (
        <>
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">{t("intro.header")}</h1>
            </div>



            <div className="scheda-digitale-intro-div">
                <div className="section-full wow fadeInDown width100 perflex" data-wow-duration="1500ms">
                    <ItodoImage className="scheda-digitale" src="images/hardware/controllodigitale/schedafinita.png"></ItodoImage>
                </div>
                {descriptionsUpper.map((desc, index) => (
                        <div className="margin-top50 section-full wow fadeInDown width100 perflex font-primary" data-wow-duration="1500ms" key={index}>{desc}</div>
                    ))}

                <div className="scheda-digitale-intro-div-list margin-top50">
                    {introDataList.map((data, index) => (
                        <div className="section-full wow fadeInRight" data-wow-delay={data.delay} data-wow-duration="1000ms">
                            <ItodoImage src={data.icona}></ItodoImage>
                            <p className="font-primary">{data.descrizione}</p>
                        </div>
                    ))}
                </div>

                <div className="width100 perflex">


                    {descriptionsLower.map((desc, index) => (
                        <div className="font-primary scheda-digitale-descrizione-aux margin-top50 section-full wow fadeInDown width100 perflex" data-wow-duration="1500ms" key={index}>{desc}</div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default SchedaDigitaleIntro;
