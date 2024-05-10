import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostazioniHome() {
  const [postazioni, setPostazioni] = useState([]);

  useEffect(() => {
    // Effettua il fetch dei dati delle postazioni al montaggio del componente
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        setPostazioni(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, []); // L'array vuoto come dipendenza indica che useEffect viene eseguito solo al montaggio

  return (
    <div className='postazionihomediv'>
      <table className='postazioni-table'> {/* Aggiunto un nome di classe per la tabella */}
        <thead>
          <tr>
            <th>Postazione</th>
            <th>Stato</th>
          </tr>
        </thead>
        <tbody>
          {postazioni.map(postazione => (
            <tr key={postazione.ID}>
              <td>{postazione.Name}</td>
              {postazione.Stato == 'Errore' &&  <td className='errorestato'>{postazione.Stato}</td>}
              {postazione.Stato == 'Stop' &&  <td className='stopstato'>{postazione.Stato}</td>}
              {postazione.Stato == 'Attivo' &&  <td className='esecuzionestato'>{postazione.Stato}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostazioniHome;
