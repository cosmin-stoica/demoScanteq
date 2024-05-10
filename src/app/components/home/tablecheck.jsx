import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header22 from '../../sections/common/header22';
import { useHistory, useNavigate } from 'react-router-dom';
import Navbar from '../traceability/navbar';
import Header21 from '../../sections/common/header21';

function TableTracc() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [orderByTimestamp, setOrderByTimestamp] = useState(true);
  const [searchDate, setSearchDate] = useState(''); // Aggiunto stato per la ricerca
  const [searchOrder, setSearchOrder] = useState(''); // Aggiunto stato per la ricerca
  const [searchUser, setSearchUser] = useState(''); // Aggiunto stato per la ricerca
  const [searchWorkstation, setSearchWorkstation] = useState(''); // Aggiunto stato per la ricerca

  useEffect(() => {
    // Effettua una chiamata AJAX al tuo script PHP per ottenere i dati
    axios.get('https://www.scanteq.com/php/checklist.php')
      .then((response) => {
        // Verifica se response.data è un array
        if (Array.isArray(response.data)) {
          // Ordina i dati in base al timestamp
          const sortedData = response.data.sort((a, b) => {
            if (orderByTimestamp) {
              return new Date(b.timeStamp) - new Date(a.timeStamp);
            } else {
              return new Date(a.timeStamp) - new Date(b.timeStamp);
            }
          });
  
          setTickets(sortedData);
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
    // Verifica se c'è un utente autenticato
    if (auth.currentUser) {
      // Ottieni l'indirizzo email dell'utente autenticato
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

  const isUserAllowed = email === 'sabelt@auth.com' || email === 'admin@auth.com' || email ==='demo@auth.com';
  const oldPage = currentPage -1
  
  const handleFilterChange = () => {
    setCurrentPage(0);
  };

  // Filtra i ticket in base alla data di ricerca
  const filteredTickets = tickets.filter((ticket) => {
    const includesTimestamp = searchDate === '' || (ticket.timestamp && ticket.timestamp.includes(searchDate));
    const includesUser = searchUser === '' || (ticket.user && ticket.user.includes(searchUser));
    const includesOrder = searchOrder === '' || (ticket.orderNumber && ticket.orderNumber.includes(searchOrder));
    const includesWorkstation = searchWorkstation === '' || (ticket.workstation && ticket.workstation.includes(searchWorkstation));

    return includesTimestamp && includesUser && includesOrder && includesWorkstation;
  });

  const itemsPerPage = 15;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleTickets = filteredTickets.slice(startIndex, endIndex);

  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      {isUserAllowed ? (
        <div className='tablepaneavv'>
        <h1>Risultati Collaudo</h1>
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
            placeholder="Cerca per ordine"
            value={searchOrder}
            onChange={(e) => {
              setSearchOrder(e.target.value);
              handleFilterChange();}
            }
          />
           <input className='cercatext'
            type="text"
            placeholder="Cerca per user"
            value={searchUser}
            onChange={(e) => {
              setSearchUser(e.target.value);
              handleFilterChange();}
            }
          />
            <input className='cercatext'
            type="text"
            placeholder="Cerca per workstation"
            value={searchWorkstation}
            onChange={(e) => {
              setSearchWorkstation(e.target.value);
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
              <th>Order Number</th>
              <th>Workstation</th>
              <th>User</th>
              <th>Uom</th>
              <th className='nameth'>Name</th>
              <th>Step</th>
              <th className='nameth2'>Timestamp</th>
              <th>isFailed</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(visibleTickets) && visibleTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.orderNumber}</td>
                <td>{ticket.workstation}</td>
                <td>{ticket.user}</td>
                <td>{ticket.UoM}</td>
                <td>{ticket.variableName}</td>
                <td className="description-cell">{ticket.step}</td>
                <td>{ticket.timeStamp}</td>
                <td>{ticket.isFailed}</td>
                <td>{ticket.value}</td>
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

export default TableTracc;
