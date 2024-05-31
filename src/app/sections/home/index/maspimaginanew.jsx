import React from "react";
import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";

function MaspImaginaNew() {



    return (
        <>
            <div id="clientiwhite" className="perflex width100">
                <div className="perflex">

                    <div className="margin-top100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                        <div class="parentMAIM">
                            <div class="cardMAIM">
                                <div className="perflex width100">
                                    <img className="maspimagehome" src="/assets/images/case-study/automazione/imagina.png" alt="Imagina" />
                                    <p className="CardMaimTitleTop">Piattaforma Imagina</p>
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
                                            <span class="card-titleMAIM">Semplifica l'ufficio con il software ScanQuest</span>
                                            <div id="piattaformap" className="sx-about-bx3-content">
                                                <p class="card-contentMAIM">
                                                    Il nostro software ScanQuest e il Software Development Kit (SDK) ScanApi sono stati sviluppati per agevolare le operazioni d'ufficio tramite dispositivi scanner con alimentazione automatica e stampanti a getto d'inchiostro. Questi strumenti sono progettati per automatizzare i compiti di digitalizzazione, permettendo agli utenti di convertire documenti cartacei, fotografie e altri materiali in formato digitale con estrema facilità e precisione.
                                                </p>

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
                                                <span class="card-titleMAIM">Digitalizzazione e stampa con la scheda Imagina</span>
                                                <p class="card-contentMAIM">
                                                    Grazie alla nostra tecnologia, i dispositivi Imagina implementano sofisticati algoritmi di riconoscimento per codici a barre, caratteri stampati e scritti a mano. Questo consente agli utenti di estrarre rapidamente informazioni rilevanti dai documenti digitalizzati. Inoltre, i file possono essere convertiti in bianco e nero, archiviati in vari formati come BMP, JPEG, TIFF e PDF, e facilmente modificati e condivisi in formato elettronico, migliorando notevolmente la produttività in ufficio.
                                                </p>

                                            </div>
                                        </div>

                                    </div>
                                    <NavLink to="/imagina"><span id="seemoreUpgrade" class="see-moreMAIM">Vedi di più</span></NavLink>
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