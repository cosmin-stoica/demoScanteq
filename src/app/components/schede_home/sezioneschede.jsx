import React from "react";
import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function SezioneSchede() {

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

    const descriptionsio24 = getIncrementalDescriptions("home.primo_piano.schede_automazione.io24_desc_");
    const descriptionsencoder = getIncrementalDescriptions("home.primo_piano.schede_automazione.encoder_desc_");
    const descriptionscora = getIncrementalDescriptions("home.primo_piano.schede_automazione.cora_desc_");

    return <>


        <div id="clienti" className="perflex width100">
            <div className="perflex">

                <div className="margin-top100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                    <div class="parentMAIM">
                        <div class="cardMAIM">
                            <div className="perflex width100">
                                <p className="CardMaimTitleTop">{t("home.primo_piano.schede_automazione.header")}</p>
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
                                            <img className="imaginaimage-principale" src="assets/images/case-study-2/schedaio.png" alt="IO24ADC" />
                                        </NavLink>
                                    </div>
                                    <div className="secondapartetesto width100">
                                        <span class="card-titleMAIM">{t("home.primo_piano.schede_automazione.io24_title")}</span>
                                        <div id="piattaformap" className="sx-about-bx3-content">
                                            {descriptionsio24.map((desc, index) => (
                                                <p class="card-contentMAIM" key={index}>{desc}</p>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <div class="content-boxMAIM">
                                    <div className="primaparteconimg">
                                        <NavLink className="navlinkschedaencoder" to="/schede-hardware">
                                            <img className="imaginaimage-principale" src="/assets/images/portfolio/pic4-2.png" alt="Encoder 4" />
                                        </NavLink>
                                    </div>

                                    <div className="width100">
                                        <div className="sx-about-bx3-content">
                                            <span class="card-titleMAIM">{t("home.primo_piano.schede_automazione.encoder_title")}</span>
                                            {descriptionsencoder.map((desc, index) => (
                                                <p class="card-contentMAIM" key={index}>{desc}</p>
                                            ))}

                                        </div>
                                    </div>

                                </div>

                                <div class="content-boxMAIM">
                                    <div className="primaparteconimg ">
                                        <NavLink className="navlinkschedacora" to="/schede-hardware">
                                            <img className="imaginaimage-principale" src="/assets/images/case-study-2/cora.png" alt="Cora" />
                                        </NavLink>
                                    </div>

                                    <div className="width100">
                                        <div className="sx-about-bx3-content">
                                            <span class="card-titleMAIM">{t("home.primo_piano.schede_automazione.cora_title")}</span>
                                            {descriptionscora.map((desc, index) => (
                                                <p class="card-contentMAIM" key={index}>{desc}</p>
                                            ))}

                                        </div>
                                    </div>

                                </div>

                                <NavLink to="/schede-automazione"><span id="button-third" class="see-moreMAIM">{t("home.primo_piano.schede_automazione.button")}</span></NavLink>
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











        {/*<div id="containerSchede" className="section-full wow fadeInLeft" data-wow-duration="1000ms">
            <h1 className="TitoloCapitolo">Schede elettriche per l'automazione</h1>


            <div className="perleschedeDiv wow fadeInDown" data-wow-duration="1000ms">
                <div className="divintermezzo section-full wow fadeInRight" data-wow-duration="1000ms">
                    <ItodoImage src="images/case-study-2/schedaio.png" alt="Scheda IO"></ItodoImage>
                    <div className="divpppp">
                        <p className="titoloscheda">IO24ADC</p>
                        <p>La scheda elettronica IO24ADC è utilizzata nel settore del controllo industriale per gestire
                            efficacemente ingressi e uscite digitali da 0 a 24VDC. E’ dotata di 24 ingressi e 24 uscite
                            protette e supporta anche la conversione di 5 canali analogico-digitali, offrendo maggiore
                            versatilità con una porta di espansione per il collegamento a moduli aggiuntivi. Le possibili
                            connessioni al PC di controllo avvengono attraverso porte USB, RS232 o CAN, tutte galvanicamente
                            isolate per una maggiore protezione.

                        </p>
                    </div>
                </div>

                <div className="divintermezzo section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <ItodoImage src="images/portfolio/pic4-2.png"></ItodoImage>
                    <div className="divpppp">
                        <p className="titoloscheda">ENCODER 4</p>
                        <p>Il modulo ENCODER 4, integrato nel nostro progetto per l'Industria 4.0, permette il monitoraggio
                            accurato degli angoli attraverso quattro encoder assoluti o la lettura delle coordinate da quattro
                            righe ottiche digitali. Questo si collega direttamente al PC di controllo mediante la scheda
                            IO24ADC e la sua porta di espansione digitale, arricchendo così la nostra gamma di soluzioni e
                            offrendo agli operatori strumenti robusti per la gestione dei processi industriali.
                        </p>
                    </div>
                </div>


                <div className="divintermezzo section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <ItodoImage src="images/case-study-2/cora.png"></ItodoImage>
                    <div className="divpppp">
                        <p className="titoloscheda">Cora</p>
                        <p>La scheda elettronica CORA consente di leggere correnti, trasformando il valore misurato in
                            una tensione che sarà digitalizzata tramite uno dei canali di conversione ADC della scheda
                            IO24ADC. Dispone di un trasduttore isolato galvanicamente in grado leggere correnti unidirezionali
                            o bidirezionali fino a un massimo di 19.2A. La tensione di uscita, proporzionale alla corrente
                            misurata, varia tra 0V e 3.3V, rendendola compatibile con i convertitori analogico-digitali della
                            scheda IO24ADC.
                        </p>
                    </div>
                </div>


                <NavLink to="/schede-hardware"><span id="button-third" class="see-moreMAIM">Vedi di più</span></NavLink>

            </div>

        </div>*/}


    </>

}

export default SezioneSchede;