import React, { useEffect, useState } from 'react';
import Header21 from '../../sections/common/header21';
import Navbar from './navbar';
import axios from 'axios';

function ErroriPostazioni() {
  const [postazioni, setPostazioni] = useState([]);
  const [selectedPostazione, setSelectedPostazione] = useState('');
  const [errori, setErrori] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [orderByTimestamp, setOrderByTimestamp] = useState(true);

  

  useEffect(() => {
    // Effettua il fetch dei dati dalle postazioni al montaggio del componente
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        setPostazioni(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, []); // L'array vuoto come dipendenza indica che useEffect viene eseguito solo al montaggio

  const handlePostazioneChange = (e) => {
    const selectedValue = e.target.value;
    console.log('Selected Value:', selectedValue);
    const selectedPostazione = postazioni.find(postazione => postazione.Codice === selectedValue);
    console.log('Selected Postazione:', selectedPostazione);
    setSelectedPostazione(selectedPostazione);
  };
  

useEffect(() => {
  console.log(selectedPostazione);
  axios.get('https://www.scanteq.com/php/errori.php')
    .then(response => {
      const newErrori = response.data || [];
      console.log(response);

      // Prima di impostare i nuovi errori, elimina quelli precedenti
      setErrori(prevErrori => {
        // Filtra solo gli errori che appartengono alla postazione selezionata
        const filteredErrori = newErrori.filter(errore => errore.Codice === selectedPostazione.Codice);

        return filteredErrori;
      });
    })
    .catch(error => {
      console.error('Errore durante il recupero degli errori:', error);
      setErrori([]); // Imposta errori come array vuoto in caso di errore
    });
}, [selectedPostazione]);


  const filteredErrori = errori.filter(errore => errore.Codice == selectedPostazione.Codice);

  useEffect(() => {
    console.log('SSSS', selectedPostazione, errori);
    const filteredErrori = errori.filter(errore => errore.Codice == selectedPostazione.Codice);


    console.log(filteredErrori);
    // ... il resto del tuo codice ...
  }, [selectedPostazione.Codice, errori]);

  const handleSortByTimestamp = () => {
    // Cambia l'ordine corrente
    setOrderByTimestamp(!orderByTimestamp);
  };


  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const sendRichiesta = () => {
    const serverUrl = 'http://localhost:8081/api'; // Assicurati di sostituire con l'URL corretto
    const requestOptions = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ 
        Tipo: 'Log',
        Postazione: selectedPostazione.Codice 
      })
    };
  
    const isConfirmed = window.confirm('Sei sicuro di voler richiedere il Log?');

    if (isConfirmed) {
      fetch(serverUrl, requestOptions)
        .then(response => {
          if (!response.ok) {
            window.confirm('Errore nella richiesta al server');
            throw new Error('Errore nella richiesta al server');
          }
          return response.text();
        })
        .then(data => {
          console.log('Risposta dal server:', data);
          window.confirm('La tua richiesta è stata presa in considerazione');
        })
        .catch(error => {
          console.error('Errore durante la richiesta al server:', error);
          window.confirm('Errore, la tua richiesta non è stata presa in considerazione');
        });
    }
  };
  
  
  const oldPage = currentPage - 1;
  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleErrori = filteredErrori.slice(startIndex, endIndex);

  const sortedErrori = visibleErrori.sort((a, b) => {
    // Confronta i timestamp in base all'ordine corrente
    const timestampA = new Date(a.Timestamp).getTime();
    const timestampB = new Date(b.Timestamp).getTime();
  
    return orderByTimestamp ? timestampA - timestampB : timestampB - timestampA;
  });

  return (
    <div className='erroripostazionipane'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className='paneprincipaleerrori'>
      <div className='paneprincipaleerrori2'>
      <select className="custom-select" value={selectedPostazione.Codice} onChange={handlePostazioneChange}>
        <option value="" disabled>Scegli una postazione</option>
        {postazioni.map((postazione, index) => (
          <option key={postazione.Codice} value={postazione.Codice}>
            {postazione.Name}
          </option>
        ))}
      </select>
      <div className='bottoniavvitature'>
            <button className='buttonavv' onClick={handlePrevPage} disabled={currentPage === 0}>Indietro</button>
            <button className='buttonavv' onClick={handleNextPage} disabled={endIndex >= filteredErrori.length}>Avanti</button>
            <button className='buttonavv' onClick={handleSortByTimestamp}>Ordina per Timestamp</button>
            <div className='checker'>
            {oldPage < 0 ? null : <p className='vecchio'>{oldPage}</p>}
            <p className='current'>{currentPage}</p>
            <p className='vecchio'>{currentPage + 1}</p>
            </div>
        </div>
        <table className='tracctable'>
          <thead>
            <tr>
              <th>Data e Ora</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {sortedErrori.map((errore, index) => (
              <tr key={errore.Codice}>
                <td>{errore.Timestamp}</td>
                <td>{errore.Descrizione}</td>
                <td><button onClick={sendRichiesta} className='vedilogbutton'>Richiedi Log</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default ErroriPostazioni;
