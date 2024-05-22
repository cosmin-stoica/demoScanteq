import { NavLink } from "react-router-dom";


function MaspIntro() {
    return (
        <>
            <div className="perflex width100">
                <div className="perflex">

                    <div className="margintop-100 per-maspintro-div wow fadeInDown" data-wow-duration="2000ms">

                        <div class="parentMAIM">
                            <div class="cardMAIM primaparte-masp">
                                <div className="perflex width100">
                                    <img className="maspimagehome" src="/assets/images/case-study/automazione/masp.png" alt="Masp" />
                                    <p className="CardMaimTitleTop">Piattaforma MASP</p>
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
                                            <span class="card-titleMAIM">Automazione avanzata per l'Industria 4.0</span>
                                            <div id="piattaformap" className="sx-about-bx3-content">
                                                <p class="card-contentMAIM">
                                                    Nel contesto dell'automazione per l'Industria 4.0, viene proposta la
                                                    piattaforma MASP (Mounting Assisted Software Platform), che consente
                                                    l'implementazione flessibile ed efficiente di sistemi di controllo con contenuti
                                                    tecnologici avanzati all’interno delle linee di produzione attraverso una
                                                    combinazione efficace di strumenti software e hardware proprietari.

                                                </p>

                                                <p class="card-contentMAIM">Il funzionamento si basa sull’esecuzione in ordine
                                                    predeterminato di una serie di operazioni, denominate Job, che rappresentano
                                                    passaggi effettuati dalla parte software, elettronica ed elettromeccanica,
                                                    con o senza intervento dell’operatore, necessari per raggiungere un risultato
                                                    finale.  
                                                </p>
                                                {/*Questi Job, altamente configurabili, sono suddivisi in sei categorie: Automazione e Assemblaggio, Collaudo Componenti Automotive, Controllo di Qualità e Verifica, Gestione della Produzione e Logistica, Gestione delle Postazioni e delle Procedure, e Sistemi di Controllo Elettronico per Sedili.*/}
                                                <p class="card-contentMAIM">I vantaggi principali dell’utilizzo della piattaforma
                                                    MASP includono la condotta guidata delle operazioni e la loro personalizzazione,
                                                    l'automazione delle procedure, la sicurezza degli operatori,
                                                    la tracciabilità dei risultati e l'interfacciamento con sistemi di tipo MES
                                                    (Manufacturing Execution System) e ERP (Enterprise Resources Planning).
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <NavLink to="/masp"><span id="seemoreUpgrade">Vedi di più</span></NavLink>
                                </div>

                                {/*<div class="date-boxMAIM">
                                <img src="/assets/images/logo.png" alt="logoscanteq" />

                                <span class="dateMAIM">1</span>
                                    </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MaspIntro;