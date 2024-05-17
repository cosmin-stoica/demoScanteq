import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function TracciaUno() {
  const [demoCredentials, setDemoCredentials] = useState({
    email: 'demo@auth.com',
    password: 'demo123',
  });

  const navigate = useNavigate();

  const handleProvaDemo = async () => {
    const { email, password } = demoCredentials;
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If login is successful, navigate to "/home"
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error if needed
    }
  };
    
    return (
        <>
            {/* SECTION CONTENT START */}
            <div id="tracciaunopane" className="section-full p-t110 mobile-page-padding">
                <div className="container">
                    <div className="section-content">
                        {/*<div className="provademo">
                        <NavLink to="/home"><button onClick={handleProvaDemo}>Demo</button></NavLink>
    </div>*/}
                        <div className="section-head left">
                            <div className="sx-head-s-title">Supervisor</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">Pannello di Monitoraggio in Tempo Reale</h2>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="sx-our-service-info m-b30">
                            <p>
                            Benvenuto in Supervisor, la piattaforma 4.0 all'avanguardia che rivoluziona la gestione dei dati e delle operazioni nelle tue postazioni. Connettiamo e centralizziamo le informazioni in tempo reale per offrirti una visione completa e immediata del tuo sistema. Attraverso i suoi tre hub distinti Supervisor ti offre un controllo senza precedenti sulla tracciabilità, lo stato operativo e la manutenzione preventiva.</p>
                            <p>

                            Questa interfaccia offre una visione dettagliata includendo, oltre ai dati della produzione, anche informazioni cruciali come il nome del fabbricante, il codice della postazione, la data e l'ora di ogni operazione. Il Pannello non solo semplifica il monitoraggio, ma fornisce anche uno strumento intuitivo per una gestione efficiente dei dati generati durante il ciclo di lavoro.

                            </p>
     
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h2 className="sx-title">Traceability Hub - Tracciabilità dei Dati</h2>
                                            <p>
                                            Il Traceability Hub di Supervisor è la chiave per una gestione avanzata dei dati.
                                            </p>
                                            <p>Questo hub consente di tracciare ogni singolo dato proveniente dalle postazioni, offrendo una visualizzazione dettagliata e in tempo reale del flusso informativo. Grazie a questa funzionalità, avete la possibilità di analizzare i dati con precisione, migliorare la precisione delle informazioni e garantire la trasparenza nelle vostre operazioni.</p>
                                        </div>
                                    </div>
                                    {/*<div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/portfolio/primaimg.png" alt="image" />
                                        </div>
    </div>*/}
                                
                                </div>
                            </div>
                            
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h2 className="sx-title">Control Hub - Monitoraggio dello Stato Operativo</h2>
                                            <p>
                                            Il Control Hub di Supervisor ti offre un controllo immediato e completo sullo stato operativo delle postazioni. 
                                            </p>
                                            <p>Monitora e visualizza in tempo reale le attività in corso, consentendoti di identificare rapidamente eventuali anomalie o aree di miglioramento. Con il Control Hub, sei al comando delle tue operazioni, in grado di prendere decisioni informate per ottimizzare le prestazioni del sistema.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h2 className="sx-title">Maintenance Hub - Manutenzione Preventiva</h2>
                                            <p>
                                            La manutenzione preventiva è fondamentale per garantire il corretto funzionamento delle postazioni nel tempo.
                                            </p>
                                            <p>Il Maintenance Hub di Supervisor ti offre gli strumenti necessari per gestire in modo proattivo la manutenzione, garantendo che le tue postazioni siano sempre operative al massimo delle loro capacità. Con funzionalità avanzate di monitoraggio e avvisi tempestivi, Supervisor semplifica la gestione della manutenzione, consentendoti di ridurre i tempi di fermo e migliorare l'efficienza complessiva del tuo sistema.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h3 className="sx-title"> Interazione Dinamica e Ottimizzazione delle Prestazioni</h3>
                                            <p>

                                            Supervisor non è solo uno strumento di osservazione, ma una piattaforma interattiva che consente alle aziende di interagire dinamicamente con i dati in tempo reale. Questa caratteristica avanzata permette alle aziende di eseguire operazioni direttamente dalla piattaforma, rispondendo prontamente a sfide impreviste o identificando opportunità di miglioramento.
                                                </p>
                                            <p>La nostra visione è quella di fornire un ambiente dinamico in cui le aziende possano adattarsi rapidamente alle esigenze della produzione, consolidando così la nostra posizione di leader nella rivoluzione industriale dell'Industria 4.0.</p>
                                            <p>
                                            Inoltre, il pannello offre anche la possibilità di inviare direttamente richieste di assistenza tecnica attraverso la funzione di ticket integrata. Questa opzione consente alle aziende di comunicare in modo rapido ed efficiente con il nostro team di supporto, garantendo una risposta tempestiva alle loro esigenze e contribuendo a consolidare la nostra dedizione a offrire un servizio completo e personalizzato.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage className="secondaimg" src="images/portfolio/secondaimg.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s-post-pagination-control previous-next previous next">
                        <div className="paging-left paging-item">
                            <div className="paging-content">
                                <NavLink className="paging-link" to="/masp">
                                    <i className="fa  fa-long-arrow-left" />
                                </NavLink>
                                <div className="paging-content-inner">
                                    <NavLink className="paging-link2" to="/masp">Indietro</NavLink>
                                    <h4 className="paging-title">
                                        <NavLink to="/masp">Automazione Industriale</NavLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="paging-right paging-item">
                            <div className="paging-content reverse">
                                <NavLink className="paging-link" to="/imagina">
                                    <i className="fa  fa-long-arrow-right" />
                                </NavLink>
                                <div className="paging-content-inner">
                                    <NavLink className="paging-link2" to="/imagina">Avanti</NavLink>
                                    <h4 className="paging-title">
                                        <NavLink to="/imagina">Automazione d'ufficio</NavLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TracciaUno;