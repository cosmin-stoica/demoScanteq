import React from "react";
import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

function MaspImaginaNew() {

    const { t } = useTranslation();

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

    const descriptionsScan = getIncrementalDescriptions("home.primo_piano.piattaforma_imagina.scanquest_desc_");
    const descriptionsScheda = getIncrementalDescriptions("home.primo_piano.piattaforma_imagina.scheda_desc_");

    return (
        <>
            <div id="clientiwhite" className="perflex width100">
                <div className="perflex">

                    <div className="margin-top100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                        <div class="parentMAIM">
                            <div class="cardMAIM">
                                <div className="perflex width100">
                                    <img className="maspimagehome" src="/assets/images/case-study/automazione/imagina.png" alt="Imagina" />
                                    <p className="CardMaimTitleTop">{t("home.primo_piano.piattaforma_imagina.header")}</p>
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
                                        <div className="primaparteconimg">

                                            <NavLink to="/schede-hardware">
                                                <img className="imaginaimage-principale" src="/assets/images/case-study/automazione/seconda.jpg" alt="Masp" />
                                            </NavLink>
                                        </div>
                                        <div className="secondapartetesto width100">
                                            <span class="card-titleMAIM">{t("home.primo_piano.piattaforma_imagina.scanquest_title")}</span>
                                            <div id="piattaformap" className="sx-about-bx3-content">
                                                {descriptionsScan.map((desc, index) => (
                                                    <p class="card-contentMAIM" key={index}>{desc}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-boxMAIM">
                                        <div className="primaparteconimg">
                                            <NavLink to="/schede-hardware">
                                                <img className="imaginaimage-principale" src="/assets/images/case-study/automazione/scheda.jpg" alt="scheda" />
                                            </NavLink>
                                        </div>

                                        <div className="width100">
                                            <div className="sx-about-bx3-content">
                                                <span class="card-titleMAIM">{t("home.primo_piano.piattaforma_imagina.scheda_title")}</span>
                                                {descriptionsScheda.map((desc, index) => (
                                                    <p class="card-contentMAIM" key={index}>{desc}</p>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    <NavLink to="/imagina"><span id="button-third" class="see-moreMAIM">{t("home.primo_piano.piattaforma_imagina.button")}</span></NavLink>
                                </div>

                                {/*<div class="date-boxMAIM">
                                        <img src="/assets/images/logo.png" alt="logoscanteq" />

                                        <span class="dateMAIM">2</span>
    </div>*/}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MaspImaginaNew;