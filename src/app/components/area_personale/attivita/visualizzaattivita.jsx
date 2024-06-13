import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VisualizzaAttivita({ risultato }) {

  const [risultati, setRisultati] = useState([]);
  const [totaleOre, setTotaleOre] = useState(0);
  const offerta = risultato.NumeroOfferta;

  useEffect(() => {
    
    fetchData();

  }, []);

  const calculateOre = (sortedData) =>{
    const totale = sortedData.reduce((acc, curr) => acc + parseFloat(curr.Ore || 0), 0);

    // Imposta il totale delle ore nello stato
    setTotaleOre(totale);
  }


  const fetchData = () =>{

    axios.get('https://www.scanteq.com/php/azione.php', {
        params: {
          Offerta: offerta // Converte 'offerta' in un intero prima di passarlo
        }
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          const sortedData = response.data.sort((a, b) => {
            return new Date(b.Data) - new Date(a.Data);
          });
          setRisultati(sortedData);
          calculateOre(sortedData);
        } else {
          console.log(response);
          console.error('Errore: la risposta non è un array', response.data);
        }
      })
      .catch((error) => {
        console.error('Errore nella richiesta AJAX: ', error);
      });

  }


  const handleEliminaButton = (iddel) => {

      const userConfirmed = window.confirm("Sei sicuro di voler eliminare la riga selezionata?");
      if (userConfirmed) {
        // Fai la chiamata DELETE al backend per eliminare le righe
        axios.delete('https://www.scanteq.com/php/azione.php', { data: { idsToDelete: iddel } })
          .then((response) => {
            console.log(response);
            fetchData();
          })
          .catch((error) => {
            console.error('Errore nella richiesta AJAX per eliminazione: ', error);
          });
      }
  };

  const handleAggiornaAttivita = () =>{
    fetchData();
  }

  return (
    <div className='perflex'>
    <div className='pertableazionidiv'>
    <button className='buttonaggiornatickets' onClick={handleAggiornaAttivita}>Aggiorna</button>
      <table id="tableazioni" className='tracctable'>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrizione</th>
            <th>Ore lavorate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {risultati.map((risultato, index) => (
            <tr key={index}>
              <td className='datastyle'>{   new Date(risultato.Data).toLocaleDateString('it-IT')}</td>
              <td className='descrizionestyle' >{risultato.Descrizione}</td>
              <td>{risultato.Ore}</td>
              <td><button className='eliminaattivitabutton' onClick={() => handleEliminaButton([risultato.ID])}>Elimina</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    <p>Totale ore: {totaleOre}</p>

    </div>
    </div>
  );
}

export default VisualizzaAttivita;
