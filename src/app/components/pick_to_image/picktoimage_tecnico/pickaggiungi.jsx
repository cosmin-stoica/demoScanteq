import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItodoImage from '../../../elements/itodo-img';
import Info from '../../../elements/info';

const PickAggiungi = ({ onAggiorna }) => {
  const[response,setResponse] = useState('');

  const [id, setId] = useState('');
  const [linea, setLinea] = useState('');
  const [postazioni, setPostazioni] = useState([]);
  const [selectedPostazione, setSelectedPostazione] = useState('');

  const[isErrore, setIsErrore] = useState(false);

  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    // Effettua il fetch dei dati dalle postazioni al montaggio del componente
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        setPostazioni(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, []);

  const handlePostazioneChange = (e) => {
    const selectedValue = e.target.value;
    console.log('Selected Value:', selectedValue);
    const selectedPostazione = postazioni.find(postazione => postazione.Codice === selectedValue);
    console.log('Selected Postazione:', selectedPostazione);
    setSelectedPostazione(selectedPostazione);
  };

  const handleLineaChange = (e) =>{
    const selectedValue = e.target.value;
    setLinea(selectedValue);
  }

  const handleSuccessMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000); // Nasconde il messaggio di successo dopo 2 secondi
  };

  const handleErrorMessage = () => {
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 4000); // Nasconde il messaggio di errore dopo 2 secondi
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const custom = 'Sc38ahD38sW31Hshue';

    // Effettua la richiesta POST a postazioni.php
    axios.post('https://www.scanteq.com/php/picktoimage.php', {
      ID: id,
      Linea: linea,
      Postazione: selectedPostazione.Codice,
      headers: {
        'Custom-Header': custom,
      },
    })
    .then(response => {

      if(response.status == 200){
      console.log('Risposta dal server:', response.data);
      let  messaggio = "";
      if(response.data.message != null)
        messaggio = response.data.message;
      
      if (messaggio.includes("successo")) {  
      setIsErrore(false); 
      setResponse(messaggio);
      handleSuccessMessage();
      onAggiorna();
      }
      else{
        setIsErrore(true); 
        setResponse(response.data.error);
        handleErrorMessage();
    }
  }
    })
    .catch(error => {
      console.error('Errore durante la richiesta al server:', error);
      setResponse("Richiesta fallita");
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
          ID:
          <Info message="Scegliere l'ID che non deve essere uguale al nessun'altro presente sulla linea"></Info>
        </label>
        <label>
          Linea:       
        </label>
        <label>
          Postazione:       
        </label>
        </div>
        <div className='inputsecondo2'>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <select onChange={handleLineaChange}>
          <option value="Cupra">Cupra</option>
          <option value="Alpine">Alpine</option>
          <option value="Ferrari">Ferrari</option>
        </select>

        <select className="selezionaPostPick" value={selectedPostazione.Codice} onChange={handlePostazioneChange}>
        <option value="" disabled>Scegli una postazione</option>
        {postazioni.map((postazione, index) => (
          <option key={postazione.Codice} value={postazione.Codice}>
            {postazione.Codice}
          </option>
        ))}
      </select>
        </div>
        </div>
        <button type="submit">Invia</button>
      </form>
      </div>
      {showSuccessMessage && (
        <div className={`success-message show`}>
          {response}
        </div>
      )}
      {showErrorMessage && (
        <div className={`error-message show`}>
          {response}
        </div>
      )}
      <ItodoImage className="createpick" src="images/pick2image/createpick.png" alt="" />
      </div>
    </div>
    </div>
  );
};

export default PickAggiungi;
