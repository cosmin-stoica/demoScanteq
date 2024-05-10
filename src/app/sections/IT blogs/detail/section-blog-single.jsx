import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionCaseStudy2 from "../../home/index2/section-case-study2";

function SectionBlogSingle() {
    return (
        <>
          <div className="section-full wow fadeInDown" data-wow-duration="2000ms">
            <div className="blog-single-space">
                {/* BLOG START */}
                <div className="containertraccia">
                    <NavLink to="/imagina"><ItodoImage id = "imaginapageimg2" src="images/case-study/automazione/imagina.png" alt="Imagina" /></NavLink>
                </div>
                <div className="single-blog-post blog-detail m-b30">
                    <div className="sx-post-title ">
                        <h2 className="post-title">Imagina: La scheda elettronica per scanner multifunzione</h2>
                    </div>
                    <div className="sx-post-text">
                        <p>Imagina è una soluzione hardware e software all'avanguardia sviluppata da Scanteq, progettata per ottenere un efficiente scansione ed elaborazione dei documenti, offrendo prestazioni elevate e facile integrazione in vari dispositivi utilizzati in office automation. Imagina si è dimostrata uno strumento versatile, in grado di supportare una vasta gamma di funzionalità necessarie per diversi ambienti di lavoro. Alcune delle sue principali applicazioni includono: <u><li>scansione documenti di varie tipologie e dimensioni</li>
                        <li>scansione assegni e riconoscimento codici MICR</li>
                        <li>scansione e riconoscimento biglietti di lotteria</li>
                        <li>scansione banconote</li>
                        <li>stampa a getto d'inchiostro su documenti cartacei</li></u></p>
                        <p>L'integrazione della tecnologia Imagina consente di aumentare il valore aggiunto dei prodotti per l'automazione dell'ufficio, riducendo drasticamente i costi e i rischi di sviluppo. Inoltre, garantisce un rapido time-to-market e assicura uno straordinario Ritorno sugli Investimenti (ROI).</p>

                        <div className="containertraccia">
                            <ItodoImage src="images/case-study/automazione/scheda.jpg" alt="image" />
                        </div>

                        <h2 className="sx-post-detail-subtitle">Alte prestazioni e ampia gamma di funzioni aggiuntive</h2>
                        <p>L'eccellente qualità delle immagini catturate (chiarezza dei colori e nitidezza delle immagini in bianco e nero), l'accuratezza nella lettura delle codeline magnetiche (MICR) per gli assegni e la velocità di acquisizione sono le principali prestazioni ottenute grazie a una progettazione metticolosa della scheda elettronica Imagina.
Oltre alle sue funzioni di base, la tecnologia è stata arricchita da una vasta gamma di funzionalità aggiuntive. Queste includono la lettura di carte magnetiche e con chip, la capacità di stampa a getto d'inchiostro, la decodifica ottica di caratteri OCR (Optical Character Recognition), la lettura di cifre scritte a mano (ICR, Intelligent Character Recognition), la decodifica e l'interpretazione di marche o annotazioni (OMR, Optical Mark Recognition), e la lettura di codici a barre.
</p>
                        <p>Queste soluzioni si basano soprattutto su hardware e software proprietari, ottenendo non solo risultati eccellenti, ma anche la massima flessibilità al costo più basso possibile, senza la necessità di includere costi aggiuntivi per delle licenze.
</p>

<blockquote className="author-quote">
                        </blockquote>
                        <h2 className="sx-post-detail-subtitle">Semplice integrazione del software e dell’hardware</h2>
                        <p>Offrendo un'ampia gamma di funzioni di base e aggiuntive, la scheda Imagina può essere utilizzata nello sviluppo di prodotti per l'automazione dell'ufficio che richiedono acquisizione di immagini fronte e retro, stampa a getto d’inchiostro e lettura di codici magnetici.
L'integrazione hardware richiede l'uso di dispositivi compatibili con la scheda (sensori CIS, Contact Image Sensor, testina MICR, testine a getto d'inchiostro Hewlet Packard, motori passo-passo, fotocellule, ecc.), seguita dalla configurazione dei parametri corrispondenti alla nuova topologia del prodotto nel firmware.
</p>
                        <p>L'integrazione software consiste nell'adattamento di una serie di parametri utilizzati dalle librerie (DLL, Dynamic Link Library) e dal programma di demo ScanQuest. Questo software è fornito dal produttore per illustrare la funzionalità e le prestazioni del prodotto. Scanteq offre anche un SDK (Software Development Kit), sorgenti con  esempi e manuali che consentono l'uso delle librerie per la creazione di nuove applicazioni o per l'integrazione del prodotto in applicazioni esistenti.
</p>
                        <blockquote className="author-quote">
                        </blockquote>
                        <div className="sx-post-title ">
                        <h2 className="post-title"> Programma demo ScanQuest</h2>
                    </div>
                        <p>Di seguito sono mostrate due schermate del programma demo ScanQuest:</p>

                   

                        <div className="row sx-single-small-media">
                            <div className="col-md-6 col-sm-4">
                                <div className="sx-box m-b30">
                                    <div className="sx-media">
                                        <ItodoImage src="images/case-study/automazione/prima.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-4">
                                <div className="sx-box m-b30">
                                    <div className="sx-media">
                                        <ItodoImage src="images/case-study/automazione/seconda.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <blockquote className="author-quote">
                        </blockquote>
    
                      <SectionCaseStudy2></SectionCaseStudy2>

                        <blockquote className="author-quote">
                        </blockquote>
                        <div className="sx-post-title ">
                        <h2 className="post-title">Specifiche tecniche:</h2>
                    </div>
                        <table className="spec-table">
      <tbody className="table">
        <tr className="td">
          <td className="td">Cattura Immagini:</td>
          <td>Scanner Fronte/Retro A4 o A6 con CIS (Contact Image Sensor) a risoluzione nativa di 300 o 600 dpi</td>   
        </tr>
        <tr>
          <td>Formati Immagine:</td>
          <td>
            BMP: scala di grigi, colore e bianco e nero (binarizzazione adattiva)<br />
            JPEG: colore e scala di grigi<br />
            TIFF: 4 pagine - fronte e retro a colori o scala di grigi - fronte e retro in bianco e nero (CCITT G4), PDF
          </td> 
        </tr>
        <tr>
          <td>Risoluzione:</td>
          <td>100, 200, 300 e 600 dpi
          
          </td>
        </tr>
        <tr>
          <td>Profondità di colore:</td>
          
          <td>    
          8 bit per pixel (scala di grigi)<br />24 bit per pixel (vero colore)
          </td>
        </tr>
        <tr>
          <td>Lettore di schede magnetiche o con chip (opzionale):</td>
          <td>
            Scheda magnetica (conformità ISO 7811)<br />Scheda con chip (conformità ISO 7816)</td>
           
        </tr>
        <tr>
          <td>Lettore codeline magnetiche:</td>
          <td>
            CMC7 ed E13B
           </td>
        </tr>
        <tr>
          <td>Stampa:</td>
          <td>
            Stampa a getto d'inchiostro a singola linea da 1/8" con testina Hewlett Packard<br />
            Stampa a getto d'inchiostro multiriga da 1/2" con testina Hewlett Packard<br />
            Stampa termica con larghezza fino a 82 mm (disponibile su richiesta)
           
          </td>
        </tr>
        <tr>
          <td>Interfacce:</td>
          <td>USB 2.0 con Hub USB integrato (3 porte USB disponibili)<br />RS232 ausiliario</td>
          
        </tr>
        <tr>
          <td>Driver per motori:</td>
          <td>
           
            Driver motore passo-passo (1A/24Vdc) integrato sulla scheda. Uno aggiuntivo è disponibile su scheda di espansione per la gestione dell'alimentatore automatico (feeder).
         
          </td>
        </tr>
        <tr>
          <td>Strumenti Software:</td>
          <td>
        
            Kit di Sviluppo Software Scanteq con tutorial ed esempi per lo sviluppo di applicazioni in C++ / Visual Studio 2008-2022. Sono disponibili tutorial per diversi linguaggi di programmazione (C# o Visual Basic) su richiesta.
          
          </td>
        </tr>
        <tr>
          <td>Motori di riconoscimento:</td>
          <td>
         
            OCR (Optical Character Recognition) ): OCR-B ed E13B (altri font disponibili su richiesta)<br />
            ICR (Intelligent Character Recognition): solo cifre scritte a mano<br />
            OMR (Optical Character Recognition): per biglietti della lotteria italiana<br />
            Codici a Barre: Code 128, Code 39, Interleaved 2 of 3, EAN-13, UPC-A, UPC-E, EAN-8
          </td>
        </tr>
        <tr>
          <td>Sistemi Operativi:</td>
          <td>
          Windows XP SP2, Windows Vista, Windows 7, Windows 8, Windows 10, Windows 11</td>
         
        </tr>
        <tr>
          <td>Adattatore per alimentazione:</td>
          <td>
         
            Ingresso: 100-240 Vac / 50-60 Hz<br />
            Uscita: 24 Vdc / 1.75 A<br />
            Consumo: 42 W (massimo)
          </td>
        </tr>
        <tr>
          <td>Dimensioni della scheda:
          </td>
          <td> 208 mm x 75 mm
          </td>
        </tr>
      </tbody>
    </table>
                    </div>
       
                </div>
            </div>
            </div>
        </>
    )
}

export default SectionBlogSingle;