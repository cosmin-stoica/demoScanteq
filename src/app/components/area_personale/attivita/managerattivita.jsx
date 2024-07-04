import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import VisualizzaAttivita from './visualizzaattivita';
import InserisciAttivita from './inserisciattivita.jsx';
import InserisciAllegato from './inserisciallegato.jsx';


function ManagerAttivita({ azienda }) {

  const [risultati, setRisultati] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [orderByTimestamp, setOrderByTimestamp] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDataChanged, setIsDataChanged] = useState(false);

  const [searchOfferta, setSearchOfferta] = useState('');
  const [searchCliente, setSearchCliente] = useState('');
  const [searchCommittente, setSearchCommittente] = useState('');
  const [searchOrdine, setSearchOrdine] = useState('');
  const [searchTitolo, setSearchTitolo] = useState('');

  const [selectedRisutato, setSelectedrisultato] = useState();
  const [apridiv, setApriDiv] = useState(false);
  const [allegati, setAllegati] = useState(false);
  const [inserisciAll, setinserisciAll] = useState(false);
  const [inserisciAllegati, setinserisciAllegati] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyCtuJ3uDDNlCvz7EXoWyUH6EmOFCBdIh_c",
    authDomain: "scanteq-aaa19.firebaseapp.com",
    projectId: "scanteq-aaa19",
    storageBucket: "scanteq-aaa19.appspot.com",
    messagingSenderId: "330344662556",
    appId: "1:330344662556:web:caff0b5787f90c563ec1d9",
    measurementId: "G-RW2056K68F"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const storage = getStorage(firebaseApp);


  const [files, setFiles] = useState([]);

  const fetchFiles = (folderNumber) => {
    const storageRef = ref(storage, `offerte/${folderNumber}`);
    listAll(storageRef)
      .then(async (result) => {
        const fileUrls = await Promise.all(result.items.map((itemRef) => {
          return getDownloadURL(ref(storage, itemRef.fullPath))
            .then((url) => {
              return { name: itemRef.name, url: url };
            });
        }));
        setFiles(fileUrls);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei file:", error);
      });
  };



  const handleEliminaFile = async (folderNumber, fileName) => {

    const userConfirmed = window.confirm("Sei sicuro di voler eliminare la riga selezionata?");
    if (userConfirmed) {
      try {
        const folderRef = ref(storage, `offerte/${folderNumber}`);

        const fileRef = ref(folderRef, fileName);

        await deleteObject(fileRef);

        console.log(`Il file ${fileName} è stato eliminato dalla cartella ${folderNumber}`);
        fetchFiles(folderNumber);
      } catch (error) {
        console.error('Errore durante l\'eliminazione del file:', error);
      }
    }
  };


  useEffect(() => {
    if (selectedRisutato && selectedRisutato.NumeroOfferta != null)
      fetchFiles(selectedRisutato.NumeroOfferta);
  }, [allegati]);


  useEffect(() => {
    axios.get('https://www.scanteq.com/php/oreSql.php')
      .then((response) => {
        if (Array.isArray(response.data)) {
          const sortedData = response.data.sort((a, b) => {
            if (orderByTimestamp) {
              return new Date(b.Creazione) - new Date(a.Creazione);
            } else {
              return new Date(a.Creazione) - new Date(b.Creazione);
            }
          });
          setRisultati(sortedData);
        } else {
          console.log(response);
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

  const oldPage = currentPage - 1;

  const handleFilterChange = () => {
    setCurrentPage(0);
  };

  const filteredRisultati = Array.isArray(risultati) ? risultati.filter((risultato) => {
    const includesOfferta = searchOfferta === '' || (risultato.NumeroOfferta && risultato.NumeroOfferta.toLowerCase().includes(searchOfferta.toLowerCase()));
    const includesCliente = searchCliente === '' || (risultato.Cliente && risultato.Cliente.toLowerCase().includes(searchCliente.toLowerCase()));
    const includesCommittente = searchCommittente === '' || (risultato.Committente && risultato.Committente.toLowerCase().includes(searchCommittente.toLowerCase()));
    const includesOrdine = searchOrdine === '' || (risultato.Ordine && risultato.Ordine.toLowerCase().includes(searchOrdine.toLowerCase()));
    const includesTitolo = searchTitolo === '' || (risultato.Titolo && risultato.Titolo.toLowerCase().includes(searchTitolo.toLowerCase()));

    let includesAzienda;

    if (azienda === 'Tutti') {
      return includesOfferta && includesCliente && includesCommittente && includesOrdine && includesTitolo;
    } else if (azienda === 'Altro') {
      const esclusi = ['sabelt', 'aras', 'lamborghini', 'proma', 'proma grugliasco', 'lear', 'lear melfi'];
      const includesAzienda = risultato.Committente && !esclusi.includes(risultato.Committente.toLowerCase());
      return includesAzienda && includesOfferta && includesCliente && includesCommittente && includesOrdine && includesTitolo;
    } else {
      const includesAzienda = risultato.Committente && risultato.Committente.toLowerCase().includes(azienda.toLowerCase());
      return includesAzienda && includesOfferta && includesCliente && includesCommittente && includesOrdine && includesTitolo;
    }
  }) : []

  const itemsPerPage = 15;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const sortedRisultati = filteredRisultati.map(risultato => {
    const offertaNumerica = risultato.NumeroOfferta ? parseFloat(risultato.NumeroOfferta.replace('.', '')) : 0;
    return {
      ...risultato,
      offertaNumerica: offertaNumerica
    };
  }).sort((b, a) => a.offertaNumerica - b.offertaNumerica);

  const visibleRisultati = sortedRisultati.slice(startIndex, endIndex);



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



  const handleSelezionaTuttiTutti = () => {
    const allIds = risultati.map(risultato => risultato.ID);
    const allSelected = allIds.every(id => selectedRows.includes(id));

    const updatedSelection = allSelected ? [] : allIds;

    setSelectedRows(updatedSelection);
  };

  const handleElimina = () => {
    if (selectedRows.length > 0) {
      const userConfirmed = window.confirm("Sei sicuro di voler eliminare le righe selezionate?");
      if (userConfirmed) {
        axios.delete('https://www.scanteq.com/php/attivita.php', { data: { idsToDelete: selectedRows } })
          .then((response) => {
            console.log(response);
            setRisultati(response.data);
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


  const handleSaveChanges = async () => {
    if (selectedRows.length > 0) {
      if (!isDataChanged) {
        window.alert("Nessuna modifica apportata.");
        return;
      }

      const userConfirmed = window.confirm("Sei sicuro di voler salvare le modifiche?");
      if (userConfirmed) {
        const modifiedData = risultati.filter((risultato) => selectedRows.includes(risultato.ID));

        try {
          // Controlla se NumeroOfferta è cambiato
          const changedRows = modifiedData.filter((data) => {
            const originalData = risultati.find((risultato) => risultato.ID === data.ID);
            return originalData.NumeroOfferta !== data.NumeroOfferta;
          });

          // Rinominare le cartelle in Firebase Storage se NumeroOfferta è cambiato
          for (const row of changedRows) {
            const originalData = risultati.find((risultato) => risultato.ID === row.ID);
            const oldFolderName = `offerte/${originalData.NumeroOfferta}`;
            const newFolderName = `offerte/${row.NumeroOfferta}`;

            // Ottieni tutti i file nella vecchia cartella
            const oldFolderRef = storage.ref(oldFolderName);
            const files = await oldFolderRef.listAll();

            for (const fileRef of files.items) {
              const file = await fileRef.getMetadata();
              const oldFilePath = fileRef.fullPath;
              const newFilePath = oldFilePath.replace(oldFolderName, newFolderName);

              // Copia ogni file nella nuova cartella
              const newFileRef = storage.ref(newFilePath);
              await newFileRef.putString(await fileRef.getDownloadURL(), 'data_url');

              // Elimina il file dalla vecchia cartella
              await fileRef.delete();
            }
          }

          // Invia i dati modificati al backend
          const response = await axios.put('api/php/attivita.php', { modifiedData });
          console.log(modifiedData);
          console.log("Risposta dal backend:", response.data);
          setRisultati(response.data);
          setIsEditMode(false);
          setSelectedRows([]);
          setIsDataChanged(false);

        } catch (error) {
          console.error('Errore nella richiesta AJAX per aggiornamento: ', error);
          window.alert('Si è verificato un errore durante il salvataggio delle modifiche.');
        }
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
    axios.get('api/php/attivita.php')
      .then((response) => {
        if (Array.isArray(response.data)) {
          const sortedData = response.data.sort((a, b) => {
            if (orderByTimestamp) {
              return new Date(b.Creazione) - new Date(a.Creazione);
            } else {
              return new Date(a.Creazione) - new Date(b.Creazione);
            }
          });

          setRisultati(sortedData);
        } else {
          console.log(response);
          console.error('Errore: la risposta non è un array', response.data);
        }
      })
      .catch((error) => {
        console.error('Errore nella richiesta AJAX: ', error);
      });
  };

  const vediAttivita = (risultato) => {
    setSelectedrisultato(risultato);
    fetchFiles(risultato.NumeroOfferta)
    setApriDiv(true);
  }

  const chiudiDiv = () => {
    setApriDiv(false);
    setFiles([]);
    setAllegati(false);
    setinserisciAll(false);
    setinserisciAllegati(false);
  }

  const visualizzaAllegati = () => {

    if (allegati) {
      setAllegati(false);
    }
    else {
      setAllegati(true);
    }
    setinserisciAll(false);
    setinserisciAllegati(false);
  }


  const inserisciAttivita = () => {
    if (inserisciAll) {
      setinserisciAll(false);
    }
    else {
      setinserisciAll(true);
    }

    setAllegati(false);
    setinserisciAllegati(false);
  }

  const inserisciAllegatiMethod = () => {
    if (inserisciAllegati)
      setinserisciAllegati(false);
    else
      setinserisciAllegati(true);

    setAllegati(false);
    setinserisciAll(false);
  }


  // Seleziona tutti i td all'interno di #tableattivita
  /*const tds = document.querySelectorAll('#tableattivita td');
   
  // Aggiungi listener per l'hover su ogni td
  tds.forEach(td => {
    // Quando il mouse entra su un td, modifica lo stile di #tableattivita
    td.addEventListener('mouseenter', () => {
      document.getElementById('tableattivita').style.tableLayout = 'none'; // Cambia lo sfondo di #tableattivita
    });
    // Quando il mouse lascia un td, ripristina lo stile di #tableattivita
    td.addEventListener('mouseleave', () => {
      document.getElementById('tableattivita').style.backgroundColor = ''; // Ripristina lo sfondo originale
    });
  });*/


  const handleEdit = () => {
    if (!isEditing)
      setIsEditing(true); // Attiva la modalità modifica
    else
      setIsEditing(false);
  };

  const handleChangeDescrizione = (e) => {
    const updatedDescrizione = e.target.value;
    setSelectedrisultato(prevState => ({
      ...prevState,
      Descrizione: updatedDescrizione,
    }));
  };


  const handleSave = async () => {
    setIsEditing(false);

    const modifiedData = [selectedRisutato];

    axios
      .put('https://www.scanteq.com/php/attivita.php', { modifiedData })
      .then((response) => {
        console.log(modifiedData);
        console.log("Risposta dal backend:", response.data);
        setRisultati(response.data);
      })
      .catch((error) => {
        console.error('Errore nella richiesta AJAX per aggiornamento: ', error);
      });
  };




  return (
    <div>
      <div className='tablepaneavv'>


        <h1>Attività</h1>
        <div className='bottoniavvitature'>
          <button className='buttonavv' onClick={handlePrevPage} disabled={currentPage === 0}>Indietro</button>
          <button className='buttonavv' onClick={handleNextPage} disabled={endIndex >= filteredRisultati.length}>Avanti</button>
          <button className='buttonavv' onClick={handleAggiorna}>Aggiorna</button>
          <div className='checker'>
            <div className='checker'>
              <p className='current'>{`Pagina ${currentPage + 1}/${Math.ceil(filteredRisultati.length / itemsPerPage)}`}</p>
            </div>

          </div>

          <p>Filtri:</p>
          <input
            className='cercatext'
            type="text"
            placeholder="Cerca per offerta"
            value={searchOfferta}
            onChange={(e) => {
              setSearchOfferta(e.target.value);
              handleFilterChange();
            }}
          />
          <input
            className='cercatext'
            type="text"
            placeholder="Cerca per descrizione"
            value={searchTitolo}
            onChange={(e) => {
              setSearchTitolo(e.target.value);
              handleFilterChange();
            }}
          />
          <input
            className='cercatext'
            type="text"
            placeholder="Cerca per cliente"
            value={searchCliente}
            onChange={(e) => {
              setSearchCliente(e.target.value);
              handleFilterChange();
            }}
          />
          <input
            className='cercatext'
            type="text"
            placeholder="Cerca per committente"
            value={searchCommittente}
            onChange={(e) => {
              setSearchCommittente(e.target.value);
              handleFilterChange();
            }}
          />
          <input
            className='cercatext'
            type="text"
            placeholder="Cerca per ordine"
            value={searchOrdine}
            onChange={(e) => {
              setSearchOrdine(e.target.value);
              handleFilterChange();
            }}
          />





          <button className='cancellaricerca' onClick={() => {
            setSearchOfferta('');
            setSearchCliente('');
            setSearchCommittente('');
            setSearchOrdine('');
            setSearchTitolo('');
            handleFilterChange();
          }}>Cancella ricerca</button>



        </div>
        <div className='strumentidiv'>
          <button onClick={handleSelezionaTuttiTutti}>Seleziona tutti</button>
          <button onClick={handleSelezionaTutti}>Seleziona tutti nella pagina</button>
          <button className='eliminabutton' onClick={handleElimina}>Elimina</button>
          <button className='modificabutton' onClick={handleModifica}>{isEditMode ? 'Disattiva Modifica' : 'Modifica'}</button>
          {isEditMode ? (
            <button className='salvabutton' onClick={() => handleSaveChanges()}>Salva</button>
          ) : null}

        </div>
        <div className='perlatable'>
          <table id="tableattivita" className='tracctable'>
            <thead>
              <tr>
                <th>Seleziona</th>
                <th>Offerta</th>
                <th>Descrizione</th>
                <th>Cliente</th>
                <th>Committente</th>
                <th>Ordine</th>
                <th>Stato</th>
                <th>Ore Prev</th>
                <th>Ore Tot</th>
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

                  {/*<td>
                    {
                      new Date(risultato.Creazione).toLocaleDateString('it-IT')
                    }
                  </td>*/}
                  {renderTableCell(risultato.ID, 'NumeroOfferta', risultato.NumeroOfferta)}
                  {/*{renderTableCell(risultato.ID, 'Titolo', risultato.Titolo)}*/}

                  <td class='cellaConTestoEllissizzato'>
                    {isEditMode && selectedRows.includes(risultato.ID) ? (
                      <input
                        type="text"
                        value={risultato.Titolo}
                        onChange={(e) => handleInputChange(e, risultato.ID, 'Titolo')}
                      />
                    ) : (
                      risultato.Titolo
                    )}
                  </td>

                  {renderTableCell(risultato.ID, 'Cliente', risultato.Cliente)}
                  {renderTableCell(risultato.ID, 'Committente', risultato.Committente)}
                  {renderTableCell(risultato.ID, 'Ordine', risultato.Ordine)}
                  {/*renderTableCell(risultato.ID, 'Stato', risultato.Stato)*/}

                  <td style={risultato.Stato == "Concluso" ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: 'orange' }}>
                    {isEditMode && selectedRows.includes(risultato.ID) ? (
                      <input
                        type="text"
                        value={risultato.Stato}
                        onChange={(e) => handleInputChange(e, risultato.ID, "Stato")}
                      />
                    ) : (
                      risultato.Stato
                    )}
                  </td>



                  {/*renderTableCell(risultato.ID, 'Ore', risultato.Ore)*/}
                  {renderTableCell(risultato.ID, 'OrePreviste', risultato.OrePreviste)}

                  <td style={parseInt(risultato.Ore) <= parseInt(risultato.OrePreviste) ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: 'red' }}>
                    {isEditMode && selectedRows.includes(risultato.ID) ? (
                      <input
                        type="text"
                        value={risultato.Ore}
                        onChange={(e) => handleInputChange(e, risultato.ID, "Ore")}
                      />
                    ) : (
                      risultato.Ore
                    )}
                  </td>
                  <td><button className='vediattivitabutton' onClick={() => vediAttivita(risultato)}>Vedi</button></td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>
      </div>







      {apridiv && <div className='divApertoAttivita'>
        <span onClick={chiudiDiv} className='chiudiDiv'>
          &times;
        </span>

        <h5 style={{ color: selectedRisutato.Stato === 'Concluso' ? 'white' : 'black', backgroundColor: selectedRisutato.Stato === 'Concluso' ? 'green' : 'orange' }}>
          {selectedRisutato.Stato}
        </h5>
        <div className='perflex'>
          <div className='infoattivitadiv'>
            <div>
              <h3>Offerta: {selectedRisutato.NumeroOfferta}</h3>
              <h3>Ordine: {selectedRisutato.Ordine}</h3>
            </div>
            <div>
              <h3>Committente: {selectedRisutato.Committente}</h3>
              <h3>Cliente: {selectedRisutato.Cliente}</h3>
            </div>
          </div>
        </div>

        <div className='barrainfo'>
          <div>
            <button className='modificabarrainfo' onClick={handleEdit}>Modifica</button>
            {isEditing && <button onClick={handleSave}>Salva</button>}
            <p>{selectedRisutato.Titolo}</p>
          </div>
        </div>

        <div className='textareadescrizione'>
          {!isEditing ? (
            <>
              <p>{selectedRisutato.Descrizione}</p>
            </>
          ) : (
            <>
              <textarea
                value={selectedRisutato.Descrizione}
                onChange={handleChangeDescrizione}
              ></textarea>
            </>
          )}
        </div>

        <div className='bottoniattivitacontrols'>
          <div>
            <button onClick={visualizzaAllegati}>Visualizza allegati</button>
            <button onClick={inserisciAllegatiMethod}>Inserisci allegati</button>
            <button onClick={inserisciAttivita}>Inserisci attivita</button>
          </div>
        </div>

        {inserisciAllegati && <div><InserisciAllegato req={selectedRisutato.NumeroOfferta} /></div>}


        {inserisciAll && <div>
          <InserisciAttivita req={selectedRisutato.NumeroOfferta} />
        </div>}


        {allegati && <div className='allegatidiv' >
          <ul>
            {files.map((file, index) => (
              <li className='perflex2elementi' key={index}>
                <p>{file.name}</p>
                <div className='buttonsallegati'>
                  <a href={file.url} target="_blank"><i class='flaticon-download' ></i></a>
                  <button className='btndelete' onClick={() => handleEliminaFile(selectedRisutato.NumeroOfferta, file.name)}>X</button>
                </div>
              </li>
            ))}
          </ul>
        </div>}


        <VisualizzaAttivita risultato={selectedRisutato} />



      </div>}






    </div>
  );
}

export default ManagerAttivita;

