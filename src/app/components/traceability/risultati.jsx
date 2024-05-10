import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../traceability/navbar';
import Header21 from '../../sections/common/header21';

function TableRisultati() {
  const [risultati, setRisultati] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [orderByTimestamp, setOrderByTimestamp] = useState(true);
  const [searchDate, setSearchDate] = useState('');
  const [searchOrder, setSearchOrder] = useState('');
  const [searchUser, setSearchUser] = useState('');
  const [searchWorkstation, setSearchWorkstation] = useState('');
  const [searchCodice, setSearchCodice] = useState('');
  const [searchSeriale, setSearchSeriale] = useState('');
  const [searchNomeJob, setSearchNomeJob] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [isDataChanged, setIsDataChanged] = useState(false);

  


  useEffect(() => {
    axios.get('https://www.scanteq.com/php/risultati.php')
    .then((response) => {
      if (Array.isArray(response.data)) {
        const sortedData = response.data.sort((a, b) => {
          if (orderByTimestamp) {
            return new Date(b.TimestampInizio) - new Date(a.TimestampInizio);
          } else {
            return new Date(a.TimestampInizio) - new Date(b.TimestampInizio);
          }
        });
  
        setRisultati(sortedData);
      } else {
        console.error('Errore: la risposta non è un array', response.data);
      }
    })
    .catch((error) => {
      console.error('Errore nella richiesta AJAX: ', error);
    });
  
  }, [orderByTimestamp]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleToggleOrder = () => {
    setOrderByTimestamp(!orderByTimestamp);
  };

  const [email, setEmail] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      const userEmail = auth.currentUser.email;
      setEmail(userEmail);
    }
  }, [auth]);

  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;
        setEmail(userEmail);
        setAuthChecked(true);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (!authChecked) {
    return null;
  }

  const isUserAllowed = email === 'sabelt@auth.com' || email === 'admin@auth.com' || email ==='demo@auth.com';
  const oldPage = currentPage -1;
  
  const handleFilterChange = () => {
    setCurrentPage(0);
  };

  const filteredRisultati = Array.isArray(risultati) ? risultati.filter((risultato) => {
    const includesTimestamp = searchDate === '' || (risultato.TimestampInizio && risultato.TimestampInizio.includes(searchDate));
    const includesUser = searchUser === '' || (risultato.Utente && risultato.Utente.includes(searchUser));
    const includesOrder = searchOrder === '' || (risultato.Commessa && risultato.Commessa.includes(searchOrder));
    const includesWorkstation = searchWorkstation === '' || (risultato.Postazione && risultato.Postazione.includes(searchWorkstation));
    const includesCodice = searchCodice === '' || (risultato.Codice && risultato.Codice.includes(searchCodice));
    const includesSeriale = searchSeriale === '' || (risultato.Seriale && risultato.Seriale.includes(searchSeriale));
    const includesNomeJob = searchNomeJob === '' || (risultato.NomeJob && risultato.NomeJob.includes(searchNomeJob));

    return includesTimestamp && includesUser && includesOrder && includesWorkstation && includesCodice && includesSeriale && includesNomeJob;
}) : []

  const itemsPerPage = 15;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleRisultati = filteredRisultati.slice(startIndex, endIndex);


  const calculateEffectiveTime = (timestampInizio, timestampFine, pausa) => {
    const startTime = new Date(timestampInizio).getTime();
    const endTime = new Date(timestampFine).getTime();
    const pauseTime = pausa * 60 * 1000; // Converti pausa in millisecondi
    const effectiveTime = (endTime - startTime - pauseTime) / (60 * 1000); // Converti il risultato in minuti
    return effectiveTime.toFixed(2); // Ritorna il risultato arrotondato a due decimali
  };

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
  
  const handleSelezionaTutti = () => {
    const allIds = visibleRisultati.map(risultato => risultato.ID);
    const allSelected = allIds.every(id => selectedRows.includes(id));
    const updatedSelection = allSelected ? [] : allIds;
  
    setSelectedRows(updatedSelection);
  };

  
  const handleCheckboxChangeTutti = (id) => {
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
    const allIds = risultati.map(risultato => risultato.ID);
    const allSelected = allIds.every(id => selectedRows.includes(id));
  
    // If all are selected, unselect all; otherwise, select all
    const updatedSelection = allSelected ? [] : allIds;
  
    setSelectedRows(updatedSelection);
  };

  const handleElimina = () => {
    if (selectedRows.length > 0) {
      const userConfirmed = window.confirm("Sei sicuro di voler eliminare le righe selezionate?");
      if (userConfirmed) {
        // Fai la chiamata DELETE al backend per eliminare le righe
        axios.delete('https://www.scanteq.com/php/risultati.php', { data: { idsToDelete: selectedRows } })
          .then((response) => {
            // Aggiorna i risultati dopo l'eliminazione
            setRisultati(response.data);
            // Deseleziona tutte le righe dopo l'eliminazione
            setSelectedRows([]);
          })
          .catch((error) => {
            console.error('Errore nella richiesta AJAX per eliminazione: ', error);
          });
      }
    }
  };

  const handleModifica = () => {
    setIsEditMode(!isEditMode);
  };
  
  const handleSaveChanges = () => {
    if (selectedRows.length > 0) {
      if (!isDataChanged) {
        window.alert("Nessuna modifica apportata.");
        return;
      }
  
      const userConfirmed = window.confirm("Sei sicuro di voler salvare le modifiche?");
      if (userConfirmed) {
        const modifiedData = risultati.filter((risultato) => selectedRows.includes(risultato.ID));
  
        // Esegui la richiesta al tuo backend per aggiornare i dati
        axios
          .put('https://www.scanteq.com/php/risultati.php', { modifiedData })
          .then((response) => {
            console.log("Risposta dal backend:", response.data);
            // Aggiorna i risultati dopo il salvataggio delle modifiche
            setRisultati(response.data);
            // Disattiva la modalità di modifica e deseleziona tutte le righe
            setIsEditMode(false);
            setSelectedRows([]);
            // Resetta lo stato di isDataChanged
            setIsDataChanged(false);
          })
          .catch((error) => {
            console.error('Errore nella richiesta AJAX per aggiornamento: ', error);
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
    {isEditMode && selectedRows.includes(id) ? (
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

const handleAggiorna = () => {
  axios.get('https://www.scanteq.com/php/risultati.php')
    .then((response) => {
      if (Array.isArray(response.data)) {
        const sortedData = response.data.sort((a, b) => {
          if (orderByTimestamp) {
            return new Date(b.TimestampInizio) - new Date(a.TimestampInizio);
          } else {
            return new Date(a.TimestampInizio) - new Date(b.TimestampInizio);
          }
        });

        setRisultati(sortedData);
      } else {
        console.error('Errore: la risposta non è un array', response.data);
      }
    })
    .catch((error) => {
      console.error('Errore nella richiesta AJAX: ', error);
    });
};


  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      {isUserAllowed ? (
        <div className='tablepaneavv'>
          <h1>Risultati</h1>
          <div className='bottoniavvitature'>
            <button className='buttonavv' onClick={handlePrevPage} disabled={currentPage === 0}>Indietro</button>
            <button className='buttonavv' onClick={handleNextPage} disabled={endIndex >= filteredRisultati.length}>Avanti</button>
            <button className='buttonavv' onClick={handleToggleOrder}>Ordina per Timestamp</button>
            <button className='buttonavv' onClick={handleAggiorna}>Aggiorna</button>
            <div className='checker'>
            <div className='checker'>
  <p className='current'>{`Pagina ${currentPage + 1}/${Math.ceil(filteredRisultati.length / itemsPerPage)}`}</p>
</div>

</div>

            <p>Filtri:</p>
            <input className='cercatext'
              type="text"
              placeholder="Cerca per data (YYYY-MM-DD)"
              value={searchDate}
              onChange={(e) => {
                setSearchDate(e.target.value);
                handleFilterChange();}
              }
            />
            <input className='cercatext'
              type="text"
              placeholder="Cerca per commessa"
              value={searchOrder}
              onChange={(e) => {
                setSearchOrder(e.target.value);
                handleFilterChange();}
              }
            />
            <input className='cercatext'
              type="text"
              placeholder="Cerca per utente"
              value={searchUser}
              onChange={(e) => {
                setSearchUser(e.target.value);
                handleFilterChange();}
              }
            />
            <input className='cercatext'
              type="text"
              placeholder="Cerca per postazione"
              value={searchWorkstation}
              onChange={(e) => {
                setSearchWorkstation(e.target.value);
                handleFilterChange();}
              }
            />
            <input
          className='cercatext'
          type="text"
          placeholder="Cerca per codice"
          value={searchCodice}
          onChange={(e) => {
            setSearchCodice(e.target.value);
            handleFilterChange();
          }}
        />
        <input
          className='cercatext'
          type="text"
          placeholder="Cerca per seriale"
          value={searchSeriale}
          onChange={(e) => {
            setSearchSeriale(e.target.value);
            handleFilterChange();
          }}
        />
        <input
          className='cercatext'
          type="text"
          placeholder="Cerca per nome job"
          value={searchNomeJob}
          onChange={(e) => {
            setSearchNomeJob(e.target.value);
            handleFilterChange();
          }}
        />
            <button onClick={() => {
              setSearchDate('');
              setSearchOrder('');
              setSearchUser('');
              setSearchWorkstation('');
              setSearchCodice('');
              setSearchNomeJob('');
              setSearchSeriale('');
              handleFilterChange();
            }}>Cancella ricerca</button>
          </div> 
          <div className='strumentidiv'>   
          <button onClick={handleSelezionaTuttiTutti}>Seleziona tutti</button>    
           <button onClick={handleSelezionaTutti}>Seleziona tutti nella pagina</button>
          <button className='eliminabutton' onClick={handleElimina}>Elimina</button>
          <button className='modificabutton' onClick={handleModifica}>{isEditMode ? 'Disattiva Modifica' : 'Modifica'}</button>
          {isEditMode ? (
        <button  className='salvabutton' onClick={() => handleSaveChanges()}>Salva</button>
      ) : null}
      </div> 
          <table className='tracctable'>          
            <thead>
              <tr>
              <th>Seleziona</th>
                <th>Commessa</th>
                <th>Codice</th>
                <th>Seriale</th>
                <th>Postazione</th>
                <th>Utente</th>
                <th>Totale Job</th>
                <th>Tempo Inizio</th>
                <th>Tempo fine</th>
                <th>Pausa (sec)</th>
                <th>Tempo Effettivo (min)</th>
                <th>Errore</th>
                <th>Esito</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(visibleRisultati) && visibleRisultati.map((risultato, index) => (
                <tr key={index}>
                  <td>
                    <input className='checkboxreal'
                      type="checkbox"
                      checked={selectedRows.includes(risultato.ID)}
                      onChange={() => handleCheckboxChange(risultato.ID)}
                    />
                  </td>
                
    {renderTableCell(risultato.ID, 'Commessa', risultato.Commessa)}
    {renderTableCell(risultato.ID, 'Codice', risultato.Codice)}
    {renderTableCell(risultato.ID, 'Seriale', risultato.Seriale)}
    {renderTableCell(risultato.ID, 'Postazione', risultato.Postazione)}
    {renderTableCell(risultato.ID, 'Utente', risultato.Utente)}
    {renderTableCell(risultato.ID, 'TotaleJob', risultato.TotaleJob)}
    {renderTableCell(risultato.ID, 'TimestampInizio', risultato.TimestampInizio)}
    {renderTableCell(risultato.ID, 'TimestampFine', risultato.TimestampFine)}
    {renderTableCell(risultato.ID, 'Pausa', risultato.Pausa)}
    {renderTableCell(
      risultato.ID,
      'Tempo Effettivo (min)',
      calculateEffectiveTime(risultato.TimestampInizio, risultato.TimestampFine, risultato.Pausa)
    )}
    {renderTableCell(risultato.ID, 'Errore', risultato.Errore)}
    {renderTableCell(risultato.ID, 'Esito', risultato.Esito)}
  </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='tablepaneavv'>
          <h1>Il tuo account non dispone di database</h1>
        </div>
      )}
    </div>
  );
}

export default TableRisultati;
