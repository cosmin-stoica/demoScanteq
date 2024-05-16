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
                    <p>Durante il ciclo di lavoro, il sistema salva i valori di tutti i parametri rilevanti e altri dati
                        essenziali per la tracciabilità, come il nome del fabbricante, il codice della postazione, la data
                        e l'ora, il nome utente e i codici del prodotto. Alla fine del ciclo, i dati sono memorizzati in vari
                        formati: file CSV, tabelle su database MySQL o SQL Server, dati inviati a sistemi MES, o etichette
                        su carta termica. Queste funzionalità garantiscono un'efficiente tracciabilità, fondamentale per i
                        sistemi di produzione Industria 4.0.</p>
                </div>
            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <i className="header-job-card-icona flaticon-smart-contracts" />
                    <h1>Tracciabilità dei risultati
                    </h1>
                    <p>
                        Durante il ciclo di lavoro, il sistema salva tutti i parametri rilevanti e altri dati essenziali per la tracciabilità,
                        come il nome del fabbricante, il codice della postazione, la data e l'ora, il nome utente e i codici del prodotto.
                        Alla fine del ciclo, i dati sono memorizzati in vari formati: file CSV, tabelle su database MySQL o SQL Server, dati
                        inviati a sistemi MES, o etichette su carta termica. Queste funzionalità garantiscono una tracciabilità efficiente,
                        essenziale per i sistemi di produzione Industria 4.0.</p>
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
                    <p>Oltre alla modifica dei cicli operativi, è possibile configurare parametri hardware senza
                        aggiornare il software, riducendo i costi di implementazione. Questi parametri, come porte di
                        input/output, convertitori ADC della scheda IO24ADC, valori di offset e guadagno e layout delle
                        etichette, sono salvati in file INI con prefisso HAL (Hardware Abstraction Layer). La piattaforma
                        include anche Io24Terminal, usato dal personale tecnico per controllare le periferiche della scheda
                        FIO24ADC durante l'installazione delle postazioni.</p>
                </div>
            </div>



            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <i className="header-job-card-icona flaticon-security" />
                    <h1>Sicurezza dell'operatore</h1>
                    <p>
                        Durante operazioni pericolose, è fondamentale che l'operatore sia lontano dal luogo rischioso.
                        La piattaforma offre metodi hardware e software per garantire la sicurezza, come l'uso di un bimanuale
                        in un luogo sicuro o un tappeto elettronico che segnala la presenza dell'operatore. La sicurezza è
                        assicurata anche a livello software: durante una prova con sensore di carico, il peso viene monitorato
                        continuamente per evitare sovraccarichi, fermando l'operazione se necessario. In caso di emergenza,
                        l'operatore può premere un pulsante per disattivare i sistemi pericolosi gestiti dal software.

                    </p>
                </div>
            </div>
        </div>
    </>
    );

};

export default CaratteristicheMASP;