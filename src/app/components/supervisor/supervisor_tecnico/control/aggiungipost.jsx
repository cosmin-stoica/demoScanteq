import React, { useState } from 'react';
import axios from 'axios';
import ItodoImage from '../../../../elements/itodo-img';
import Info from '../../../../elements/info';

const AggiungiPost = () => {
  const [codice, setCodice] = useState('');
  const [nome, setNome] = useState('');
  const [stato, setStato] = useState('');
  const [operatore, setOperatore] = useState('');
  const [operazione, setOperazione] = useState('');

  const[isErrore, setIsErrore] = useState(false);

  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSuccessMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000); // Nasconde il messaggio di successo dopo 2 secondi
  };

  const handleErrorMessage = () => {
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 2000); // Nasconde il messaggio di errore dopo 2 secondi
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const custom = 'Sc38ahD38sW31Hshue';

    // Effettua la richiesta POST a postazioni.php
    axios.post('https://www.scanteq.com/php/postazioni.php', {
      Codice: codice,
      Nome: nome,
      Stato: stato,
      Operatore: operatore,
      Operazione: operazione,
      headers: {
        'Custom-Header': custom,
      },
    })
    .then(response => {
      console.log('Risposta dal server:', response.data);
      setCodice('');    
      setNome('');    
      setStato('');    
      setOperatore('');    
      setOperazione('');   
      setIsErrore(false); 
      handleSuccessMessage();
    })
    .catch(error => {
      console.error('Errore durante la richiesta al server:', error);
      setIsErrore(true);
      handleErrorMessage();
    });
  };

  return (
    <div className='percentrarlo'>
    <div className='aggiungipostpane'>
      <h5>Aggiungi Postazione</h5>
      <div className='perdividerlipost'>
      <div className='formpost'>
      <form className='formpostform' onSubmit={handleFormSubmit}>
        <div className='bufferform'>
        <div className='formpostprimo'>
        <label>
          Codice:
        </label>
        <label>
          Nome:
        </label>
        <label>
          Stato:       
          <Info message="Scegliere lo stato della postazione, lasciare 'Attivo' se la postazione è attiva, altrimenti 'Stop'"></Info>
        </label>
        <label>
          Operatore:  
          <Info message="Scegliere se si vuole inserire l'operatore attualmente attivo sulla postazione, altrimenti lasciare vuoto"></Info>
        </label>
        <label>
          Operazione: <Info message="Scegliere se si vuole inserire l'operazione in corso, altrimenti lasciare vuoto"></Info>
        </label>
        </div>
        <div className='inputsecondo'>
        <input type="text" value={codice} onChange={(e) => setCodice(e.target.value)} />
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="text" value={stato} onChange={(e) => setStato(e.target.value)} />
        <input type="text" value={operatore} onChange={(e) => setOperatore(e.target.value)} />
        <input type="text" value={operazione} onChange={(e) => setOperazione(e.target.value)} />
        </div>
        </div>
        <button type="submit">Invia</button>
      </form>
      </div>
      {showSuccessMessage && (
        <div className={`success-message show`}>
          Postazione creata con successo
        </div>
      )}
      {showErrorMessage && (
        <div className={`error-message show`}>
          Errore durante la creazione della nuova postazione
        </div>
      )}
      <ItodoImage className="segretaria" src="images/segretaria.png" alt="" />
      </div>
    </div>
    </div>
  );
};

export default AggiungiPost;
