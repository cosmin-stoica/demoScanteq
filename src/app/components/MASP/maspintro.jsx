import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';

function MaspIntro() {

    const { t } = useTranslation();

    const getIncrementalDescriptions = () => {
        let descriptions = [];
        let i = 1;
        let desc;

        while ((desc = t(`home.primo_piano.piattaforma_masp.desc_${i}`)) && desc !== `home.primo_piano.piattaforma_masp.desc_${i}`) {
            descriptions.push(desc);
            i++;
        }

        return descriptions;
    };

    const descriptions = getIncrementalDescriptions();

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

                                                {descriptions.map((desc, index) => (
                                                    <p class="card-contentMAIM" key={index}>{desc}</p>
                                                ))}
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