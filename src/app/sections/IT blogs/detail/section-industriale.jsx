import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import IndCont from "./ind-cont";

const handleDownload = () => {
  if (window.confirm("Vuoi visualizzare questa brochure?")) {
    window.location.href = "/documents/masp.pdf";
  }
};


function SectionIndustriale() {
    return (
        <>
         <div className="section-full wow fadeInDown" data-wow-duration="2000ms">
            <div className="blog-single-space">
                {/* BLOG START */}
                <div className="containertraccia">
                    <NavLink to="/masp"><ItodoImage id = "imaginapageimg2" src="images/case-study/automazione/masp.png" alt="Masp" /></NavLink>
                </div>
                <div className="single-blog-post blog-detail m-b30">
                    <div className="sx-post-title ">
                        <h2 className="post-title">MASP: L'Automazione Avanzata per Industria 4.0"</h2>
                    </div>
                    <IndCont></IndCont>
                    <div className="sx-post-text">
                        <p>
Nell'ambito dell'automazione per Industria 4.0 viene proposta una piattaforma, denominata MASP (Mounting Assisted Software Platform), che offre un'implementazione altamente flessibile ed efficiente di sistemi di controllo avanzati all'interno delle linee di produzione. Questo avviene attraverso l'esecuzione sequenziale di una serie predeterminata di operazioni, rappresentando passaggi eseguiti da componenti software, dispositivi elettronici ed elementi elettromeccanici. 
</p>
                        <p>Tali operazioni possono essere eseguite con o senza la necessità di un intervento diretto dell'operatore, il tutto con l'obiettivo di raggiungere il risultato finale desiderato.</p>
                        <h2 className="sx-post-detail-subtitle">Sicurezza dell'operatore</h2>
                        <p>

                        Durante lo svolgimento di operazioni che presentano rischio per l’incolumità
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

<blockquote className="author-quote">
                        </blockquote>
                        <h2 className="sx-post-detail-subtitle">Condotta guidata</h2>
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

</p>{/* <div className="container">
                    <NavLink to="/automazione/industriale"><ItodoImage id = "imaginapageimg" src="images/case-study/automazione/schermata.jpg" alt="Masp" /></NavLink>
    </div> */}
                        <blockquote className="author-quote">
                        </blockquote>
                        <div className="sx-post-title ">
                        <h2 className="post-title"> Personalizzazione delle operazioni</h2>
                    </div>
                        <p>Le operazioni possono essere altamente personalizzate utilizzando di numerosi file di configurazione, in linea con le esigenze specifiche. Ciò assicura un alto grado di flessibilità nell'adattamento alle diverse applicazioni industriali.
</p>
                        <blockquote className="author-quote">
                        </blockquote>
                        <div className="sx-post-title ">
                        <h2 className="post-title">Tracciabilità dei risultati</h2>
                    </div>
                        <p>La piattaforma permette la registrazione dei valori relativi ai parametri rilevanti di ciascuna operazione, consentendo il salvataggio in file e/o database o di stampare su carta termica. Questo processo garantisce una documentazione completa e accurata di ogni passaggio eseguito, semplificando la tracciabilità dei risultati e agevolando l'analisi dei dati.
</p>
<div className="containertraccia">
                    <NavLink to="/masp"><ItodoImage id = "traccia" src="images/case-study/automazione/traccia.jpg" alt="Masp" /></NavLink>
                </div>
<blockquote className="author-quote">
                        </blockquote>
                        <div className="sx-post-title ">
                        <h2 className="post-title">Interfacciamento con sistemi MES (Manufacturing Execution System)
</h2>
                    </div>
                        <p>Un alto punto di forza della MASP e la possibilità di interfacciarsi a sistemi di tipo MES, offrendo ai clienti le seguente funzioni aggiuntive: la pianificazione e lo scheduling della produzione, monitoraggio delle prestazioni delle macchine, la raccolta dati in tempo reale, la tracciabilità dei materiali e dei prodotti, la gestione della qualità e la gestione dell'inventario.

In sintesi, questa piattaforma rappresenta un notevole progresso nell'ambito dell'automazione industriale, offrendo un ambiente altamente flessibile per l'implementazione di processi di produzione avanzati, in sintonia con i principi e gli obiettivi dell'Industria 4.0.

</p>

<a className="site-button sx-btn-primary icon" onClick={handleDownload}>
                                        <i className="fa  fa-long-arrow-right" />
                                       Scarica brochure </a>
                

                    </div>
       
                </div>
            </div>
            </div>

        </>
        
    )
    
}

export default SectionIndustriale;