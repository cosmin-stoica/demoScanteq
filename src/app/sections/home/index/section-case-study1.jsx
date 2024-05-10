import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials1 from "./section-testimonials1";

function SectionCaseStudy1() {

    const autoufficio = () => {
        // Use window.location to navigate to the "/automazione" URL
        window.location.href = '/automazione-ufficio';
      };
      
      
      const riduciLeft = () => {
        var leftElement = document.querySelector('.left');
        if (leftElement.style.transform === 'scale(0.8)') {
          leftElement.style.transform = 'scale(1.0)'; // Ripristina la scala originale
        } else {
          leftElement.style.transform = 'scale(0.8)'; // Riduci la scala se non è già ridotta
        }
      }
      
      
      const autoind = () => {
        // Use window.location to navigate to the "/automazione" URL
        window.location.href = '/automazione-industriale';
      };
      


    return (
        <>
            <div id="autocontainerhome" className="section-full p-t110 p-b80 sx-bg-light sx-case-study-outer wow fadeInDown" data-wow-duration="2000ms">
                <div  className="container">
                    {/*Large Title*/}
                    <div className="large-title-block">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                {/* TITLE START */}
                                <div className="section-head left">
                                    <div className="sx-head-s-title">Automazione</div>
                                    <div className="sx-head-l-title">
                                        <h2 className="sx-title">Le nostre soluzioni nell'ambito dell'automazione</h2>
                                    </div>
                                </div>
                                {/* TITLE END */}
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" large-title-info">
                                    <p>La società Scanteq è specializzata nella fornitura di tecnologie all'avanguardia e nello sviluppo di soluzioni software e hardware proprietarie altamente personalizzate, rivolte ai settori dell'automazione dell'ufficio e industriale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="automazione" className="text-center"> 
      <div id='autocontainer'class="container">
     <div class="half left">
     <p id="titoloauto3">Automazione Industriale</p>
    
    <p id='primo'> Nel contesto dell'automazione per l'Industria 4.0, 
    viene proposta la piattaforma MASP (Mounting Assisted Software Platform), 
    che consente l'implementazione flessibile ed efficiente di sistemi di 
    controllo avanzati per le linee di produzione</p> 

    <NavLink to="/masp">
                                        <img className="maspimage" src="/assets/images/case-study/automazione/masp.png" alt="Masp" />
                                    </NavLink>


    <p id='secondo'>Questo avviene attraverso l'esecuzione sequenziale di 
    operazioni predeterminate, coinvolgendo software, dispositivi elettronici 
    ed elementi elettromeccanici, senza o con minima necessità di intervento 
    umano diretto </p>

    <p id='terzo'>I vantaggi principali includono la sicurezza degli operatori,
     la condotta guidata delle operazioni e la loro personalizzazione, 
     l'automazione delle procedure, la tracciabilità dei risultati e 
     l'interfacciamento con sistemi di tipo MES (Manufacturing Execution 
    System) e ERP (Enterprise Resources Planning)
    </p>

    <NavLink to="/masp" className="site-button sx-btn-primary icon">
                                        <i className="fa  fa-long-arrow-right" />
                                        Vedi di piu'
                                    </NavLink>

      </div>
     <div class="half right" >
     <p id="titoloauto3">Automazione d'ufficio</p>

    <p id='primo'>Il nostro software e hardware, denominato Imagina, 
    consente la progettazione di dispositivi scanner con alimentazione 
    automatica e stampa a getto d'inchiostro, appositamente concepiti per 
    automatizzare le operazioni in ufficio</p>

    <NavLink to="/imagina">
    <img className="imaginaimage" src="/assets/images/case-study/automazione/imagina.png" alt="Barcode" />
                                        </NavLink>
    <p id='secondo2'>Questi dispositivi effettuano la conversione in formato 
    digitale di documenti, fotografie e altri materiali cartacei, consentendo 
    agli utenti di estrarre informazioni rilevanti attraverso sofisticati 
    algoritmi di riconoscimento di codici a barre, di caratteri stampati
    e scritti a mano</p>

    <p id='terzo'>Successivamente, i documenti digitalizzati possono essere 
    trasfformati in bianco e nero, archiviati in vari formati (BMP, BMP, JPEG,
     TIFF e PDF), modificati e condivisi in formato elettronico.
    </p>
    <NavLink to="/imagina" id ="bottoneimagina" className="site-button sx-btn-primary icon">
                                        <i className="fa  fa-long-arrow-right" />
                                        Vedi di piu'
                                    </NavLink>

    </div>
  </div>
  </div>


                </div>
            </div>
        </>
    )
}

export default SectionCaseStudy1;