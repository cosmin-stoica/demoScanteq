import ItodoImage from "../../elements/itodo-img";

const ImaginaIntro = () => {
    return (
        <>

            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">La scheda elettronica per scanner multifunzione</h1>
            </div>

            <div className="servizio-card-upper section-full wow fadeInDown" data-wow-duration="1500ms">
                <div className="servizio-card">
                    <ItodoImage className="circuitcard" src="images/circuit.png" alt="circuit"></ItodoImage>
                    <div className="servizio-card-secondaparte">

                        <div className="width100 perflex">
                            <ItodoImage className="servizio-card-img-imagina" src="images/case-study/automazione/scheda.jpg" alt="imagina-img"></ItodoImage>
                        </div>
                        <p className="margin-top50">Imagina è una soluzione hardware e software all'avanguardia sviluppata da Scanteq, progettata per ottenere un efficiente scansione ed elaborazione dei documenti, offrendo prestazioni elevate e facile integrazione in vari dispositivi utilizzati in office automation. Imagina si è dimostrata uno strumento versatile, in grado di supportare una vasta gamma di funzionalità necessarie per diversi ambienti di lavoro.

                        </p>
                        <p>
                            L'integrazione della tecnologia Imagina consente di aumentare il valore aggiunto dei prodotti per l'automazione dell'ufficio, riducendo drasticamente i costi e i rischi di sviluppo. Inoltre, garantisce un rapido time-to-market e assicura uno straordinario Ritorno sugli Investimenti (ROI).
                            Alcune delle sue principali applicazioni includono:
                        </p>



                    </div>

                </div>

                <div className="servizio-card-lista">
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">Scansione documenti di varie tipologie e dimensioni</div>
                    </div>
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">Scansione assegni e riconoscimento codici MICR</div>
                    </div>
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">Scansione e riconoscimento biglietti di lotteria</div>
                    </div>
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">Scansione banconote</div>
                    </div>
                    <div className="servizio-card-lista-lowerdiv-imagina">
                        <i className="flaticon-physics secondalista" />
                        <div className="servizio-card-lista-lowerdiv-title">Stampa a getto d'inchiostro su documenti cartacei</div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default ImaginaIntro;