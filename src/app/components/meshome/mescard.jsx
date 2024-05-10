import React from "react";
import { NavLink } from "react-router-dom";

const MesCard = () => {

    return (
        <div id="clienti" className="perflex width100">
            <div className="perflex">

                <div className="margin-top100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                    <div class="parentMAIM">
                        <div class="cardMAIM">
                            <div className="perflex width100">
                                <img className="maspimagehome" src="/assets/images/mes/meslogo.png" alt="Supervisor" />
                                <p className="CardMaimTitleTop">Mes</p>
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
                                        <span class="card-titleMAIM">Mes</span>
                                        <div id="piattaformap" className="sx-about-bx3-content">
                                            <p class="card-contentMAIM">

                                                Il Mes è una piattaforma web interconnessa al MASP e progettata per tracciare
                                                con precisione i cicli lavorativi che le postazioni effettuano in ogni fase
                                                del processo produttivo.
                                            </p>


                                            <p class="card-contentMAIM">Laa gestione delle lavorazioni, delle commesse,
                                                dei componenti e delle informazioni ausiliarie ti consente un controllo totale
                                                della produzione anche da remoto. Puoi creare cicli di lavoro e inviarli direttamente
                                                nella rete aziendale, rendendoli facilmente accessibili dalle tue postazioni.</p>

                                            <p class="card-contentMAIM">Con questa gestione integrata,
                                                il controllo della produzione diventa semplice ed efficiente. Dai cicli
                                                di lavoro alla condivisione delle informazioni cruciali, il nostro sistema
                                                offre la flessibilità e la praticità necessarie alle piccole e medie aziende
                                                per ottimizzare le operazioni aziendali in modo fluido e senza sforzi eccessivi.</p>

                                        </div>
                                    </div>

                                </div>
                                <NavLink to="/mes"><span id="seemoreUpgrade">Vedi di più</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MesCard;