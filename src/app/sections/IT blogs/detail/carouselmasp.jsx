import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa i CSS del carousel
import { Carousel } from 'react-responsive-carousel';
import { publicUrlFor } from "../../../../globals/constants";


function CarouselMasp() {
    return (
        <>
          <Carousel className="carouselauto"
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          swipeable={false}
          centerSlidePercentage={30}
          autoPlay={true} 
          interval={7000} 
          stopOnHover={false}
        >
            <div className="dajeee">
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
            <div className="interfaccia">
            <div className="intutente">  
            <h1>Interfaccia <br></br>Principale</h1>
            </div>  
            <div className="immagineutente">
            <p>Esempio dell’interfaccia principale a riposo.</p>    
            <div id="imaginapageimg">
            <div className="section-full wow fadeInRight" data-wow-duration="3000ms">
            <NavLink to="/masp"><ItodoImage id = "imaginapageimg" src="images/case-study/automazione/schermata.jpg" alt="Masp" /></NavLink>
            </div> </div></div>
            </div>
            <div className="pdivint">
            <p>Tutte le interfacce della piattaforma software sono state pensate per essere
semplici da utilizzare e necessitando poca preparazione del personale, grazie
anche alla possibilità di caricare immagini ed istruzioni personalizzabili da file
per ogni step del ciclo di produzione.
</p></div>
        </div>    
            </div>

            <div className="dajeee">
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
            <div className="interfaccia">
            <div className="intutente">  
            <h1>Autenticazione degli utenti</h1>
            </div> 
            <div className="immagineutente">
            <p>Esempio dell'autenticazione</p>  
            <div id="imaginapageimg2">  
            <ItodoImage src="images/case-study/automazione/2.png" alt="Masp" />
            </div> </div>
            <div className="immagineutente">
            <p>Lettore Fingerprint</p>  
            <div id="imaginapageimg3">    
           <ItodoImage  src="images/case-study/automazione/3.png" alt="Masp" />
            </div> </div>
            </div>
            <div className="pdivint">
            <p>Per eseguire una differenziazione del personale, affidando ad ognuno
determinati permessi, gli utenti sono divisi in User e Admin, ognuno dotato di
un PIN personale. La macchina, nel caso nessun utente sia collegato, non
inizierà un ciclo di lavoro, vista l’impossibilità di associare il pezzo lavorato ad
una persona. Il login degli utenti può essere effettuato tramite la selezione
dell’utente da una lista ed il suo PIN oppure grazie alla scansione dell’impronta
digitale con l’apposito lettore, dotato di certificazione FIPS 201 PIV (standard
del governo federale degli Stati Uniti che specifica i requisiti per
l'identificazione e la verifica del personale) e IP64 (protetto contro la polvere,
sabbia e da spruzzi).

</p></div>
        </div>    
            </div>


            
            <div className="dajeee">
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
            <div className="interfaccia">
            <div className="intutente">  
            <h1>Pannello <br></br> delle istruzioni</h1>
            </div> 
            <div className="immagineutente">
            <p>Esempio del pannello istruzioni</p>  
            <div id="imaginapageimg4">  
            <ItodoImage src="images/case-study/automazione/4.png" alt="Masp" />
            </div> </div>
            </div>
            <div className="pdivint">
            <p>Il pannello delle istruzioni è accessibile direttamente dall’interfaccia principale
ed è stato pensato per essere un visual-aid all’operatore, il quale può consultare
in qualsiasi momento file PDF, immagini o video con delle indicazioni per
quello che riguarda il ciclo di lavoro.
Questo pannello presenta due pulsanti per navigare tra le varie facciate,
rispettivamente "&lt;" per tornare alla scheda precedente e "&gt;" per passare a
quella successiva, ed il tasto “Uscita” per usczire dalla schermata.
Le istruzioni sono strettamente legate al ciclo di lavoro che si deve svolgere,
perciò la configurazione delle schermate da dover caricare viene salvata dentro
ai file dei cicli di lavoro.
</p></div>
        </div>    
            </div>

            <div className="dajeee">
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
            <div className="interfaccia">
            <div className="intutente">  
            <h1>Pannello <br></br> delle operazioni</h1>
            </div> 
            <div className="immagineutente">
            <p>Esempio del pannello operazioni</p>  
            <div id="imaginapageimg">  
            <ItodoImage src="images/case-study/automazione/5.png" alt="Masp" />
            </div> </div>
            </div>
            <div className="pdivint">
            <p>Quasi tutte le operazioni presentano un proprio pannello configurato
appositamente per esse. Questi pannelli vengono caricati automaticamente a
seconda dello step attuale e presentano immagini e messaggi per condotta
guidata, pulsanti specifici, valori di riferimento, valori misurati aggiornati in
tempo reale, valori finali e grafici.

</p></div>
        </div>    
            </div>

            
            <div className="dajeee">
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
            <div className="interfaccia">
            <div className="intutente">  
            <h1>Pannello <br></br> Log</h1>
            </div> 
            <div className="immagineutente">
            <p>Esempio del pannello Log</p>  
            <div id="imaginapageimg">  
            <ItodoImage src="images/case-study/automazione/6.png" alt="Masp" />
            </div> </div>
            </div>
            <div className="pdivint">
            <p>Il pannello Log ha come scopo il tenere traccia, sotto forma di testo, di tutte le
azioni svolte dalla piattaforma software, dai parametri caricati per iniziare
un’operazione ai possibili problemi riscontrati durante il ciclo di lavoro.
Nel caso sorgano degli errori, essi verranno scritti in rosso e l’intera riga verrà
evidenziata in giallo, per facilitarne l'individuazione.

</p></div>
        </div>    
            </div>


            <div className="dajeee">
            <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
            <div className="interfaccia">
            <div className="intutente">  
            <h1>Pannello <br></br> della diagnostica</h1>
            </div> 
            <div className="immagineutente">
            <p>Esempio di pannello diagnostica</p>  
            <div id="imaginapageimg2">    
           <ItodoImage  src="images/case-study/automazione/8.png" alt="Masp" />
            </div> </div>
            </div>
            <div className="pdivint">
            <p>
Il sistema presenta numerosi pannelli di diagnostica dai quali si possono
controllare ed azionare le varie periferiche gestite dal programma, funzione
spesso utilizzata durante la manutenzione o nel periodo di messa in funzione
della postazione. La seguente immagine presenta la videata che si apre dopo
aver premuto il tasto "Diagnostica". In seguito l'utente può scegliere quale
pannello specifico aprire premendo uno dei pulsanti che sono stati abilitati o no
in base ai file di configurazione HAL presenti nel sistema

</p></div>
        </div>    
            </div>

            {/* Aggiungi più elementi del carousel secondo necessità */}
        </Carousel>

        </>
        
    )
    
}

export default CarouselMasp;