import React from "react";
import { NavLink } from "react-router-dom";
import HubCard from "./hubcard";
import { useTranslation } from 'react-i18next';

const SupervisorCard = () => {


    const { t } = useTranslation();


    return (
        <div id="clientiwhite" className="perflex width100">
            <div className="perflex">

                <div className="margin-top100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                    <div class="parentMAIM">
                        <div class="cardMAIM">
                            <div className="perflex width100">
                                <img className="maspimagehome" src="/assets/images/supervisor/SupervisorLogo.png" alt="Supervisor" />
                                <p className="CardMaimTitleTop">{t("home.primo_piano.supervisor.header")}</p>
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

                                        <NavLink to="/supervisor">
                                            <img className="maspimage-principale" src="/assets/images/supervisor/circolare.png" alt="Supervisor" />
                                        </NavLink>
                                    </div>
                                    <div className="secondapartetesto wow fadeInDown" data-wow-duration="2000ms">
                                        <span class="card-titleMAIM">{t("home.primo_piano.supervisor.title")}</span>
                                        <div id="piattaformap" className="sx-about-bx3-content">
                                            <p class="card-contentMAIM">
                                                {t("home.primo_piano.supervisor.desc")}
                                            </p>
                                            <div className="perglihubdiv">
                                                <HubCard zindex="zindex10" icon="flaticon-data" title={t("home.primo_piano.supervisor.control_title")} desc={t("home.primo_piano.supervisor.control_desc")}></HubCard>
                                                <HubCard zindex="zindex1" icon="flaticon-monitor-1" title={t("home.primo_piano.supervisor.traceability_title")} desc={t("home.primo_piano.supervisor.traceability_desc")}></HubCard>
                                                <HubCard icon="flaticon-technical-support" title={t("home.primo_piano.supervisor.maintenance_title")} desc={t("home.primo_piano.supervisor.maintenance_desc")}></HubCard>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <NavLink to="/supervisor"><span id="seemoreUpgrade">{t("home.primo_piano.supervisor.button")}</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SupervisorCard;