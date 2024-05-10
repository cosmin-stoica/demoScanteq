import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa i CSS del carousel
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from "react";

function IndCont4() {

    return (
        <>
        <div className="section-full wow fadeInLeft" data-wow-duration="2000ms">
        <div className="titolocond">
            <h1>Tracciabilità</h1>
        </div>
        </div>
        <div className="section-full wow fadeInUp" data-wow-duration="2000ms">
        <div className="containertracc">
        <div className="descrizionetracc">    
        <div className="parte1">
        <h6>Ogni ciclo di lavoro permette di tenere traccia delle operazioni svolte in modi diversi,
        ad esempio:</h6>
        <div className="descrizionetesto">
        <div className="unohhh">
        <p>- Creazione di un file di report CSV</p>
        <p>- Chiamate HTTP/REST a sistemi MES</p> </div>
        <div className="duehhh">
        <p>- Chiamate a database MySQL, SQL Server</p>
        <p>- Stampa di un'etichetta su carta termica.</p></div>
        </div>

        <h6>Alcuni dei dati che si possono salvare in questo modo
</h6>
<div className="descrizionetesto">
<div className="unohhh2">
        <p>- Codice del pezzo lavorato</p>
        <p>- La postazione che ha effettuato il ciclo</p>
        <p>- Nome dell’utente loggato</p>
        <p>- Data ed ora della lavorazione</p> </div>
        <div className="duehhh">
        <p>- Codici dei barcode che sono stati scannerizzati</p>
        <p>- I passaggi, in ordine di esecuzione, affiancati da valori misurati</p>
        <p>- Codice a barre 2D di tipo PDF417 o Datamatrix</p>
</div> </div>
        </div>
        </div>

        <div className="parte">
        <div className="terzaparte">   
        <Carousel className="carouselauto2"
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          centerSlidePercentage={30}
          autoPlay={true} 
          interval={2000} 
          stopOnHover={false}
        >
            <div className="immaginetracc">
            <p className="tracch6">Stampante termica toshiba</p>
            <ItodoImage  src="images/case-study/automazione/14.png" alt="Masp" />
            </div>

            <div className="immaginetracc">
            <p className="tracch6">Lettore Barcode</p>
            <ItodoImage  src="images/case-study/automazione/15.png" alt="Masp" />
            </div>

            <div className="immaginetracc">
            <p className="tracch6">Esempio stampa</p>
            <ItodoImage  src="images/case-study/automazione/16.png" alt="Masp" />
            </div>

            <div className="immaginetracc">
            <p className="tracch6">Esempio etichetta</p>
            <ItodoImage  src="images/case-study/automazione/17.png" alt="Masp" />
            </div>

            <div className="immaginetracc">
            <p className="tracch6">Esempio etichetta barcode</p>
            <ItodoImage  src="images/case-study/automazione/18.png" alt="Masp" />
            </div>
        </Carousel>
        </div> 
        </div>
        </div>
        </div>
        </>
        
    )
    
}

export default IndCont4;