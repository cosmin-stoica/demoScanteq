const TracciabilitaEsempi = () => {
    return (
        <>
            <div className="titolo-supervisor-preview width100 perflex margin-top50">
                Esempio di tabella di tracciabilità per il termoforo
            </div>
            <div className="tracctable-preview-upper width100 overflow-auto">
                <table className='tracctable-preview overflow-auto'>
                    <thead>
                        <tr>
                            <th>Seleziona</th>
                            <th>Commessa</th>
                            <th>Codice</th>
                            <th>Seriale</th>
                            <th>Postazione</th>
                            <th>Utente</th>
                            <th>Id Job</th>
                            <th>Nome Job</th>
                            <th>Data e Ora</th>
                            <th>Corrente Nominale</th>
                            <th>Tolleranza Corrente</th>
                            <th>Corrente Misurata</th>
                            <th>Errore</th>
                            <th>Ripetizioni</th>
                            <th>Esito</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>A123a</td>
                            <td>ABC001a</td>
                            <td>1</td>
                            <td>Postazione 1</td>
                            <td>User 1</td>
                            <td>1011</td>
                            <td>Job 1</td>
                            <td>2023-12-16 14:54:38</td>
                            <td>10.51</td>
                            <td>11</td>
                            <td>10.81</td>
                            <td>Nessun errore</td>
                            <td>31</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>B456</td>
                            <td>DEF002</td>
                            <td>2</td>
                            <td>Postazione 2</td>
                            <td>User 2</td>
                            <td>102</td>
                            <td>Job 2</td>
                            <td>2023-12-21 14:54:38</td>
                            <td>15.2</td>
                            <td>1.5</td>
                            <td>14.9</td>
                            <td>Errore di calibrazione</td>
                            <td>2</td>
                            <td>NOK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>C789</td>
                            <td>GHI003</td>
                            <td>3</td>
                            <td>Postazione 3</td>
                            <td>User 3</td>
                            <td>103</td>
                            <td>Job 1</td>
                            <td>2023-12-24 14:54:38</td>
                            <td>8.7</td>
                            <td>0.8</td>
                            <td>8.5</td>
                            <td>Errore di connessione</td>
                            <td>1</td>
                            <td>NOK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>E202</td>
                            <td>MNO005</td>
                            <td>5</td>
                            <td>Postazione 5</td>
                            <td>User 5</td>
                            <td>105</td>
                            <td>Job 5</td>
                            <td>2023-12-23 14:54:38</td>
                            <td>18.9</td>
                            <td>1.8</td>
                            <td>18.7</td>
                            <td>Errore di sistema</td>
                            <td>2</td>
                            <td>NOK</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="titolo-supervisor-preview width100 perflex margin-top50">
                Esempio di tabella di tracciabilità per le avvitature
            </div>
            <div className="tracctable-preview-upper width100 overflow-auto">
                <table className='tracctable-preview overflow-auto'>
                    <thead>
                        <tr>
                            <th>Seleziona</th>
                            <th>Commessa</th>
                            <th>Codice</th>
                            <th>Seriale</th>
                            <th>Postazione</th>
                            <th>Utente</th>
                            <th>Id Job</th>
                            <th>Nome Job</th>
                            <th>Data e Ora</th>
                            <th>Id Vite</th>
                            <th>GP</th>
                            <th>Bussola</th>
                            <th>Coppia Min</th>
                            <th>Coppia Max</th>
                            <th>Coppia Finale</th>
                            <th>Angolo Min</th>
                            <th>Angolo Max</th>
                            <th>Angolo Finale</th>
                            <th>Ripetizioni</th>
                            <th>Esito</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>Commessa1</td>
                            <td>Codice1</td>
                            <td>123456</td>
                            <td>Postazione1</td>
                            <td>Utente1</td>
                            <td>1</td>
                            <td>Job1</td>
                            <td>2023-12-25 21:49:45</td>
                            <td>101</td>
                            <td>GP1</td>
                            <td>18033</td>
                            <td>533</td>
                            <td>1033</td>
                            <td>7.533</td>
                            <td>-1033</td>
                            <td>10</td>
                            <td>3</td>
                            <td>5</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>Commessa2</td>
                            <td>Codice2</td>
                            <td>789012</td>
                            <td>Postazione2</td>
                            <td>Utente2</td>
                            <td>2</td>
                            <td>Job2</td>
                            <td>2024-01-14 04:49:45</td>
                            <td>102</td>
                            <td>GP2</td>
                            <td>200</td>
                            <td>4.5</td>
                            <td>9</td>
                            <td>7</td>
                            <td>-15</td>
                            <td>15</td>
                            <td>2</td>
                            <td>6</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>Commessa3</td>
                            <td>Codice3</td>
                            <td>345678</td>
                            <td>Postazione3</td>
                            <td>Utente3</td>
                            <td>3</td>
                            <td>Job3</td>
                            <td>2023-12-27 15:49:45</td>
                            <td>103</td>
                            <td>GP3</td>
                            <td>220</td>
                            <td>4</td>
                            <td>8</td>
                            <td>6.5</td>
                            <td>-20</td>
                            <td>20</td>
                            <td>5</td>
                            <td>7</td>
                            <td>NOK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>Commessa4</td>
                            <td>Codice4</td>
                            <td>901234</td>
                            <td>Postazione4</td>
                            <td>Utente4</td>
                            <td>4</td>
                            <td>Job4</td>
                            <td>2023-12-28 03:49:45</td>
                            <td>104</td>
                            <td>GP4</td>
                            <td>240</td>
                            <td>3.5</td>
                            <td>7</td>
                            <td>6</td>
                            <td>-25</td>
                            <td>25</td>
                            <td>0</td>
                            <td>8</td>
                            <td>OK</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="titolo-supervisor-preview width100 perflex margin-top50">
                Esempio di tabella di tracciabilità per i risultati
            </div>
            <div className="tracctable-preview-upper width100 overflow-auto">
                <table className='tracctable-preview overflow-auto'>
                    <thead>
                        <tr>
                            <th>Seleziona</th>
                            <th>Commessa</th>
                            <th>Codice</th>
                            <th>Seriale</th>
                            <th>Postazione</th>
                            <th>Utente</th>
                            <th>Totale Job</th>
                            <th>Tempo Inizio</th>
                            <th>Tempo fine</th>
                            <th>Pausa (sec)</th>
                            <th>Tempo Effettivo (min)</th>
                            <th>Errore</th>
                            <th>Esito</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>Commessa1111</td>
                            <td>Codice1</td>
                            <td>123123</td>
                            <td>Postazione9</td>
                            <td>Utente1</td>
                            <td>40</td>
                            <td>2023-12-12 15:04:51</td>
                            <td>2023-12-12 15:14:51</td>
                            <td>0</td>
                            <td>10.00</td>
                            <td>Nessun Errore</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>Commessa10</td>
                            <td>Codice10</td>
                            <td>55667</td>
                            <td>Postazione10</td>
                            <td>Utente10</td>
                            <td>60</td>
                            <td>2023-11-28 20:00:00</td>
                            <td>2023-11-28 22:30:00</td>
                            <td>20</td>
                            <td>130.00</td>
                            <td>Errore6</td>
                            <td>NOK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>Commessa9</td>
                            <td>Codice9</td>
                            <td>33445</td>
                            <td>Postazione9</td>
                            <td>Utente9</td>
                            <td>50</td>
                            <td>2023-11-28 18:30:00</td>
                            <td>2023-11-28 21:00:00</td>
                            <td>15</td>
                            <td>135.00</td>
                            <td>Nessun errore</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td><input className='checkboxreal' type="checkbox" /></td>
                            <td>Commessa8</td>
                            <td>Codice8</td>
                            <td>11223</td>
                            <td>Postazione8</td>
                            <td>Utente8</td>
                            <td>75</td>
                            <td>2023-11-28 17:00:00</td>
                            <td>2023-11-28 20:00:00</td>
                            <td>10</td>
                            <td>170.00</td>
                            <td>Errore5</td>
                            <td>NOK</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TracciabilitaEsempi;