import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const MesCard = () => {

    const { t } = useTranslation();

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
                                            <p class="card-contentMAIM">
                                                {t("home.primo_piano.mes.desc_1")}
                                            </p>

                                            <p class="card-contentMAIM">
                                                {t("home.primo_piano.mes.desc_2")}
                                            </p>

                                            <p class="card-contentMAIM">
                                                {t("home.primo_piano.mes.desc_3")}
                                            </p>

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