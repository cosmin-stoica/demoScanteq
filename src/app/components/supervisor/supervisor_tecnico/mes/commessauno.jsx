import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommessaUno() {
  const [selectedComponente, setselectedComponente] = useState('333');
  const [componenti, setComponenti] = useState([]);
  const [selectedInfo, setselectedInfo] = useState('');
  const [info, setInfo] = useState([]);
  const [selectedComponenti, setSelectedComponenti] = useState([]);
  const [selectedInfoAusiliarie, setSelectedInfoAusiliarie] = useState([]);
  const [codiceCommessa,setcodiceCommessa] = useState('');
  const [selectedPostazione, setselectedPostazione] = useState('');
  const [postazioni, setPostazioni] = useState([]);
  const [PRN, setPRN] = useState('');
  const [Ausiliari, setAusiliari] = useState('');

  useEffect(() => {
    // Imposta un componente di default quando il componente si carica
    if (componenti.length > 0 && !selectedComponente) {
      setselectedComponente(componenti[0]);
    }
  }, [componenti, selectedComponente]);

  const handleSelectComponenteClick = () => {
    axios.get('https://www.scanteq.com/php/componenti.php')
      .then(response => {
        setComponenti(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }

  const handleSelectInfoClick = () => {
    axios.get('https://www.scanteq.com/php/infoausiliarie.php')
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }

  const handleSelectPostazioniClick = () => {
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        setPostazioni(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }


  
  useEffect(() => {
    if (componenti.length > 0 && !selectedComponente) {
      setselectedComponente(componenti[0]);
    }
    if (info.length > 0 && !selectedInfo) {
      setselectedInfo(info[0]);
    }
  }, [componenti, info, selectedComponente, selectedInfo]);

  const handleComponenteChange = (e) => {
    const selectedComponente = componenti.find(part => part.Codice === e.target.value);
    if (!selectedComponenti.some(item => item.Codice === selectedComponente.Codice)) {
      setselectedComponente(selectedComponente);
      setSelectedComponenti(prevItems => [...prevItems, selectedComponente]);
    }
  }

  const handleInfoChange = (e) => {
    const selectedInfo = info.find(part => part.Codice === e.target.value);
    if (!selectedInfoAusiliarie.some(item => item.Codice === selectedInfo.Codice)) {
      setselectedInfo(selectedInfo);
      setSelectedInfoAusiliarie(prevItems => [...prevItems, selectedInfo]);
    }
  }

  const handleRemoveItem = (itemToRemove, section) => {
    if (section === 'componenti') {
      setSelectedComponenti(prevItems => prevItems.filter(item => item !== itemToRemove));
    } else if (section === 'infoAusiliarie') {
      setSelectedInfoAusiliarie(prevItems => prevItems.filter(item => item !== itemToRemove));
    }
  }

  const handleCreaCommessa = () => {
    const userConfirmed = window.confirm("Sei sicuro di voler creare una nuova commessa?");
    if (userConfirmed) {
      const PRNmaker = [...selectedComponenti].map(item => item.Codice).join('+');
      const AusiliariMaker = [...selectedInfoAusiliarie].map(item => item.Codice).join('+');
  
      setPRN(currentPRN => {
        console.log('PRN', PRNmaker);
        return PRNmaker;
      });

      setAusiliari(currentAusiliare => {
        console.log('Ausiliari', AusiliariMaker);
        return AusiliariMaker;
      });
  
      axios.post('https://www.scanteq.com/php/commesse.php', {
        'Codice': codiceCommessa,
        'Postazione': selectedPostazione,
        'PRN': PRNmaker,
        'Ausiliari' : AusiliariMaker,
      })
        .then(response => {
          console.log('Risposta dal server:', response.data);

          if (response.data.message.includes('successo')) {
            window.alert('Commessa inserita con successo');
          }

        })
        .catch(error => {
          console.error('Errore durante la richiesta al server:', error);
          window.alert('Errore nell inserimento della commessa');
        });
    } else {
      console.error('error');
      window.alert('Errore nell inserimento della commessa');
    }
  }
  

  const handlePostazioneChange = (e) => {
    setselectedPostazione(e.target.value)
  }

  return (
    <div className='panecommessadivchiudibile'>
      <h1 className='creacommh1'>Creazione semplice di una commessa</h1>

      <div className='selectcommdiv'>
        <p>Componenti:</p>
        <select id="selectcomm" className="custom-select" value={selectedComponente.Codice || ''} onChange={handleComponenteChange} onClick={handleSelectComponenteClick}>
          <option value="" disabled>Aggiungi un componente cliccandoci sopra</option>
          {componenti.map((part, index) => (
            <option key={part.Codice} value={part.Codice}>
              {part.Codice}, {part.Descrizione}
            </option>
          ))}
        </select>

        <p>Info Ausiliarie:</p>
        <select id="selectcomm" className="custom-select" value={selectedInfo.Codice || ''} onChange={handleInfoChange} onClick={handleSelectInfoClick}>
          <option value="" disabled>Aggiungi un'info ausiliaria cliccandoci sopra</option>
          {info.map((part, index) => (
            <option key={part.Codice} value={part.Codice}>
              {part.Codice}, {part.Descrizione}
            </option>
          ))}
        </select>
      </div>

      <div>
      <div className='perflex'>
        <h2>Elementi Selezionati - Componenti:</h2>
        </div>
        <div className='perflex'>
        <div className="horizontal-scroll">
          {selectedComponenti.map((item, index) => (
            <div key={index} className="selected-item">
              {item.Codice} +
              <button className='eliminacomm' onClick={() => handleRemoveItem(item, 'componenti')}>X</button>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div>
        <div className='perflex'>
        <h2>Elementi Selezionati - Info Ausiliarie:</h2>
        </div>
        <div className='perflex'>
        <div className="horizontal-scroll">
          {selectedInfoAusiliarie.map((item, index) => (
            <div key={index} className="selected-item">
              {item.Codice} +
              <button className='eliminacomm' onClick={() => handleRemoveItem(item, 'infoAusiliarie')}>X</button>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div className='perflex'>
      <select id="selectcomm2" className="custom-select" value={selectedPostazione} onChange={handlePostazioneChange} onClick={handleSelectPostazioniClick}>
          <option value="" disabled>Scegli una postazione</option>
          {postazioni.map((part, index) => (
            <option key={part.Name} value={part.Name}>
              {part.Name}
            </option>
          ))}
        </select>
        </div>

      <div className='perflex'>
      <input   
              id='commessatext'
              className='cercatext'
              type="text"
              placeholder="Inserisci il  codice commessa"
              value={codiceCommessa}
              onChange={(e) => {
                setcodiceCommessa(e.target.value);
              }
              }
            />
    
              </div>
      <div className='perflex'>
      <button className='creacommessaeasybutton' onClick={handleCreaCommessa}>Crea Commessa</button>
      </div>
    </div>
  );
}

export default CommessaUno;
