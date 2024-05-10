
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, SemiCircle } from 'progressbar.js';
import Navbar from './navbar';
import Header21 from '../../sections/common/header21';
import { useAppContext } from '../maintenance/AppContext';

function ScegliPostazione() {
  const [postazioni, setPostazioni] = useState([]);
  const [selectedPostazione, setSelectedPostazione] = useState('');
  const [selectedPostazioneStatus, setSelectedPostazioneStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [progressBars, setProgressBars] = useState({});
  const { isValueInRange } = useAppContext();
  const { workers } = useAppContext();

  const fetchData = () => {
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        setPostazioni(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  };


  const countAnalisiInCorsoErrore = (postazioneName) => {
    const workersForPostazione = workers.filter(worker => worker.postazione === postazioneName);
    return workersForPostazione.reduce((count, worker) => {
      return count + (worker.isValueInRange ? 0 : 1 );
    }, 0);
  };


  const initializeProgressBar = () => {
    postazioni.forEach(postazione => {
      const container = document.getElementById(`progressBar${postazione.ID}`);
  
      if (container && !container.hasChildNodes()) {
        const progressBarContainer = document.createElement('div');
        progressBarContainer.id = `progressBarContainer${postazione.ID}`;
        progressBarContainer.style.position = 'relative';
        container.appendChild(progressBarContainer);
  
        const normalizedProgress = Math.min(postazione.TempoCorrente / postazione.TempoTotale);
        const progressColor = getColor(normalizedProgress);
  
        const line = new Line(progressBarContainer, {
          strokeWidth: 10,
          color: progressColor,
          trailColor: '#87b3ff',
          trailWidth: 5,
          svgStyle: { width: '100%', height: '100%' },
        });
  
        line.animate(normalizedProgress);
  
        const percentageText = document.createElement('div');
        percentageText.style.position = 'absolute';
        percentageText.style.top = '50%';
        percentageText.style.left = '50%';
        percentageText.style.fontSize = '20px';
        percentageText.style.color = 'black';
        percentageText.style.transform = 'translate(-50%, -50%)';
  
        if (!isNaN(normalizedProgress)) {
          percentageText.textContent = `${normalizedProgress * 100}%`;
        }
  
        progressBarContainer.appendChild(line.svg);
        progressBarContainer.appendChild(percentageText);
  
        setProgressBars(prevState => ({ ...prevState, [postazione.ID]: line }));
      }
    });
  };
  
  
  const getColor = (progress) => {
    if (progress >= 0.8 && progress <= 1) {
      return '#00ff00'; // Verde da 80% a 100%
    } else if (progress >= 0 && progress < 0.8) {
      return '#ffffff'; // Bianco prima dell'80%
    } else {
      return '#ff0000'; // Rosso se è maggiore di 100%
    }
  };
  

const updateProgressBar = () => {
  postazioni.forEach(postazione => {
    const progressBar = progressBars[postazione.ID];
    if (progressBar) {
      const normalizedProgress = Math.min(postazione.TempoCorrente / postazione.TempoTotale, 1);
      const progressColor = getColor(normalizedProgress);
      progressBar.set({ color: progressColor });

      progressBar.animate(normalizedProgress);

      const percentageText = progressBar.svg.parentNode.querySelector('div');
      if (percentageText) {
        if (!isNaN(normalizedProgress)) {
          const actualPercentage = Math.round(normalizedProgress * 100);
          percentageText.textContent = `${actualPercentage}%`;
        }
      }
    }
  });
};



  
  useEffect(() => {

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();

      if (postazioni.length > 0) {
        initializeProgressBar();
        updateProgressBar(); 
        console.log(isValueInRange);
      }
    }, 500);

    if (postazioni.length > 0) {
      initializeProgressBar();
      updateProgressBar(); // Add this line to update the progress bars
    }

    return () => clearInterval(intervalId);
  }, [postazioni, progressBars]);


  const handlePostazioneChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPostazione(selectedValue);

    const selectedPostazioneObject = postazioni.find(postazione => postazione.Name === selectedValue);
    if (selectedPostazioneObject) {
      setSelectedPostazioneStatus(selectedPostazioneObject.Stato);
      setIsError(selectedPostazioneObject.Stato === 'Errore');
    } else {
      setSelectedPostazioneStatus('');
      setIsError(false);
    }
  };

  const isMax = (value) =>{
    return value>100;
  }

  const getIsValueInRangeForPostazione = (postazioneName) => {
    const workersForPostazione = workers.filter(worker => worker.postazione === postazioneName);
    return workersForPostazione.length > 0 ? workersForPostazione.every(worker => worker.isValueInRange) : null;
  };
  


// ...

return (
  <div className='paneprincipalepostazioni'>
    <Header21></Header21>
    <Navbar></Navbar>
    <div className="panepostazioni">
      <div className='AllPostazioni'>
        {postazioni.map((postazione, index) => (
          <div
            className={`postazionediv ${postazione.Stato === 'Errore' ? 'iserrore' : postazione.Stato === 'Stop' ? 'stopppee' : 'attivo'}`}
            key={postazione.ID}
          >
            <h5>{postazione.Name}</h5>
            <p>Codice Postazione: {postazione.Codice}</p>
            <p>Stato: {postazione.Stato}</p>
            <p>Operatore: {postazione.Operatore}</p>
            <p>Operazione: {postazione.Operazione}</p>
            {getIsValueInRangeForPostazione(postazione.Name) !== null && (
                <div>
                  <p className='analisipred' style={{ backgroundColor: getIsValueInRangeForPostazione(postazione.Name) ? 'green' : 'red' }}>
                    Analisi predittiva: {getIsValueInRangeForPostazione(postazione.Name) ? 'OK' : 'Error'}
                  </p>
                </div>
              )}

              {getIsValueInRangeForPostazione(postazione.Name) === null && (
                <div>
                  <p className='analisipred'>&nbsp;</p>
                </div>
              )}
              {/*<div className="analisi-in-corso">
                <span className="pallino">{countAnalisiInCorsoErrore(postazione.Name)}</span>
              </div>*/}


            <p>Avanzamento: {Math.floor(postazione.TempoTotale / 60)} min / {Math.floor(postazione.TempoCorrente / 60)} min</p>
            <div id={`progressBar${postazione.ID}`} style={{ width: '100%', height: '100%' }}></div>
            {isMax(Math.min(postazione.TempoCorrente / postazione.TempoTotale) * 100) && (
              <p className='maxpp'>{Math.min(postazione.TempoCorrente / postazione.TempoTotale) * 100}%</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default ScegliPostazione;




