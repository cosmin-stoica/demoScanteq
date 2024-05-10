import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../traceability/navbar';
import Header21 from '../../sections/common/header21';

function TableWork() {
  const [risultati, setRisultati] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDataChanged, setIsDataChanged] = useState(false);
  

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

  const isUserAllowed = email === 'sabelt@auth.com' || email === 'admin@auth.com' || email === 'demo@auth.com';

  const handleAggiorna = () => {
    axios.get('https://www.scanteq.com/php/workers.php', {
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
        axios.delete('https://www.scanteq.com/php/workers.php', {
          data: { idsToDelete: selectedRows },
        })
          .then((response) => {
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
        axios
          .put('https://www.scanteq.com/php/workers.php', { data: { modifiedData }, })
          .then((response) => {
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

  const handleRiattiva = () =>{

  }

  return (
    <div>
          <div className='bottoniavvitature'>
            <button className='buttonavv' onClick={handleAggiorna}>Aggiorna</button>
            <div className='checker'>
              <p className='current'>{`Totale risultati: ${risultati.length}`}</p>
            </div>
            <button className='buttonavv' onClick={handleSelezionaTuttiTutti}>Seleziona tutti</button>
            <button className='buttonavv' onClick={handleElimina}>Elimina</button>
            <button className='buttonavv' onClick={handleRiattiva}> Riattiva </button>
          </div>
          <table className='tracctable'>
            <thead>
              <tr>
                <th>Seleziona</th>
                <th>Tipo</th>
                <th>Postazione</th>
                <th>Area Interesse</th>
                <th>Valore</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(risultati) && risultati.map((risultato, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(risultato.ID)}
                      onChange={() => handleCheckboxChange(risultato.ID)}
                    />
                  </td>

                  {renderTableCell(risultato.ID, 'Tipo', risultato.Tipo)}
                  {renderTableCell(risultato.ID, 'Postazione', risultato.Postazione)}
                  {renderTableCell(risultato.ID, 'AreaInteresse', risultato.AreaInteresse)}
                  {renderTableCell(risultato.ID, 'Valore', risultato.Valore)}
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
}

export default TableWork;
