import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header22 from '../../sections/common/header22';
import { useHistory, useNavigate } from 'react-router-dom';
import Navbar from '../traceability/navbar';
import Header21 from '../../sections/common/header21';

function TableSuper() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [orderByTimestamp, setOrderByTimestamp] = useState(true);
  const [searchDate, setSearchDate] = useState(''); // Aggiunto stato per la ricerca
  const [searchOrder, setSearchOrder] = useState(''); // Aggiunto stato per la ricerca
  const [searchUser, setSearchUser] = useState(''); // Aggiunto stato per la ricerca
  const [searchWorkstation, setSearchWorkstation] = useState(''); // Aggiunto stato per la ricerca

  useEffect(() => {
    // Effettua una chiamata AJAX al tuo script PHP per ottenere i dati
    axios.get('https://www.scanteq.com/php/supervisor.php')
      .then((response) => {
        // Ordina i dati in base al timestamp
        const sortedData = response.data.sort((a, b) => {
          if (orderByTimestamp) {
            return new Date(b.data) - new Date(a.data);
          } else {
            return new Date(a.data) - new Date(b.data);
          }
        });

        setTickets(sortedData);
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
    // Verifica se c'è un utente autenticato
    if (auth.currentUser) {
      // Ottieni l'indirizzo email dell'utente autenticato
      const userEmail = auth.currentUser.email;
      setEmail(userEmail);
    }
  }, [auth]);

  const isUserAllowed = email === 'sabelt@auth.com' || email === 'admin@auth.com' || email ==='demo@auth.com';
  const oldPage = currentPage -1
  
  const handleFilterChange = () => {
    setCurrentPage(0);
  };

  // Filtra i ticket in base alla data di ricerca
  const filteredTickets = tickets.filter((ticket) => {
    const includesTimestamp = searchDate === '' || (ticket.data && ticket.data.includes(searchDate));
    const includesUser = searchUser === '' || (ticket.user && ticket.user.includes(searchUser));
    const includesOrder = searchOrder === '' || (ticket.linea && ticket.linea.includes(searchOrder));
    const includesWorkstation = searchWorkstation === '' || (ticket.workstation && ticket.workstation.includes(searchWorkstation));

    return includesTimestamp && includesUser && includesOrder && includesWorkstation;
  });

  const itemsPerPage = 15;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleTickets = filteredTickets.slice(startIndex, endIndex);

  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;
        setEmail(userEmail);
        setAuthChecked(true);
      } else {
        // Se l'utente non è autenticato, reindirizza alla pagina di login
        navigate('/login');
      }
    });

    return () => unsubscribe(); // Pulizia dell'effetto

  }, [auth, navigate]);

  // Attendi che l'autenticazione sia stata verificata prima di rendere il componente
  if (!authChecked) {
    return null;
  }

  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      {isUserAllowed ? (
        <div className='tablepaneavv'>
        <h1>Log Supervisor</h1>
        <div className='bottoniavvitature'>
          <button className='buttonavv' onClick={handlePrevPage} disabled={currentPage === 0}>Indietro</button>
          <button className='buttonavv' onClick={handleNextPage} disabled={endIndex >= filteredTickets.length}>Avanti</button>
          <button className='buttonavv' onClick={handleToggleOrder}>Ordina per Timestamp</button>
          <div className='checker'>
          {oldPage < 0 ? null : <p className='vecchio'>{oldPage}</p>}
          <p className='current'>{currentPage}</p>
          <p className='vecchio'>{currentPage + 1}</p>
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
            placeholder="Cerca per linea"
            value={searchOrder}
            onChange={(e) => {
              setSearchOrder(e.target.value);
              handleFilterChange();}
            }
          />
         <button onClick={() => {
           setSearchDate('');
           setSearchOrder('');
           setSearchUser('');
           setSearchWorkstation('');
           handleFilterChange();
         }}>Cancella ricerca</button>
        </div>
        <table className='tracctable'>
          <thead>
            <tr>
              <th>Linea</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(visibleTickets) && visibleTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.linea}</td>
                <td>{ticket.tipo}</td>
                <td>{ticket.data}</td>
                <td className="description-cell">{ticket.descrizione}</td>
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

export default TableSuper;
