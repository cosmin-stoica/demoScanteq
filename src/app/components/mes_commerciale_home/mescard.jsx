import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const MesCard = () => {

    const { t } = useTranslation();

    const getIncrementalDescriptions = () => {
        let descriptions = [];
        let i = 1;
        let desc;

        while ((desc = t(`home.primo_piano.mes.desc_${i}`)) && desc !== `home.primo_piano.mes.desc_${i}`) {
            descriptions.push(desc);
            i++;
        }

        return descriptions;
    };

    const descriptions = getIncrementalDescriptions();

    return (
        <div id="clienti" className="perflex width100">
            <div className="perflex">

                <div className="margin-top100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                    <div class="parentMAIM">
                        <div class="cardMAIM">
                            <div className="perflex width100">
                                <img className="maspimagehome" src="/assets/images/mes/meslogo.png" alt="Supervisor" />
                                <p className="CardMaimTitleTop">{t("home.primo_piano.mes.header")}</p>
                            </div>

                            <div className="sopraBox">
                                <div class="boxes">
                                    <div class="box">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="box">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="box">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="box">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>



                                <div class="content-boxMAIM">

                                    <div className="primaparteconimg wow fadeInRight" data-wow-duration="2000ms">

                                        <NavLink to="/mes">
                                            <img className="maspimage-principale" src="/assets/images/mes/mes.png" alt="Mes" />
                                        </NavLink>
                                    </div>
                                    <div className="secondapartetesto wow fadeInDown" data-wow-duration="2000ms">
                                        <span class="card-titleMAIM">{t("home.primo_piano.mes.title")}</span>
                                        <div id="piattaformap" className="sx-about-bx3-content">
                                            {descriptions.map((desc, index) => (
                                                <p class="card-contentMAIM" key={index}>{desc}</p>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                                <NavLink to="/mes"><span id="seemoreUpgrade">{t("home.primo_piano.mes.button")}</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MesCard;