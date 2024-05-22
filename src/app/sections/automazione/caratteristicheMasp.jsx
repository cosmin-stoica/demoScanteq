import { NavLink } from "react-router-dom";

const CaratteristicheMASP = () => {

    return (<>
        <div className="section-full wow fadeInRight" data-wow-duration="2000ms">
            
        </div>
        <div className="div-header-job-card">


            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <i className="header-job-card-icona flaticon-support" />
                    <h1>Condotta guidata
                    </h1>
                    <p>La correttezza delle operazioni è garantita da un'interfaccia utente intuitiva con pannelli
                        automatici contenenti immagini e messaggi che guidano l'operatore in ogni fase del lavoro. Il sistema
                        è efficace grazie a metodi di configurazione personalizzabili e semplici da implementare per immagini
                        e messaggi. Inoltre, la piattaforma include un pannello per visualizzare istruzioni tramite immagini,
                        file PDF e filmati, utili per la formazione del personale senza l'uso di materiale cartaceo, con tutti
                        i relativi vantaggi.</p>
                </div>
            </div>



            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <i className="header-job-card-icona flaticon-development" />
                    <h1>Automazione delle procedure
                    </h1>
                    <p>Il funzionamento standard delle postazioni prevede l'assistenza all'operatore da parte dell'hardware e del software. Tuttavia, l'intervento dell'operatore è necessario per le lavorazioni. La piattaforma MASP offre la possibilità di automatizzare molte operazioni senza bisogno di conferma da parte dell’operatore. Queste operazioni includono controlli analogici, come la verifica di correnti assorbite o resistenze elettriche, e la movimentazione automatica di parti meccaniche per eseguire operazioni complesse.</p>
                </div>
            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <i className="header-job-card-icona flaticon-smart-contracts" />
                    <h1>Tracciabilità dei risultati
                    </h1>
                    <p>
                    Durante il ciclo di lavoro, il sistema salva tutti i parametri rilevanti e altri dati essenziali per la tracciabilità, come il nome del fabbricante, il codice della postazione, la data e l'ora, il nome utente e i codici del prodotto. Alla fine del ciclo, i dati sono memorizzati in vari formati: file CSV, tabelle su database MySQL o SQL Server e inviati a sistemi MES. E' possibile inoltre rilasciare etichette stampate su carta termica. Queste funzionalità garantiscono una tracciabilità efficiente, essenziale per i sistemi di produzione Industria 4.0.</p>
                    <NavLink to="/supervisor" ><button className="vedipiutracc">Vedi di più</button></NavLink>
                </div>

            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <i className="header-job-card-icona flaticon-web-design" />
                    <h1>Personalizzazione delle operazioni
                    </h1>
                    <p>
                        La piattaforma è progettata per offrire tecnologia moderna per i sistemi di produzione
                        in modo flessibile. Durante lo sviluppo, si è prestata massima attenzione per ottenere
                        un ambiente altamente personalizzabile tramite file INI. Questi semplici file di testo
                        contengono campi specifici che il personale tecnico può facilmente modificare per gestire
                        i parametri di configurazione dei cicli di lavoro, come il numero di ripetizioni in caso
                        di esito negativo, valori di riferimento, messaggi e immagini da visualizzare.
                    </p>
                </div>
            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <i className="header-job-card-icona flaticon-physics" />
                    <h1>Configurazione periferiche
                    </h1>
                    <p>Oltre a modificare i cicli operativi, è possibile personalizzare i parametri hardware senza aggiornare il software, riducendo i costi di implementazione. Questi parametri, come le porte di input/output, i convertitori ADC della scheda elettronica IO24ADC, i valori di offset e guadagno, e il layout delle etichette, sono salvati in file INI con prefisso HAL (Hardware Abstraction Layer). La piattaforma include anche l'applicativo Io24Terminal, usato dal personale tecnico per verificare le periferiche durante l'installazione.</p>
                </div>
            </div>



            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <i className="header-job-card-icona flaticon-security" />
                    <h1>Sicurezza dell'operatore</h1>
                    <p>
                    Nel corso di operazioni pericolose, è essenziale che l'operatore rimanga lontano dal luogo rischioso. La piattaforma offre soluzioni hardware e software per garantire la sicurezza, come un bimanuale posizionato in un'area sicura per disattivare i sistemi pericolosi e un tappeto elettronico che segnala la presenza in aree vietate. Altri metodi sono gestiti unicamente dal software. Ad esempio, in una prova con una cella di carico in movimento, la forza viene monitorata per evitare sovraccarichi, fermando l'operazione se necessario.

                    </p>
                </div>
            </div>
        </div>
    </>
    );

};

export default CaratteristicheMASP;