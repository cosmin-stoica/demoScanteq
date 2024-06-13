import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';

function MaspIntro() {

    const { t } = useTranslation();


    return (
        <>
            <div className="perflex width100">
                <div className="perflex">

                    <div className="margintop-100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                        <div class="parentMAIM">
                            <div class="cardMAIM primaparte-masp">
                                <div className="perflex width100">
                                    <img className="maspimagehome" src="/assets/images/case-study/automazione/masp.png" alt="Masp" />
                                    <p className="CardMaimTitleTop">{t("home.primo_piano.piattaforma_masp.header")}</p>
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

                                            <NavLink to="/masp">
                                                <img className="maspimage-principale" src="/assets/images/masp/principale.png" alt="Masp" />
                                            </NavLink>
                                        </div>
                                        <div className="secondapartetesto wow fadeInLeft" data-wow-duration="2000ms">
                                            <span class="card-titleMAIM">{t("home.primo_piano.piattaforma_masp.title")}</span>
                                            <div id="piattaformap" className="sx-about-bx3-content">
                                                <p class="card-contentMAIM">
                                                    {t("home.primo_piano.piattaforma_masp.desc_1")}
                                                </p>
                                                <p class="card-contentMAIM">
                                                    {t("home.primo_piano.piattaforma_masp.desc_2")}
                                                </p>
                                                {/*Questi Job, altamente configurabili, sono suddivisi in sei categorie: Automazione e Assemblaggio, Collaudo Componenti Automotive, Controllo di Qualità e Verifica, Gestione della Produzione e Logistica, Gestione delle Postazioni e delle Procedure, e Sistemi di Controllo Elettronico per Sedili.*/}
                                                <p class="card-contentMAIM">
                                                    {t("home.primo_piano.piattaforma_masp.desc_3")}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <NavLink to="/masp-caratteristiche"><span id="seemoreUpgrade">{t("home.primo_piano.piattaforma_masp.button")}</span></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MaspIntro;