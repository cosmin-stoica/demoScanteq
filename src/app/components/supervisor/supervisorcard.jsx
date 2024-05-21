import React from "react";
import { NavLink } from "react-router-dom";
import HubCard from "./hubcard";

const SupervisorCard = () => {

    return (
        <div id="clientiwhite" className="perflex width100">
            <div className="perflex">

                <div className="margin-top100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                    <div class="parentMAIM">
                        <div class="cardMAIM">
                            <div className="perflex width100">
                                <img className="maspimagehome" src="/assets/images/supervisor/SupervisorLogo.png" alt="Supervisor" />
                                <p className="CardMaimTitleTop">Supervisor</p>
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
                                        <span class="card-titleMAIM">Supervisor</span>
                                        <div id="piattaformap" className="sx-about-bx3-content">
                                            <p class="card-contentMAIM">

                                                Il Supervisor è una piattaforma web interconnessa al MASP e progettata per offrire
                                                un controllo e una visualizzazione completa delle postazioni operative.
                                                Attraverso i suoi tre hub interconnessi, Traceability, Control e Maintenance, il Supervisor garantisce una gestione dei
                                                dati, un controllo operativo efficace e una manutenzione ottimale.
                                            </p>


                                            <div className="perglihubdiv">
                                                <HubCard zindex="zindex10" icon="flaticon-data" title="Control" desc="Il Control Hub offre un controllo immediato sullo stato operativo, consentendo la rapida identificazione
                                                e risoluzione di anomalie, nonché l'ottimizzazione delle prestazioni del sistema."></HubCard>
                                                 <HubCard zindex="zindex1" icon="flaticon-monitor-1" title="Traceability" desc="Il Traceability 
                                                    Hub permette un monitoraggio dettagliato e in tempo reale dei dati, 
                                                    migliorando la precisione e la trasparenza delle informazioni. "></HubCard>
                                                <HubCard icon="flaticon-technical-support" title="Maintenance" desc="Infine, il Maintenance Hub supporta la manutenzione preventiva, fornendo strumenti avanzati
                                                per mantenere le postazioni sempre efficienti e ridurre i tempi di inattività. "></HubCard>
                                            </div>

                                            {/*<p>Il Traceability Hub permette un monitoraggio dettagliato e in tempo reale dei dati, migliorando la precisione
                                                e la trasparenza delle informazioni. </p>
                                            <p>Il Control Hub offre un controllo immediato sullo stato operativo, consentendo la rapida identificazione
                                                e risoluzione di anomalie, nonché l'ottimizzazione delle prestazioni del sistema.</p>
                                            <p>Infine, il Maintenance Hub supporta la manutenzione preventiva, fornendo strumenti avanzati
                                                per mantenere le postazioni sempre efficienti e ridurre i tempi di inattività. </p>
    */}
                                        </div>
                                    </div>

                                </div>
                                <NavLink to="/supervisor"><span id="seemoreUpgrade">Vedi di più</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SupervisorCard;