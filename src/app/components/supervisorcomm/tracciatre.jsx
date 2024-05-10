
import React, { useEffect } from 'react';


function TracciaTre() {
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
            {/* SECTION CONTENT START */}
            <div id="tracciatrepane" className="section-full p-t110 mobile-page-padding">
                <div className="container">

                <div className="section-full wow fadeInRight" data-wow-duration="2000ms">
        <div className="titolocond">
            <h1>Gli Hub</h1>
        </div>
        </div>

                <div id="containerind" className="section-full wow fadeInLeft" data-wow-duration="2000ms">
<div className="riga1">
    <div className="square">
    <span className="sx-text-primary"><i id="iconind" className="flaticon-monitor-1"/></span>
    <h4 className="sx-tilte">Traceability Hub</h4>
    <p id="textind">Il Traceability Hub di Supervisor è la chiave per una gestione avanzata dei dati. Questo hub consente di tracciare ogni singolo dato proveniente dalle postazioni, offrendo una visualizzazione dettagliata e in tempo reale del flusso informativo. Grazie a questa funzionalità, avete la possibilità di analizzare i dati con precisione, migliorare la precisione delle informazioni e garantire la trasparenza nelle vostre operazioni.</p>
    </div>
    <div className="square">
    <span className="sx-text-primary"><i id="iconind" className="flaticon-data" /></span>
    <h4 className="sx-tilte">Control Hub</h4>
    <p id="textind">Il Control Hub di Supervisor vi offre un controllo immediato e completo sullo stato operativo delle postazioni. Monitora e visualizza in tempo reale le attività in corso, consentendoti di identificare rapidamente eventuali anomalie o aree di miglioramento. Con il Control Hub, sarete al comando delle vostre operazioni, in grado di prendere decisioni informate per ottimizzare le prestazioni del sistema.
</p>
    </div>
    <div className="square">
    <span className="sx-text-primary"><i id="iconind" className="flaticon-technical-support" /></span>
    <h4 className="sx-tilte">Maintenance Hub</h4>
    <p id="textind"> La manutenzione preventiva è fondamentale per garantire il corretto funzionamento delle postazioni nel tempo. Il Maintenance Hub di Supervisor vi offre gli strumenti necessari per gestire in modo proattivo la manutenzione, garantendo che le vostre postazioni siano sempre operative al massimo delle loro capacità. Con funzionalità avanzate di monitoraggio e avvisi tempestivi, Supervisor semplifica la gestione della manutenzione, consentendovi di ridurre i tempi di fermo e migliorare l'efficienza complessiva del vostro sistema.
</p>
    </div>
</div>
</div> 
                    
                </div>
            </div>
        </>
    )
}

export default TracciaTre;