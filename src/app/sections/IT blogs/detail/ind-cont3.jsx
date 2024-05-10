import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";

function IndCont3() {
    return (
        <>

        <div className="sx-title">
            <h1 className="blackcolor">I pulsanti dell'interfaccia principale</h1>
        </div>

        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr className="titoli">
                        <th>Nome</th>
                        <th>Funzione</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Login</td>
                        <td>Apre il pannello degli utenti dal quale si può effettuare l’accesso.</td>
                    </tr>
                    <tr>
                        <td>ODP</td>
                        <td>Inizia il ciclo di lavoro, utilizzando il codice scritto nello spazio apposito per selezionare il file contenente le operazioni da caricare.</td>
                    </tr>
                    <tr>
                        <td>OK</td>
                        <td>Serve poiché l’operatore possa confermare un'azione qualora questa venisse richiesta.</td>
                    </tr>
                    <tr>
                        <td>Cancel</td>
                        <td>Serve poiché l’operatore possa annullare un'azione qualora questa venisse richiesta.</td>
                    </tr>
                    <tr>
                        <td>Istruzioni</td>
                        <td>Apre il pannello delle istruzioni, le quali possono essere immagini o video.</td>
                    </tr>
                    <tr>
                        <td>Stampa</td>
                        <td>L’etichetta, assieme a tutti gli altri risultati del sistema di tracciabilità, vengono emessi in automatico alla fine del ciclo di lavorazione. Il pulsante Stampa permette di stampare un duplicato dell’etichetta o di creare una con i risultati parziali se il pulsante viene premuto prima della fine del ciclo.</td>
                    </tr>
                    <tr>
                        <td>Diagnostica</td>
                        <td>Apre il pannello di selezione della diagnostica.</td>
                    </tr>
                    <tr>
                        <td>Abort</td>
                        <td>Permette di uscire prematuramente dal ciclo di lavoro. Poter interrompere la lavorazione in qualsiasi momento può risultare utile in caso di imprevisti.</td>
                    </tr>
                    <tr>
                        <td>Unblock</td>
                        <td>Avvia il ciclo contenuto dentro al file Job Config - Unblock.ini. Questo file viene utilizzato per riportare la macchina nello stato a riposo, rimettendo al loro posto tutte le parti movimentate dalla piattaforma software.</td>
                    </tr>
                    <tr>
                        <td>Setup</td>
                        <td>Apre il pannello che, tramite appositi pulsanti, mette a disposizione delle finestre di dialogo con le seguenti funzioni: selezione del colore di sfondo delle varie parti del programma, impostazione del livello di dettaglio per il log e la visualizzazione di informazioni sull’applicativo MASP.</td>
                    </tr>
                    <tr>
                        <td>Uscita</td>
                        <td>Chiude il programma. Prima di farlo viene chiesta la conferma dell’azione, per evitare uscite accidentali.</td>
                    </tr>
                    <tr>
                        <td>Arresta PC</td>
                        <td>Spegne il computer. Prima di effettuare l’arresto viene chiesta la conferma dell’azione, per evitare spegnimenti accidentali.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="sx-title">
            <h1 className="blackcolor">I pulsanti del panello Log</h1>
        </div>

        <div className="table-container">
    <table className="custom-table">
        <thead>
            <tr className="titoli">
                <th>Nome</th>
                <th>Funzione</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lettura Stato</td>
                <td>Visualizza e scrive a log lo stato attuale delle varie macchine a stati implementate nel software. Questa opzione serve per effettuare la diagnostica in caso di malfunzionamenti.</td>
            </tr>
            <tr>
                <td>Salva Log</td>
                <td>Mentre questa checkbox è abilitata, tutti i messaggi log scritti vengono registrati e salvati dentro ad un file apposito, creato appena la checkbox viene attivata. In questo modo si possono salvare le sessioni di log per un'analisi successiva più attenta.</td>
            </tr>
            <tr>
                <td>Visualizza Log</td>
                <td>I messaggi verranno scritti a video affinché questa checkbox sarà abilitata. La si può disabilitare e abilitare in qualsiasi momento in caso di necessità. Essa è utile in quanto permette di fermare il flusso di messaggi.</td>
            </tr>
            <tr>
                <td>Cancella Files</td>
                <td>Viene fatta una pulizia dei file di log salvati nella loro cartella apposita.</td>
            </tr>
            <tr>
                <td>Cancella Vista</td>
                <td>Vengono cancellati tutti i messaggi di log scritti a schermo.</td>
            </tr>
        </tbody>
    </table>
</div>


        </>
        
    )
    
}

export default IndCont3;