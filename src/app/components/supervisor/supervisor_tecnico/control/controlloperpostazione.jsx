import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header21 from '../../../../elements/common/header21';
import Navbar from './navbar';

const ControlloPerPostazione = () => {
  const [postazioni, setPostazioni] = useState([]);
  const [selectedPostazione, setSelectedPostazione] = useState('');
  const [errori, setErrori] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of error rows to display per page

  useEffect(() => {
    // Fetch data for postazioni
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        setPostazioni(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch errors for the selected postazione
    if (selectedPostazione) {
      axios.get('https://www.scanteq.com/php/errori.php')
        .then(response => {
          const newErrori = response.data || [];

          // Filter errors based on the selected postazione ID
          const filteredErrori = newErrori.filter(errore => errore.ID === selectedPostazione.ID);
          setErrori(filteredErrori);
        })
        .catch(error => {
          console.error('Errore durante il recupero degli errori:', error);
          setErrori([]); // Set errors to an empty array in case of an error
        });
    }
  }, [selectedPostazione]);

  const handlePostazioneChange = (e) => {
    const selectedID = e.target.value;
    const selectedPostazioneObject = postazioni.find(postazione => postazione.ID === selectedID);
    setSelectedPostazione(selectedPostazioneObject);
    // Reset currentPage when postazione changes
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(errori.length / pageSize);
  const visibleErrori = errori.slice((currentPage - 1) * pageSize, currentPage * pageSize);


 
  const handleRequestReport = () => {
    // Assicurati che una postazione sia stata selezionata prima di fare la richiesta
    if (!selectedPostazione) {
      alert('Seleziona una postazione prima di richiedere il report.');
      return;
    }

    // Crea l'URL includendo la postazione selezionata come parametro
    const url = `https://www.scanteq.com/php/richiedireport.php?postazione=${selectedPostazione.Name}`;
    
    console.log(selectedPostazione.Name);
    // Esegui la richiesta AJAX
    axios.get(url)
      .then((response) => {
        // Creare un oggetto Blob con il contenuto del report e creare un URL temporaneo
        const blob = new Blob([response.data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // Creare un link e simulare il click per scaricare il file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'report.txt';
        document.body.appendChild(link);
        link.click();

        // Rimuovere il link dal DOM
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Errore nella richiesta del report: ', error);
      });
  };



  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className='controlloperpostazioneprinc'>
        <div className='controlloperpostazionediv'>
          <select className="custom-select" value={selectedPostazione.ID} onChange={handlePostazioneChange}>
            <option value="" disabled>Scegli una postazione</option>
            {postazioni.map((postazione, index) => (
              <option key={postazione.ID} value={postazione.ID}>
                {postazione.Name}
              </option>
            ))}
          </select>
          <div className='perrichiedibutton'>
          <button className='richiedireportbutton' onClick={handleRequestReport}>Richiedi Report</button>
          </div>
          <div className='containerdescrizione'>
            <div className='pertitolo'>
            <h1>{selectedPostazione.Name}</h1>
            </div>
            <div className='perstato-operatore'>
            <p className='leftop'>Stato: {selectedPostazione.Stato}</p>
            <p className='rightop'>Operatore: {selectedPostazione.Operatore}</p>
            </div>
            {selectedPostazione.Stato === 'Errore' &&
            <p className='operazionerrore'>
              {selectedPostazione.Operazione}</p>
            }
             {selectedPostazione.Stato !== 'Errore' &&
            <p className='operazione'>
              {selectedPostazione.Operazione}</p>
            }
            <p>Errori di oggi:</p>
            <ul>
              {visibleErrori.map((errore, index) => (
                <li key={index}>{errore.Descrizione}</li>
              ))}
            </ul>

            <div>
              {currentPage > 1 && (
                <button className='indietrobuttoncontrollo' onClick={() => goToPage(currentPage - 1)}>Indietro</button>
              )}
              {currentPage < totalPages && (
                <button className='indietrobuttoncontrollo' onClick={() => goToPage(currentPage + 1)}>Avanti</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlloPerPostazione;
