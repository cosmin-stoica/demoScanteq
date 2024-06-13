import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header21 from '../../../elements/common/header21';
import {useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import axios from 'axios';
import PickAggiungi from './pickaggiungi';

function PickGestionePostazioni() {

  
const [risultati, setRisultati] = useState([]);
const [currentPage, setCurrentPage] = useState(0);
const [selectedRows, setSelectedRows] = useState([]);
const [isEditMode, setIsEditMode] = useState(false);
const [isDataChanged, setIsDataChanged] = useState(false);



  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
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
  


  const itemsPerPage = 15;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleRisultati = risultati

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
    const allIds = visibleRisultati.map(risultato => risultato.IDTAB);
    const allSelected = allIds.every(id => selectedRows.includes(id));
    const updatedSelection = allSelected ? [] : allIds;
  
    setSelectedRows(updatedSelection);
  };


  
  const handleSelezionaTuttiTutti = () => {
    const allIds = risultati.map(risultato => risultato.IDTAB);
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
        axios.delete('https://www.scanteq.com/php/picktoimage.php', { data: { idsToDelete: selectedRows } })
          .then((response) => {
              console.log(response);
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
        const modifiedData = risultati.filter((risultato) => selectedRows.includes(risultato.IDTAB));
        console.log(modifiedData);
  
        // Esegui la richiesta al tuo backend per aggiornare i dati
        axios
          .put('https://www.scanteq.com/php/picktoimage.php', { modifiedData })
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
      if (risultato.IDTAB === id) {
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
  axios.get('https://www.scanteq.com/php/picktoimage.php')
    .then((response) => {
      if (Array.isArray(response.data)) {
        setRisultati(response.data);
      }
    })
    .catch((error) => {
      console.error('Errore nella richiesta AJAX: ', error);
    });
};


  return (
    <div>
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      {isUserAllowed ? (
        <div className='tablepaneavv'>
          <h1 className='titoloperpanetracc'>Gestione Postazioni</h1>
          <div className='bottoniavvitature'>
            <button className='buttonavv' onClick={handlePrevPage} disabled={currentPage === 0}>Indietro</button>
            <button className='buttonavv' onClick={handleNextPage} disabled={endIndex >= risultati.length}>Avanti</button>
            <button className='buttonavv' onClick={handleAggiorna}>Aggiorna</button>
            <div className='checker'>
            <div className='checker'>
  <p className='current'>{`Pagina ${currentPage + 1}/${Math.ceil(risultati.length / itemsPerPage)}`}</p>
</div>

</div>        
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
                <th>Select</th>
                <th>ID</th>
                <th>Linea</th>
                <th>Postazione</th>
                <th>Contenuto</th>
                <th>Quantità</th>
                <th>Soglia</th>
                <th>Stato</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(risultati) && risultati.map((risultato, index) => (
                <tr key={index}>
                  <td>
                    <input className='checkboxreal'
                      type="checkbox"
                      checked={selectedRows.includes(risultato.IDTAB)}
                      onChange={() => handleCheckboxChange(risultato.IDTAB)}
                    />
                  </td>
    {renderTableCell(risultato.IDTAB, 'ID', risultato.ID)}
    {renderTableCell(risultato.IDTAB, 'Linea', risultato.Linea)}
    {renderTableCell(risultato.IDTAB, 'Postazione', risultato.Postazione)}
    {renderTableCell(risultato.IDTAB, 'Contenuto', risultato.Contenuto)}
    {renderTableCell(risultato.IDTAB, 'Numero', risultato.Numero)}
    {renderTableCell(risultato.IDTAB, 'Soglia', risultato.Soglia)}
    {renderTableCell(risultato.IDTAB, 'Stato', risultato.Stato === '1' ? "In Prelievo" : risultato.Stato === '2' ? "Vigilanza" : risultato.Stato === '3' ? "Errore" : "A riposo")}
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
          <PickAggiungi onAggiorna={handleAggiorna} />
    </div>
  </div>
  );
}

export default PickGestionePostazioni;
