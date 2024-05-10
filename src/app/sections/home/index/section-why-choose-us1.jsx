import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";
function SectionWhyChooseUs1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})` }}>
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Perchè sceglierci</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">I nostri servizi</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="sx-icon-bx-wrap">
                            <div className="row">
                                {/* Block one */}
                                <div id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                              
                                    <div id="daje" className="sx-icon-bx-1">
                                    <div id="divcomp">
                                    <ItodoImage id="compimg" src="images/project.jpg" alt="" />
                                    </div>
                                        <div id = "containercomp2" className="sx-icon-box-wraper">
                                        {/*<div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-data" /></span>
    </div>*/}
                                            <div id="panecomp" className="icon-content">
                                               <h4 className="sx-tilte">Project Management</h4>
                                                <p>Gli specialisti di Scanteq nello sviluppo di soluzioni per l'elettronica e la tecnologia dell'informazione possono assistervi in tutte le fasi dello sviluppo di un nuovo prodotto, dalla definizione delle specifiche alla produzione, consentendovi di ottimizzare le architetture hardware e software, garantendo un lancio perfetto in termini di prestazioni, prezzo e affidabilità. Il nostro team lavorerà in stretta collaborazione con voi, assicurando di adottare sempre un approccio trasparente e professionale. Sappiamo che i vostri standard sono elevati. Lo sono anche i nostri!
</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Two */}
                                <div  id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                    <div id="divcomp">
                                    <ItodoImage id="compimg" src="images/hardware.jpg" alt="" />
                                    </div>
                                        <div id = "containercomp3" className="sx-icon-box-wraper">
                                            
                                            <div className="icon-content">
                                               <h4 className="sx-tilte">Hardware Design</h4>
                                                <p>L'ampia esperienza di Scanteq nel campo dell'elettronica ci consente di progettare schede innovative e ridurre il time-to-market utilizzando tecnologie già consolidate o nuovi sviluppi. I clienti trarranno vantaggio dalla nostra vasta esperienza nei sistemi embedded, che va dalla progettazione hardware delle schede elettroniche allo sviluppo e alla verifica di firmware e driver del dispositivo.

Il nostro background si basa su una vasta gamma di progetti, dai sistemi semplici con microprocessori a basso costo a schede embedded gestite da DSP o ARM e controllate da sistemi operativi. Altre soluzioni che abbiamo sviluppato includono sofisticati sistemi di acquisizione di immagini e sistemi di stampa ad iniezione d'inchiostro o termici interfacciati con personal computer tramite il bus USB.

Oltre alla progettazione delle schede elettroniche, seguiremo lo sviluppo durante l'intero processo di test per garantire che il nuovo prodotto del cliente sia ottimizzato in termini di prestazioni e affidabilità.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Three */}
                                <div  id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                    <div id="divcomp">
                                    <ItodoImage id ="img4" src="images/software.jpg" alt="" />
                                    </div>
                                        <div id = "containercomp4" className="sx-icon-box-wraper">
                                            
                                            <div className="icon-content">
                                             <h4 className="sx-tilte">Software and Firmware Design</h4>
                                                <p>Scanteq fornisce servizi di sviluppo software e firmware su una varietà di piattaforme con il supporto di moderni sistemi operativi o funzioni a basso livello personalizzate per architetture a costi contenuti.

I nostri specialisti esperti nello scrivere codice che interagisce con l'hardware, gli ingegneri software di Scanteq sono esperti nello sviluppo di applicazioni, consentendo a programmi informatici di livello superiore di comunicare con o controllare dispositivi hardware. Queste competenze comprendono l'uso di periferiche standard dei personal computer, lo sviluppo di driver di dispositivo del kernel o la scrittura di codice per sistemi embedded gestiti da vari microprocessori.

Oltre al software per il controllo dell'hardware, i nostri ingegneri hanno una solida esperienza nello sviluppo di librerie e applicazioni specifiche con un'interfaccia grafica utente (GUI) complessa e assistono i clienti nell'intero processo di test e distribuzione del software.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Five */}
                                <div  id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                    <div id="divcomp">
                                    <ItodoImage id ="img4" src="images/algoritmi.jpg" alt="" />
                                    </div>
                                        <div  id = "containercomp5" className="sx-icon-box-wraper">
                                            
                                            <div className="icon-content">
                                               <h4 className="sx-tilte">Algorithms Development</h4>
                                                <p>Durante lo sviluppo dei suoi prodotti che coinvolgono l'immagine dei documenti e sistemi di visione specifici per applicazioni, Scanteq ha acquisito una vasta esperienza nello sviluppo di algoritmi sofisticati per la compressione delle immagini e il riconoscimento di pattern 1D/2D.

Alcuni di questi algoritmi utilizzano metodi standard, mentre altri hanno dato ai nostri scienziati l'opportunità di esprimere le loro competenze in matematica complessa sviluppando nuove tecnologie.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block SIx */}
                                <div  id="containercompetenze" className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                    <div id="divcomp">
                                    <ItodoImage id ="img4" src="images/outsourcing.jpg" alt="" />
                                    </div>
                                        <div id = "containercomp6"className="sx-icon-box-wraper">
                                            <div className="icon-content">
                                               <h4 className="sx-tilte">Outsourcing</h4>
                                                <p>In un mercato competitivo, Scanteq offre soluzioni innovative a costi contenuti per prodotti per ufficio come scanner e stampanti. Il nostro approccio comprende l'analisi costante delle soluzioni adottate e l'offerta di partner di produzione a basso costo in Estremo Oriente o Europa dell'Est. Forniamo supporto per trovare partner affidabili, ottenere prezzi competitivi, garantire la qualità e seguire la produzione.</p>
                                            </div>
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

export default SectionWhyChooseUs1;