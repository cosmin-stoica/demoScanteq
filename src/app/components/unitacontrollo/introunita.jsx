import React, { useState, useEffect } from "react";
import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';
import Title from "../../elements/title";


const IntroUnita = () => {
    const { t } = useTranslation("unita_di_controllo");
    const text = "";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(prev => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <>
            <div className="">
                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <Title title={t("intro.header")}></Title>
                </div>

                {/*<div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <div className="introunita-div">

                        <div>
                            <ItodoImage src="images/hardware/unitadicontrollo/piantanainsieme.png" alt="piantana"></ItodoImage>
                        </div>
                        <div className="text-container">

                            {introData[0].intro} <br></br><br></br>
                            {introData[0].intro_piantana}
                        </div>

                    </div>
                </div>*/}

                <div className={`section-full wow fadeInDown`} data-wow-duration="1500ms">
                    <div className={`servizio-card-upper`}>
                        <div className="servizio-card">
                            <div className="masp-card-per-img">
                                <ItodoImage className="masp-card-img-hardware-unitadicontrollo" src="images/hardware/unitadicontrollo/piantanainsieme.png" alt="Piantana" />
                            </div>
                            <div className="servizio-card-secondapartemasp">
                                <div className="masp-card-secondaparte-div">
                                    <div className="masp-card-secondaparte-div-divi">
                                        <div className="orange-circle">
                                            <i className="flaticon-growth" />
                                        </div>
                                    </div>
                                    <p> {t("intro.desc_1")}</p>
                                </div>
                                <div className="masp-card-secondaparte-div">
                                    <div className="masp-card-secondaparte-div-divi">
                                        <div className="orange-circle">
                                            <i className="flaticon-development" />
                                        </div>
                                    </div>
                                    <p>{t("intro.desc_2")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    );
};

export default IntroUnita;
