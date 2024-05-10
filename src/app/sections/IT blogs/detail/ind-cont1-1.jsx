import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import React, { useEffect } from 'react';

function IndCont11() {
    useEffect(() => {
        // Quando il componente viene montato
        const squares = document.querySelectorAll(".square");
        squares.forEach((square, index) => {
            setTimeout(() => {
                square.classList.add("show"); // Aggiunge la classe show per attivare l'animazione
            }, index * 200); // Aggiungi un ritardo crescente
        });
    }, []);

    return (
        <>
            <div className="section-full wow fadeInLeft" data-wow-duration="2000ms">
                <div className="section-content">
                    <div className="section-head center">
                        <div className="sx-head-s-title">MASP</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Caratteristiche</h2>
                        </div>

                    </div>
                    <div className="sx-icon-bx-wrap">
                        <div className="row">
                            {/* Block one */}
                            <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">

                                <div id="daje" className="sx-icon-bx-1">
                                    <div id="divcomp">
                                        <ItodoImage id="compimg" src="images/sicurezza.jpg" alt="" />
                                    </div>
                                    <div id="containercomp2" className="sx-icon-box-wraper">
                                        {/*<div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-data" /></span>
    </div>*/}
                                        <div id="panecomp" className="icon-content">
                                            <h4 className="sx-tilte">Sicurezza dell'operatore</h4>
                                            <p>Durante lo svolgimento di operazioni che presentano rischio per l’incolumità
                                                dell’operatore è fondamentale assicurarsi che quest’ultimo sia lontano dal
                                                luogo pericoloso. La piattaforma mette a disposizione metodi hardware e
                                                software che obbligano l'utente a posizionarsi al riparo dai pericoli, come
                                                vicino al bimanuale, posizionato in luogo sicuro e con entrambe le mani
                                                occupate su di essa oppure al difuori di una zona delimitata da un tappeto a
                                                gestione elettronica che segnala quando viene calpestato. La sicurezza non
                                                viene assicurata soltanto grazie a periferiche hardware, ma è presente anche a
                                                livello di controlli software, in quanto laddove si sta svolgendo una prova
                                                dotata di sensore di carico, il peso misurato viene continuamente controllato
                                                per non superare il limite imposto da utente, fermando la lavorazione in caso di
                                                sovraccarico.
                                                Inoltre, in caso di emergenza, l'operatore può premere un apposito pulsante per
                                                disattivare i sistemi gestiti dal software che possono essere causa di pericolo.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">

                                <div id="daje" className="sx-icon-bx-1">
                                    <div id="divcomp">
                                        <ItodoImage id="compimg" src="images/condotta.png" alt="" />
                                    </div>
                                    <div id="containercomp2" className="sx-icon-box-wraper">
                                        {/*<div className="sx-icon-bx-icon ">
                                          <span className="sx-text-primary"><i className="flaticon-data" /></span>
</div>*/}
                                        <div id="panecomp" className="icon-content">
                                            <h4 className="sx-tilte">Condotta guidata</h4>
                                            <p>La correttezza delle operazioni è assicurata da una interfaccia utente intuitiva
                                                contenente diversi pannelli caricati automaticamente con immagini e messaggi
                                                testuali che conducono l'operatore per ogni step durante il ciclo di lavoro.
                                                Il sistema risulta molto efficace in quanto mette a disposizione metodi di
                                                configurazione altamente personalizzabili e semplici da implementare per
                                                indicare le immagini e i messaggi, a seconda delle proprie esigenze.
                                                Non per ultimo, la piattaforma contiene un pannello per visualizzare istruzioni
                                                sotto forma di immagini, file PDF e filmati, funzioni utili nella formazione del
                                                personale senza impiegare materiale cartaceo, con tutti i vantaggi che questo
                                                metodo offre.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">

                                <div id="daje" className="sx-icon-bx-1">
                                    <div id="divcomp">
                                        <ItodoImage id="compimg" src="images/tracciab.jpg" alt="" />
                                    </div>
                                    <div id="containercomp2" className="sx-icon-box-wraper">
                                        {/*<div className="sx-icon-bx-icon ">
                                          <span className="sx-text-primary"><i className="flaticon-data" /></span>
</div>*/}
                                        <div id="panecomp" className="icon-content">
                                            <h4 className="sx-tilte">Tracciabilità dei risultati</h4>
                                            <p>Durante il ciclo di lavoro il sistema salva i valori di tutti i parametri rilevanti
                                                per ogni operazione eseguita. A questi valori si aggiungono altri dati essenziali
                                                per una efficiente tracciabilità come ad esempio: il nome del fabbricante, il
                                                codice della postazione, la data e l'ora della lavorazione, il nome utente della
                                                persona che ha svolto l’accesso e i vari codici che identificano il particolare
                                                prodotto.
                                                Alla fine del ciclo di lavoro il sistema salva i parametri e i dati memorizzati in
                                                vari formati: file CSV, tabelle su database di tipo MySQL o SQL Server, dati
                                                inviati a sistemi MES (Manufacturing Execution System) oppure attraverso
                                                stampa di etichette su carta termica.
                                                Tutte queste funzionalità messe a disposizione dalla piattaforma garantiscono
                                                l'implementazione di una efficiente tracciabilità, requisito diventato
                                                imprescindibile nei sistemi moderni di produzione appartenenti alla categoria
                                                Industria 4.0.
                                            </p>
                                            <NavLink to="/supervisor" ><button className="vedipiutracc">Vedi di più</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">

                                <div id="daje" className="sx-icon-bx-1">
                                    <div id="divcomp">
                                        <ItodoImage id="compimg" src="images/workers.jpg" alt="" />
                                    </div>
                                    <div id="containercomp2" className="sx-icon-box-wraper">
                                        {/*<div className="sx-icon-bx-icon ">
                                          <span className="sx-text-primary"><i className="flaticon-data" /></span>
</div>*/}
                                        <div id="panecomp" className="icon-content">
                                            <h4 className="sx-tilte">Personalizzazione delle operazioni</h4>
                                            <p>La piattaforma nasce non solo con l'intenzione di offrire tecnologia moderna
                                                per i sistemi di produzione, ma anche di farlo in modo flessibile per l'utilizzo.
                                                Gli ultimi aspetti sono stati affrontati con massima cura durante lo sviluppo in
                                                modo da ottenere un ambiente altamente personalizzabile, grazie all’uso di file
                                                INI. Questi sono semplici file di testo con dei campi specifici, i quali possono
                                                essere modificati facilmente dal personale tecnico per gestire i parametri di
                                                configurazione dei cicli di lavoro come ad esempio: numero di ripetizioni in
                                                caso di esito negativo, valori di riferimento, messaggi e immagini da
                                                visualizzare.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">

                                <div id="daje" className="sx-icon-bx-1">
                                    <div id="divcomp">
                                        <ItodoImage id="compimg" src="images/auto.jpg" alt="" />
                                    </div>
                                    <div id="containercomp2" className="sx-icon-box-wraper">
                                        {/*<div className="sx-icon-bx-icon ">
                                          <span className="sx-text-primary"><i className="flaticon-data" /></span>
</div>*/}
                                        <div id="panecomp" className="icon-content">
                                            <h4 className="sx-tilte">Automazione delle procedure</h4>
                                            <p>Durante il ciclo di lavoro il sistema salva i valori di tutti i parametri rilevanti
                                                per ogni operazione eseguita. A questi valori si aggiungono altri dati essenziali
                                                per una efficiente tracciabilità come ad esempio: il nome del fabbricante, il
                                                codice della postazione, la data e l'ora della lavorazione, il nome utente della
                                                persona che ha svolto l’accesso e i vari codici che identificano il particolare
                                                prodotto.
                                                Alla fine del ciclo di lavoro il sistema salva i parametri e i dati memorizzati in
                                                vari formati: file CSV, tabelle su database di tipo MySQL o SQL Server, dati
                                                inviati a sistemi MES (Manufacturing Execution System) oppure attraverso
                                                stampa di etichette su carta termica.
                                                Tutte queste funzionalità messe a disposizione dalla piattaforma garantiscono
                                                l'implementazione di una efficiente tracciabilità, requisito diventato
                                                imprescindibile nei sistemi moderni di produzione appartenenti alla categoria
                                                Industria 4.0.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">

                                <div id="daje" className="sx-icon-bx-1">
                                    <div id="divcomp">
                                        <ItodoImage id="compimg" src="images/conf.jpg" alt="" />
                                    </div>
                                    <div id="containercomp2" className="sx-icon-box-wraper">
                                        {/*<div className="sx-icon-bx-icon ">
                                          <span className="sx-text-primary"><i className="flaticon-data" /></span>
</div>*/}
                                        <div id="panecomp" className="icon-content">
                                            <h4 className="sx-tilte">Configurazione periferiche</h4>
                                            <p>Oltre al poter facilmente modificare i cicli delle operazioni, è possibile
                                                configurare anche dei parametri più interni al programma che riguardano
                                                l'hardware, senza richiedere una nuova versione del software, con importanti
                                                benefici per quello che riguarda il costo di ogni implementazione specifica.
                                                Questi parametri, che per loro natura devono essere cambiati di rado, come per
                                                esempio le porte di input/output e i convertitori ADC della scheda elettronica
                                                proprietaria IO24ADC sottostante, i valori di offset e di guadagno per i circuiti
                                                di misura oppure il layout delle etichette da stampare, vengono salvati in file
                                                INI, come per i file di configurazione dei cicli di lavoro, ma con il prefisso
                                                HAL, il quale sta per Hardware Abstraction Layer.
                                                La piattaforma include anche il programma Io24Terminal, che viene utilizzato
                                                dal personale tecnico durante la messa in funzione delle postazioni per
                                                controllare le periferiche della scheda IO24ADC.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default IndCont11;