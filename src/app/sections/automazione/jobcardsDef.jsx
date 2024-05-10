import React from "react";
import ItodoImage from "../../elements/itodo-img";
import BannerJob from "./BannerJob";

function JobCardsDef() {
    return (
        <>
            <div className="perflexcolumn marginmenotop200">

                <BannerJob
                    img="images/collaudo2.jpg"
                    icon="images/jobs/collaudoICON.png"
                    title="Collaudo"
                    primoP="Le operazioni facenti parte di questa categoria vengono utilizzate per verificare il corretto funzionamento dei vari sistemi. I controlli vengono spesso fatti verificando resistenze elettriche o correnti assorbite."
                    secondoP="L’alto numero di operazioni è dovuto al fatto che queste operazioni presentano un modo di funzionamento proprio ed ideato specificatamente per la prova da eseguire."
                ></BannerJob>


                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/visionemasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/fotocamera.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInUp">
                            <h1>Visione</h1>
                            <p>
                                Il job visione è una funzione progettata specificatamente per acquisire
                                immagini di prodotti. Questo processo può avvenire attraverso una o
                                più telecamere, che operano indipendentemente per scattare fotografie dettagliate del prodotto.
                                L'utente ha la capacità di decidere il momento esatto per scattare ogni foto, e questa
                                funzionalità è estesa a tutte le telecamere collegate, garantendo flessibilità e controllo
                                completo nel processo di cattura dell'immagine.</p>

                            <p>Una volta acquisite, le immagini possono essere salvate in una cartella specifica, la cui
                                posizione può essere definita dal cliente, assicurando così che i dati siano archiviati
                                secondo le esigenze specifiche del progetto. Oltre alla semplice acquisizione e archiviazione,
                                il sistema offre anche la possibilità di elaborare ulteriormente le immagini per estrarre
                                informazioni di valore. Questo include operazioni come l'analisi per verificare la
                                corrispondenza del prodotto con un campione predefinito o altri tipi di riconoscimento basati
                                su algoritmi avanzati.</p>

                        </div>
                    </div>
                </div>



                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/motoremasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/motore.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInUp">
                            <h1>Motore</h1>
                            <p>Il job motore serve a misurare la corrente di picco o media assorbita da un motore a
                                corrente continua (DC) durante un determinato periodo di tempo, oppure fino al
                                raggiungimento di un limite minimo o massimo preimpostato.</p>

                            <p>La corrente viene misurata tramite una scheda proprietaria CORA, la quale,
                                collegandosi ad uno dei convertitori analogico-digitali della scheda IO24ADC, permette
                                di misurare delle correnti da 0 a 20A. </p>

                            <p>Il funzionamento dell'operazione prevede l'attesa di un valore minimo, programmabile
                                da job, per iniziare la verifica dei valori, aspettando in seguito che la corrente misurata
                                ritorni sotto una certa soglia o ne superi un’altra, indicando il raggiungimento di un
                                finecorsa, restituendo in seguito il valore massimo rilevato o la media calcolata,
                                assieme al tempo impiegatoci. I tre risultanti valori vengono confrontati con i valori di
                                riferimento preimpostati dal file di configurazione del job, riportando l’esito globale della
                                prova.</p>
                        </div>
                    </div>
                </div>

                <div className="perflex">
                    <div className="JobCardDiv ">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/cinturamasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/cintura.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Cintura</h1>
                            <p>Il job cintura serve a verificare che il ramo cintura funzioni correttamente, misurando i
                                valori di resistenza e/o corrente assorbita con e senza la linguetta inserita.</p>

                            <p>I tipi di cinture utilizzabili per la prova sono quelle resistive ed ad effetto Hall. C’è la
                                possibilità di utilizzare una cintura a quattro punte, al posto della normale cintura ad una
                                sola linguetta, la quale utilizza due linguette. Nel caso di quest’ultima può essere
                                verificato anche l’angolo di disinserimento di entrambe le linguette tramite la lettura da
                                encoder.</p>

                            <p>Le misure vengono effettuate tramite l’utilizzo di uno dei convertitori analogico-digitali
                                presenti sulla scheda IO24ADC. In caso di cintura con sensore ad effetto Hall, sulla
                                scheda dovrà essere attivato il circuito di misura correnti basse, permettendo di
                                misurare da 0 fino a 100mA.</p>
                        </div>
                    </div>
                </div>

                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/bagmasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/bag.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Airbag</h1>
                            <p>Il job airbag viene utilizzato per verificare il corretto funzionamento dell’impianto di
                                sicurezza airbag.</p>

                            <p>Il controllo viene effettuato iniettando una bassa corrente dentro al circuito in questione,
                                leggendo tramite uno dei convertitori analogico-digitali della scheda IO24ADC la caduta
                                di tensione sulla resistenza dell’airbag, da cui viene calcolato il valore della resistenza,
                                verificando in seguito che quest’ultimo rispetti i valori preimpostati.</p>
                        </div>
                    </div>
                </div>

                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/killermasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/killer.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Killer Switch</h1>
                            <p>Il job killer-switch serve a verificare il corretto funzionamento di uno switch, controllando
                                che esso passi da inattivo, ad attivo e viceversa.</p>

                            <p>La verifica del cambio di stato dello switch viene fatta attraverso un convertitore
                                analogico-digitale della scheda IO24ADC, il quale monitora la resistenza elettrica
                                misurata dal componente, che cambia a seconda dello stato.</p>
                        </div>
                    </div>
                </div>















































                <BannerJob
                    img="images/collaudo2.jpg"
                    icon="images/jobs/montaggioICON.png"
                    title="Montaggio"
                    primoP="Queste operazioni includono prove di avvitatura per garantire l'installazione corretta delle viti, misurando coppia e angolo. Sistemi come bracci di reazione con encoder o ultrasuoni assicurano l'accuratezza della posizione dell'avvitatura."
                    secondoP="L'impiego di robot permette azioni precise e veloci, mentre i codici a barre verificano l'uso corretto dei componenti tramite scansione."
                ></BannerJob>







                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/robotmasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/robot.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Robot</h1>
                            <p>Il job robot viene utilizzato per effettuare delle operazioni un robot collaborativo,
                                inviando delle stringhe di comando tramite protocollo TCP-IP, richiamando i programmi
                                preconfigurati a bordo del robot.</p>

                            <p>La comunicazione avviene su rete LAN, dove il software MASP App ed il robot agiscono
                                entrambi sia come client che come server, aprendo ognuno un socket verso l'altra
                                periferica.</p>


                        </div>
                    </div>

                </div>


                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/avvitaturamasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/avvitatura.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Avvitatura</h1>
                            <p>Questo job viene utilizzato per effettuare dei serraggi con avvitatori gestiti da centraline
                                di avvitatura elettroniche Cleco con controllo coppia-angolo o Kolver e Jolly con solo la
                                verifica dell'angolo.</p>

                            <p>L'interfacciamento con il PC è realizzato tramite rete LAN e protocollo Open Protocol
                                per le Cleco o attraverso ingressi e uscite delle schede IO24ADC per le centraline
                                Cleco, Kolver e Jolly.</p>

                            <p>Gli avvitatori hanno una connessione a filo o WiFi con le centraline ed è possibile fissarli
                                su un braccio con encoder, permettendo di effettuare i serraggi con controllo della
                                posizione</p>

                            <p>Le operazioni di avvitatura necessitano l'utilizzo di bussole da piazzare in punta
                                all’avvitatore per poter effettuare il serraggio di viti e dadi di vario tipo. L’applicativo
                                MASP App prevede anche la gestione di un portabussole, il quale può gestire fino a
                                bussole ed è dotato di spie luminose e sensori per indicare all’utente la posizione da
                                dove prelevare. </p>


                        </div>
                    </div>

                </div>

                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/rivettaturamasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/rivettatura.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Rivettatura</h1>
                            <p>Questo job viene utilizzato per effettuare delle rivettature, gestendo fino a tre rivettatrici,
                                e verificare l'esito dell'operazione, procedura che può essere effettuata con il controllo
                                della forma d’onda della pressione dell'olio nell'impianto o con la lettura dell'esito
                                direttamente centralina della rivettatrice, in caso essa sia presente.</p>

                            <p>Nel primo caso, la forma d’onda è letta con uno dei convertitori analogico-digitali della
                                scheda IO24ADC e confrontata con dei template di riferimento precedentemente
                                acquisiti e classificati.</p>

                            <p>Nel secondo caso, la verifica della rivettatura è effettuata dalla sua unità di controllo
                                che, con delle uscire collegate a ingressi della scheda IO24ADC, comunica l'esito al
                                software MASP App. L'abilitazione delle rivettatrici senza centraline si ottiene
                                controllando il flusso dell'aria con un elettrovalvola collegata ad un uscita della scheda
                                IO24ADC. Per quelle dotate di unità di controllo, il PC invia dei comandi Modbus
                                attraverso interfaccia RS485.</p>
                        </div>
                    </div>
                </div>

                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/seegermasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/seeger.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Seeger</h1>
                            <p>Questo job viene utilizzato per gestire il montaggio di un seeger, con attrezzo previsto di
                                cilindro pneumatico che spinge con una forza esercitata per un tempo controllato e data
                                dalla pressione dell'aria.</p>

                            <p>Il cilindro dispone di cella di carico per misurare la forza applicata ed è gestito
                                attraverso elettrovalvole. Dispone inoltre di proximity per poter rilevare i finecorsa, tutto
                                sotto il controllo del software.</p>

                            <p>Una volta azionato, l'attrezzo misura tramite cella di carico la forza applicata e
                                verificando che il finecorsa avanti sia stato raggiunto, restando attivo per un determinato
                                lasso di tempo, programmabile da job, verificando a fine lavorazione che la forza di
                                spinta risulti all'interno delle tolleranze impostate da job.</p>
                        </div>
                    </div>
                </div>



























































                <BannerJob
                    img="images/collaudo2.jpg"
                    icon="images/jobs/ausiliarieICON.png"
                    title="Ausiliarie"
                    primoP="Le operazioni che possono svolgere entrambe le categorie elencate oppure non ricadano particolarmente in nessuna di esse sono dette “ausiliari”."
                    secondoP="Le operazioni ausiliari, che possono essere trasversali alle categorie principali o non rientrare specificamente in nessuna di esse, aggiungono flessibilità e supporto al processo complessivo."
                ></BannerJob>








                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/pickmasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/pick.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Pick To Light</h1>
                            <p>Il job Pick To Light permette il prelievo o il deposito manuale di componenti tramite un
                                procedura di condotta guidata dell’operatore che prevede l’accensione di spie luminose
                                nella corretta sequenza, le quali si trovano in corrispondenza delle scatole contenenti il
                                materiale, verificando la corretta esecuzione dell’operazione tramite le letture di
                                fotocellule opportunamente posizionate che rilevano i movimenti.</p>

                            <p>Il sistema dispone inoltre di una spia di allarme che si accende nel momento in cui una
                                delle fotocellule intercetta un passaggio al di fuori del momento programmato. Per
                                continuare la lavorazione e far spegnere la spia, l’operatore dovrà premere l’apposito
                                pulsante di ripristino.</p>




                        </div>
                    </div>

                </div>

                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/timermasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/timer.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Timer</h1>
                            <p>Il job timer viene utilizzato per impostare una determinata quantità di tempo, durante il
                                quale, configurando il parametro “Modalita di funzionamento”, è possibile applicare una
                                delle seguenti logiche di funzionamento:</p>

                            <p>-
                                “normale”: Il timer viene avviato contando alla rovescia una quantità di secondi
                                preimpostata da file, mettendo in pausa il ciclo e proseguendo con la lavorazione
                                solo allo scadere del tempo d’attesa;
                                <br></br>
                                -
                                “background”: Il timer viene avviato contando alla rovescia una quantità di
                                secondi preimpostata da file, permettendo al ciclo di proseguire normalmente
                                mentre il conteggio viene continua in background.
                                <br></br>
                                -
                                “normale con timeout”: Il timer viene avviato contando alla rovescia una quantità
                                di secondi preimpostata da file. Durante il conteggio è possibile inviare un input
                                da interfaccia utente per fermare il timer e proseguire con il ciclo. Nel caso in cui
                                l’input non venga inviato entro il tempo limite, il job finisce con esito negativo.</p>

                        </div>
                    </div>

                </div>

                <div className="perflex">
                    <div className="JobCardDiv">
                        <div className="primapartejob">
                            <img className="imgmaspjob" src="/assets/images/jobs/oggettivazionemasp.png"></img>
                            <div className="cerchioJob">
                                <img src="/assets/images/jobs/oggettivazione.png"></img>
                            </div>
                        </div>
                        <div className="divisore"></div>
                        <div className="secondapartejob wow fadeInDown">
                            <h1>Oggettivazione</h1>
                            <p>Questo job viene utilizzato per guidare l’operatore durante le operazioni di montaggio e
                                collaudo tramite la visualizzazione di immagini e messaggi a schermo e per effettuare
                                delle verifiche con un sensore di visione o con la misura del peso dei componenti. Il job
                                è molto flessibile ed è stato previsto con le seguenti modalità di funzionamento:</p>

                            <p>
                                -
                                Gestione con pulsanti OK e NOK per mostrare un messaggio e un’immagine a
                                video, che possono avere svariati scopi, tra i più comuni un'istruzione o un
                                avvertenza. Per proseguire con il ciclo bisogna premere il pulsante OK o NOK
                                che apparirà sotto l'immagine caricata. <br></br>
                                -
                                Gestione prelievo attrezzo con condotta guidata e oggettivazione del prelievo e
                                del successivo posaggio tramite un ingresso della scheda IO24ADC. Il job
                                controlla anche un'uscita della scheda per poter indicare in modo visivo l’attrezzo
                                da prelevare. <br></br>
                                -
                                Gestione stato ingresso con condotta guidata e oggettivazione del cambiamento
                                di stato di un determinato ingresso della scheda IO24ADC. <br></br>
                                -
                                Gestione sensore laser Keyence per la verifica della presenza di un determinato
                                elemento con una forma che può essere riconosciuta dal sensore dopo
                                un’opportuna programmazione. <br></br>
                                -
                                Gestione bilancia per la verifica del peso di un componente prima di essere
                                montato con una bilancia elettronica Odeca SW23.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default JobCardsDef;