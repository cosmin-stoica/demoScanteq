import React, { useState, useEffect, memo} from 'react';
import Header21 from '../../sections/common/header21';
import Navbar from '../maintenance/navbar';
import AnalysisOptionBox from './optionbox';
import axios from 'axios';
import { useAppContext } from './AppContext';

const ChoiceBox = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const AnalisiDinamica = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [areaInteresseOptions, setAreaInteresseOptions] = useState(["", "Coppia", "Angolo"]);
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || "");
  const [threshold, setThreshold] = useState(localStorage.getItem('thresholds') || "");
  const [workerMessage, setWorkerMessage] = useState(null);
  const [workerIdToDelete, setWorkerIdToDelete] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [postazioni, setPostazioni] = useState([]);
  const [postazioniOptions, setPostazioniOptions] = useState([]);
  


  const {
    workers,
    setWorkers,
    currentWorker,
    setCurrentWorker,
    destroyCurrentWorker,
  } = useAppContext();

  const custom = 'Sc38ahD38sW31Hshue';

  useEffect(() => {
    // Fetch data for postazioni
    axios.get('https://www.scanteq.com/php/postazioni.php', {
      /*headers: {
        'Custom-Header': custom,
      },*/
    })
      .then(response => {
        const postazioniData = response.data;
        setPostazioni(postazioniData);
  
        // Genera l'array delle opzioni
        const options = ["", ...postazioniData.map(postazione => postazione.Name)];
        setPostazioniOptions(options);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, []);


  const [formData, setFormData] = useState({
    postazione: null,
    tempoInizio: null,
    tempoFine: null,
    idJob: null,
    idVite: null,
    gp: null,
    areaInteresse: null,
  });
  const [sendData, setSendData] = useState({
    idJob: false,
    idVite: false,
    gp: false,
    areaInteresse: false,
  });
  const { isValueInRange, setIsValueInRange, setCurrentPostazione, getAllWorkers  } = useAppContext();


  const handleOptionClick = (option) => {
    console.log(`Hai cliccato su: ${option}`);
    setSelectedOption(option);
  };
  

  useEffect(() => {
    let timerId;
  
    if (workerMessage) {
      timerId = setTimeout(() => setWorkerMessage(null), 3000);
    }
  
    return () => clearTimeout(timerId);
  }, [workerMessage, isValueInRange]);


  const [isChecked, setisChecked] = useState(false);

  const handleCheckCheckboxChange = (event) => {
    setisChecked(event.target.checked);
  };

  const renderFormBasedOnOption = () => {
    switch (selectedOption) {
      case "Avvitature":
      case "Coppia":
      case "Termoforo":
        return (
          <div className='formanalyticsdinamica'>
            <div className='formdinamica'>
              <form>
                <label>Postazione</label>
                <ChoiceBox options={postazioniOptions} onSelect={(value) => handlePostazioneSelect(value)} />
                {selectedOption === "Avvitature" && (
                <>
                <label>Area di Interesse</label>
                <ChoiceBox options={areaInteresseOptions} onSelect={(value) => handleAreaInteresseSelect(value)} />
                </>
                )}
                <label>Valore di Input</label>
                <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <label>Soglia di Tolleranza</label>
                <input type="number" value={threshold} onChange={(e) => setThreshold(e.target.value)}></input>
              </form>
              <div className='dopoo'>
                <div>
              <label>Salva configurazione</label> <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckCheckboxChange}
      />
                  </div>
              <button onClick={handleInviaClick}>Start analisi dinamica</button>
              </div>
           </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handlePostazioneSelect = (value) => {
    setFormData({ ...formData, postazione: value });
  };

  const handleAreaInteresseSelect = (value) => {
    setFormData({ ...formData, areaInteresse: value });
  };
  

  const handleInviaClick = () => {
    //destroyCurrentWorker();

    let dataToSendWork = {};
    if(selectedOption === 'Avvitature'){
    dataToSendWork = {
      tipo: 'avvitatura',
      postazione : formData.postazione,
      areaInteresse : formData.areaInteresse,
    }
  }else if(selectedOption === 'Termoforo'){
    dataToSendWork = {
      tipo: 'termoforo',
      postazione : formData.postazione,
    }
  }
  else if(selectedOption === 'Coppia'){
    dataToSendWork = {
      tipo: 'coppia',
      postazione : formData.postazione,
    }
  }
  

    setCurrentPostazione(formData.postazione);

    let dataToSend= {};
    if(selectedOption === 'Avvitature'){
      dataToSend = {
      Tipo: 'Avvitatura',
      Postazione: formData.postazione || null,
      AreaInteresse: formData.areaInteresse || null,
      Valore: inputValue,
      Tolleranza : threshold,
      };
  }else if(selectedOption === 'Termoforo'){
    dataToSend = {
    Tipo: 'Termoforo',
    Postazione: formData.postazione || null,
    Valore: inputValue,
    Tolleranza : threshold,
    };
}
else if(selectedOption === 'Coppia'){
  dataToSend = {
  Tipo: 'Coppia',
  Postazione: formData.postazione || null,
  Valore: inputValue,
  Tolleranza : threshold,
  };
}

const custom = 'Sc38ahD38sW31Hshue';

    if(isChecked){
    // Esegui la richiesta POST a /php/workers.php
    axios.post('https://www.scanteq.com/php/workers.php', dataToSend, {
      headers: {
        'Content-Type': 'application/json',
        /*'Custom-Header': custom,*/
      },
    })
    .then((response) => {
      console.log('Risposta dal server:', response.data);
    })}

        const worker = new Worker('/workers/worker.js');

        const newWorker = {
          id: Date.now(), 
          tipo: selectedOption,
          instance: worker,
          postazione: formData.postazione,
          isValueInRange: null,
          areaInteresse : formData.areaInteresse,
          valore: inputValue,
          threshold: threshold,
        };

        setWorkers(prevWorkers => [...prevWorkers, newWorker]); // Aggiungi il nuovo worker all'array esistente
        worker.postMessage(dataToSendWork);
  
        // Ascolta i messaggi inviati dal Web Worker

        setWorkerMessage('Worker creato con successo.');
        

        console.log('dati inviati', dataToSendWork);

        worker.addEventListener('message', (event) => {
          console.log('Dati ricevuti dal worker:', event.data);
  
          // Accedi all'ultimo elemento dell'array di oggetti
          const lastItem = event.data.newData[event.data.newData.length - 1];

          if (lastItem) {
            const receivedValue = parseFloat(lastItem.ValoreFinale);
            console.log('receivedValue', receivedValue);
  
            const inputNumber = parseFloat(inputValue);
            const isInRange = Math.abs(receivedValue - inputNumber) <= threshold;
            
            setWorkers(prevWorkers => prevWorkers.map(prevWorker =>
              prevWorker.id === newWorker.id
                ? { ...prevWorker, isValueInRange: isInRange }
                : prevWorker
            ));


            setIsValueInRange(isInRange);
          } else {
            // Handle il caso in cui l'array sia vuoto
            console.error('L\'array è vuoto.');
          }
        });
  };

  const handleDeleteWorker = () => {
    if (workerIdToDelete.trim() === '') {
      alert('Inserisci un ID valido per eliminare un worker.');
      return;
    }

    destroyCurrentWorker(parseInt(workerIdToDelete, 10));
    setWorkerIdToDelete('');
  };

  const workersall = getAllWorkers();

  const handleCheckboxChange = (id) => {
    const updatedSelection = [...selectedRows];
    const isIdSelected = updatedSelection.includes(id);

    if (isIdSelected) {
      const index = updatedSelection.indexOf(id);
      updatedSelection.splice(index, 1);
    } else {
      updatedSelection.push(id);
    }

    setSelectedRows(updatedSelection);
  };

  
  const handleSelezionaTuttiTutti = () => {
    const allIds = workersall.map(workersall => workersall.ID);
    const allSelected = allIds.every(id => selectedRows.includes(id));

    // If all are selected, unselect all; otherwise, select all
    const updatedSelection = allSelected ? [] : allIds;

    setSelectedRows(updatedSelection);
  };


  const handleElimina = () => {
    console.log(selectedRows);
    selectedRows.forEach(selectedID => {
      destroyCurrentWorker(selectedID);
    });
  };

  const handleDebug = () =>{
    console.log(workersall);
    console.log(isChecked);
  }

  const handleisValueString = (string) =>{

    return string ? 'OK' : 'Error';

  }














    const [risultati, setRisultati] = useState([]);
    const [selectedRows2, setSelectedRows2] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isDataChanged, setIsDataChanged] = useState(false);
    const [workerIdCounter, setWorkerIdCounter] = useState(Date.now()); // Inizializza con il valore desiderato

    const handleAggiorna = () => {
      axios.get('https://www.scanteq.com/php/workers.php', {
        /*headers: {
          'Custom-Header': custom,
        },*/
      })
        .then((response) => {
          if (Array.isArray(response.data)) {
            setRisultati(response.data);
          } else {
            console.error('Errore: la risposta non è un array', response.data);
          }
        })
        .catch((error) => {
          console.error('Errore nella richiesta AJAX: ', error);
        });
    };
  
    const handleCheckboxChange2 = (id) => {
      const updatedSelection = [...selectedRows2];
      const isIdSelected = updatedSelection.includes(id);
  
      if (isIdSelected) {
        const index = updatedSelection.indexOf(id);
        updatedSelection.splice(index, 1);
      } else {
        updatedSelection.push(id);
      }
  
      setSelectedRows2(updatedSelection);
    };
  
    const handleSelezionaTuttiTutti2 = () => {
      const allIds = risultati.map(risultato => risultato.ID);
      const allSelected = allIds.every(id => selectedRows2.includes(id));
  
      // If all are selected, unselect all; otherwise, select all
      const updatedSelection = allSelected ? [] : allIds;
  
      setSelectedRows2(updatedSelection);
    };
  
    const handleElimina2 = () => {
      if (selectedRows2.length > 0) {
        const userConfirmed = window.confirm("Sei sicuro di voler eliminare le righe selezionate?");
        if (userConfirmed) {
          axios.delete('https://www.scanteq.com/php/workers.php', {
            data: { idsToDelete: selectedRows2 },
            /*headers: {
              'Custom-Header': custom,
            },*/
          })
            .then((response) => {
              setRisultati(response.data);
              // Deseleziona tutte le righe dopo l'eliminazione
              setSelectedRows2([]);
            })
            .catch((error) => {
              console.error('Errore nella richiesta AJAX per eliminazione: ', error);
            });
        }
      }
    };
  
    const handleInputChange = (e, id, columnName) => {
      const updatedRisultati = risultati.map((risultato) => {
        if (risultato.ID === id) {
          return { ...risultato, [columnName]: e.target.value };
        }
        return risultato;
      });
  
      setRisultati(updatedRisultati);
      setIsDataChanged(true);
    };
  
    const renderTableCell = (id, columnName, value) => (
      <td>
        {isEditMode && selectedRows2.includes(id) ? (
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e, id, columnName)}
          />
        ) : (
          value
        )}
      </td>
    );
  

    const handledebug2 = () =>{
      console.log(selectedRows2);
    }
    const handleRiattiva = () => {
      if (selectedRows2.length === 0) {
        alert('Seleziona almeno un worker da riattivare.');
        return;
      }
    
      selectedRows2.forEach((selectedID) => {
        const selectedWorker = risultati.find((worker) => worker.ID === selectedID);
        if (selectedWorker) {
          const {Tipo, Postazione, AreaInteresse, Valore, Tolleranza } = selectedWorker;
          const newWorker = createNewWorker(Tipo, Postazione, AreaInteresse, Valore, Tolleranza, selectedID);

          let dataToSendWork = {};
    if(Tipo === 'Avvitature'){
    dataToSendWork = {
      tipo: 'avvitatura',
      postazione : Postazione,
      areaInteresse : AreaInteresse,
    }
  }else if(Tipo === 'Termoforo'){
    dataToSendWork = {
      tipo: 'termoforo',
      postazione : Postazione,
    }
  }
  else if(Tipo === 'Coppia'){
    dataToSendWork = {
      tipo: 'coppia',
      postazione : Postazione,
    }
  }

          console.log(newWorker);

          setWorkers((prevWorkers) => [...prevWorkers, newWorker]); // Aggiungi il nuovo worker all'array esistente
          newWorker.instance.postMessage(dataToSendWork);
  
    
          // Aggiungi il listener del messaggio al nuovo worker
          newWorker.instance.addEventListener('message', (event) => {
            console.log('Dati ricevuti dal nuovo worker:', event.data);
    
            const lastItem = event.data.newData[event.data.newData.length - 1];
    
            if (lastItem) {
              const receivedValue = parseFloat(lastItem.ValoreFinale);
              console.log('receivedValue', receivedValue);
    
              const inputNumber = parseFloat(inputValue);
              const isInRange = Math.abs(receivedValue - inputNumber) <= newWorker.threshold;

              setWorkers((prevWorkers) => {
                const index = prevWorkers.findIndex((prevWorker) => prevWorker.id === newWorker.id);
              
                if (index !== -1) {
                  const updatedWorkers = [...prevWorkers];
                  updatedWorkers[index] = { ...updatedWorkers[index], isValueInRange: isInRange };
                  return updatedWorkers;
                }
              
                return prevWorkers;
              });
              
              setIsValueInRange(isInRange);
              

            } else {
              console.error('L\'array è vuoto.');
            }
          });
        }
      });

      alert('Worker riattivati con successo.');
    };


    const createNewWorker = (tipo, postazione, areaInteresse, valore, tolleranza, customId = null) => {
      const worker = new Worker('/workers/worker.js');
    
      const newWorker = {
        id: customId !== null ? customId : workerIdCounter,
        tipo: tipo,
        instance: worker,
        postazione: postazione,
        isValueInRange: null,
        areaInteresse: areaInteresse,
        valore: valore,
        threshold: tolleranza,
      };
    
      // Incrementa il contatore degli ID solo se non viene fornito un ID personalizzato
      if (customId === null) {
        setWorkerIdCounter((prevCounter) => prevCounter + 1);
      }
    
      return newWorker;
    };
  

  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className='tablepaneavv'>
        <h1>Analisi Dinamica</h1>
        <h2 className='percosa'>Per cosa desideri avviare un'analisi?</h2>
        <div className='paneanalisiscegli'>
          <AnalysisOptionBox text="Avvitature" onClick={() => handleOptionClick("Avvitature")} />
          <AnalysisOptionBox text="Termoforo" onClick={() => handleOptionClick("Termoforo")} />
          <AnalysisOptionBox text="Coppia" onClick={() => handleOptionClick("Coppia")} />
        </div>
        {renderFormBasedOnOption()}
        <p className='workermessage'>{workerMessage}</p>


        <div>
      <div>

      <h1>Workers Attivi</h1>

        <div className='bottoniavvitature'>
            {/*<button className='buttonavv' onClick={handleSelezionaTuttiTutti}>Seleziona tutti</button>*/}
            <button className='buttonavv' onClick={handleElimina}>Elimina</button>
            {/*<button onClick={handleDebug}>Debug</button>*/}
          </div>
        <table className='tracctable'>
          <thead>
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>Tipo</th>
              <th>Postazione</th>
              <th>Area Interesse</th>
              <th>Valore</th>
              <th>Tolleranza</th>
              <th>Analisi</th>
              {/* Aggiungi altre colonne necessarie */}
            </tr>
          </thead>
          <tbody>
            {workers.map((workersall) => (
              <tr key={workersall.id}>
                 <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(workersall.id)}
                      onChange={() => handleCheckboxChange(workersall.id)}
                    />
                  </td>
                <td>{workersall.id}</td>
                <td>{workersall.tipo}</td>
                <td>{workersall.postazione}</td>
                <td>{workersall.areaInteresse}</td>                
                <td>{workersall.valore}</td>
                <td>{workersall.threshold}</td>
                <td>{handleisValueString(workersall.isValueInRange)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      

<div className='pertablework'>
  <h1>Configurazioni</h1>
  <div>
            <div className='bottoniavvitature'>
              <button className='buttonavv' onClick={handleAggiorna}>Aggiorna</button>
              <div className='checker'>
                <p className='current'>{`Totale risultati: ${risultati.length}`}</p>
              </div>
              <button className='buttonavv' onClick={handleSelezionaTuttiTutti2}>Seleziona tutti</button>
              <button className='buttonavv' onClick={handleElimina2}>Elimina</button>
              <button className='buttonavv' onClick={handleRiattiva}> Riattiva </button>
              {/*<button className='buttonavv' onClick={handledebug2}> Debug </button>*/}
            </div>
            <table className='tracctable'>
              <thead>
                <tr>
                  <th>Seleziona</th>
                  <th>Tipo</th>
                  <th>Postazione</th>
                  <th>Area Interesse</th>
                  <th>Valore</th>
                  <th>Tolleranza</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(risultati) && risultati.map((risultato, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows2.includes(risultato.ID)}
                        onChange={() => handleCheckboxChange2(risultato.ID)}
                      />
                    </td>
  
                    {renderTableCell(risultato.ID, 'Tipo', risultato.Tipo)}
                    {renderTableCell(risultato.ID, 'Postazione', risultato.Postazione)}
                    {renderTableCell(risultato.ID, 'AreaInteresse', risultato.AreaInteresse)}
                    {renderTableCell(risultato.ID, 'Valore', risultato.Valore)}
                    {renderTableCell(risultato.ID, 'Tolleranza', risultato.Tolleranza)}
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
      </div>

      </div>
    </div>
  );
};

export default AnalisiDinamica;
