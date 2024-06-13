import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

function InserisciAttivita({req}) {
  const [descrizione, setDescrizione] = useState('');
  const [ore, setOre] = useState('1');
  const [feedback, setFeedback] = useState('');

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene il comportamento di default del form (ricarica della pagina)


    const selectedTimeStamp = startDate.getTime();
    const timestampInSeconds = Math.floor(selectedTimeStamp / 1000);

    // Aggiungi il timestamp al postData
    const postData = {
      Descrizione: descrizione,
      Offerta: req,
      Ore: parseInt(ore, 10), // Assicurati che 'ore' sia un numero intero
      Data: timestampInSeconds, // Aggiungi qui il timestamp
    };

    axios.post('https://www.scanteq.com/php/azione.php', postData)
      .then((response) => {
        // Gestisci la risposta positiva
        console.log('Risposta:', response);
        
        // Verifica qui la risposta per assicurarti che sia stata un successo
        // Potresti dover adattare questa parte in base a come il tuo server risponde
        if (response.status === 200 && response.data && response.data.includes('salvati')) {
          setFeedback('La richiesta è andata a buon fine.');
        } else {
          setFeedback('La richiesta non è andata a buon fine.');
          console.log(response.data);
        }

        // Reset dei campi del form dopo l'invio
        setDescrizione('');
        setOre('');
      })
      .catch((error) => {
        // Gestisci eventuali errori
        console.error('Errore:', error);
        setFeedback('Errore nella richiesta: ' + error.message);
      });
  };

  return (
    <div className='perflexcolumn'>
      <div className='inserisciattivitapane'>
      <label htmlFor="data">Data</label>
      <div className="form-group">
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="descrizione">Descrizione</label>
            <textarea
              type="text"
              id="descrizioneinputform"
              value={descrizione}
              onChange={(e) => setDescrizione(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ore">Ore</label>
            <input
              type="number"
              id="ore"
              value={ore}
              onChange={(e) => setOre(e.target.value)}
              className="form-control"
              min="1"
              step="1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Invia</button>
        </form>
        {feedback && <div className="feedback-message">{feedback}</div>}
      </div>
    </div>
  );
}

export default InserisciAttivita;
