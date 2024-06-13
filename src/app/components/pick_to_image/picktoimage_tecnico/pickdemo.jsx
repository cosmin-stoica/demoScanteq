import React, { useState } from 'react';
import Header21 from '../../../elements/common/header21';
import axios from 'axios';
import Navbar from './navbar';

function PickDemo() {

const [risposta, setRisposta] = useState('');
const [loading, setLoading] = useState(false); 

const handleInviaJson = () => {
  const textareaValue = document.querySelector('.textareaJson').value;
  setRisposta('');
  setLoading(true);
  try {
    const jsonData = JSON.parse(textareaValue);
    const serverUrl = 'http://192.168.1.67';
    
    axios.post(serverUrl, jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Risposta dal server:', response.data);
      const jsonString = JSON.stringify(response.data);
      setRisposta(jsonString);
    })
    .catch(error => {
      console.error('Errore nella richiesta:', error);
    })
    .finally(() => {
      setLoading(false); // Imposta lo stato di caricamento a false indipendentemente dal successo o dal fallimento
    });
  } catch (error) {
    console.error('Errore nel parsing del JSON:', error);
    setLoading(false); // Imposta lo stato di caricamento a false in caso di errore
  }
}


const inviaJSONDemo = () => {
  const jsonObject = {
    // Il tuo oggetto JSON
    ID: 1,
    Linea: 'Demo',
    Postazione: 'Demo',
    Contenuto: 'Contenuto',
    Numero: 3,
    Stato: 1,
    Soglia: 5
  };

  // Effettua una richiesta POST con Axios
  axios.post('https://scanteq.com/php/pickDISPOSITIVO.php', jsonObject)
    .then(response => {
      console.log('Dati inviati con successo:', response.data);
      // Aggiorna lo stato del componente o esegui altre operazioni dopo aver inviato i dati
    })
    .catch(error => {
      console.error('Errore durante l\'invio dei dati:', error);
    });
};


    return (
        <div className='paneprincipalepostazioni'>
            <Header21></Header21>
            <Navbar></Navbar>
            <div className="section-full wow fadeInDown" data-wow-duration="600ms">
                
                        {/*<h1 id="titolopickPane">Pick To Image</h1>*/}
                        <div className='tablepaneavv'>
          <h1 className='titoloperpanetracc'>Pick Demo</h1>
          {/*<ChatComponent></ChatComponent>*/}
                        {loading && <div className="loading-screenp"><p>Caricamento...</p></div>}
                        <div className='JsonPane'>
                        <button onClick={inviaJSONDemo}>Demo</button>
                            <div className='inviaJsonPane'>
                            <div className='perflexJson'>
                                <div className='perIMGPane'>
                                </div>
                                </div>
                                <div className='jsontext'>
                                <h1>Invia specifiche ai tuoi dispositivi <br></br>Pick To Image</h1>
                                <p>Questo è il pannello dedicato all'invio di specifiche verso i tuoi dispositivi
                                    <br></br> Ti permette di controllare il flusso dei dati da remoto, senza dover accedere 
                                    fisicamente alle postazioni.
                                </p>

                                <p>JSON:</p>
                                <div className='inputJson'>
                                <textarea 
                                className='textareaJson'
                                 defaultValue='{ 
"Messaggio": "Key1",
"Key2": "Key2",
"Key3": "Key3"
} '
                                 ></textarea>
                                <button onClick={handleInviaJson} className='inviaJson'>Invia</button>
                                </div>
                                </div>
                                
                            </div>
                            <div className='riceviJsonPane'>
                            <div className='perflexJson'>
                                <div className='perIMGPane2'>
                                </div>
                                </div>
                                <div className='jsontext'>
                                <h1>Ricevi specifiche dai tuoi dispositivi <br></br>Pick To Image</h1>
                                <p>Questo è il pannello dedicato alla ricezione dei messaggi che arrivano dai tuoi dispositivi
                                    <br></br> Ti permette di vedere i messaggi in arrivo per facilitare la gestione e la comunicazione con le postazioni.
                                </p>

                                <p>JSON:</p>
                                <div className='inputJson'>
                                <textarea 
                                className='textareaJson'
                                defaultValue={risposta}
                                 ></textarea>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default PickDemo;
