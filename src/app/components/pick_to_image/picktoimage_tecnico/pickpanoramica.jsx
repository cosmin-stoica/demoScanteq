import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Header21 from '../../../elements/common/header21';
import ItodoImage from '../../../elements/itodo-img';

function PickPanoramica() {
  const [postazioni, setPostazioni] = useState([]);
  const [lineaSelezionata, setLineaSelezionata] = useState('');

  const fetchData = () => {
    axios.get('https://www.scanteq.com/php/picktoimage.php')
      .then(response => {
        const postazioniFiltrate = response.data.filter(postazione => {
          return lineaSelezionata ? postazione.Linea === lineaSelezionata : true;
        });
        setPostazioni(postazioniFiltrate);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      //console.log("fetched");
      fetchData();
    }, 500); // Aggiornamento ogni 5 secondi

    return () => clearInterval(intervalId);
  }, [lineaSelezionata]);

  const handleClickPost = (c) => {
    console.log(c);
  }

  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className="panepostazioni">
        <div className='perflex'>
          <select
            className="scegliPickToImage"
            value={lineaSelezionata}
            onChange={(e) => setLineaSelezionata(e.target.value)}
          >
            <option value="">Tutte le linee</option>
            <option value="Demo">Demo</option>
            <option value="Alpine">Alpine</option>
            <option value="Cupra">Cupra</option>
            <option value="Ferrari">Ferrari</option>
          </select>
        </div>

        <div className='perflex'>
          <div className='AllPostazioniPick'>
            {postazioni.map((postazione, index) => (
              <div
              className={`postazionedivpick ${
                postazione.WatchDog === '0' ? 'watchdogzero' :
                postazione.Stato === '1' ? 'postazioneattiva' :
                postazione.Stato === '2' ?  'postazionevigilanza' :
                postazione.Stato === '3' ? 'errorepost' : ''}`}
              
                key={postazione.IDTAB}
              >
                {parseInt(postazione.Soglia) > parseInt(postazione.Numero) && (
                  <ItodoImage className="WarningImage" src="/images/pick2image/warning.png" />
                )}

                <h5 style={{ fontSize: '35px' }}>{postazione.Linea}</h5>
                <p style={{ fontSize: '25px' }}>{postazione.Postazione}</p>
                <p>{(postazione.WatchDog === '0' ? "Dispositivo Disconnesso" : postazione.Stato === '1' ? "In Prelievo" : postazione.Stato === '2' ? "Vigilanza" : postazione.Stato === '3' ? "Errore" : "A riposo")}</p>
                <p>Watchdog: {postazione.WatchDog}</p>
                <p>ID: {postazione.ID}</p>
                <p>Contenuto: {postazione.Contenuto}</p>
                <p>Quantità: {postazione.Numero}</p>
                {/*<p>Stato: {postazione.Stato === '1' ? "In Prelievo" : postazione.Stato === '2' ? "Vigilanza" : postazione.Stato === '3' ? "Errore" : "A riposo"}</p>*/}
                {/*<p>Soglia(Debug): {postazione.Soglia}</p>*/}
                <div className='imgcontainerprova'>
                  {postazione.ID == 1 && postazione.Soglia == 4 && <ItodoImage className="ImmagineFerma" src="/images/pick2image/cintura.png"></ItodoImage>}
                  {postazione.ID == 2 && postazione.Soglia == 3 && <ItodoImage className="ImmagineFerma" src="/images/pick2image/cuscinoPick.png"></ItodoImage>}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default PickPanoramica;
