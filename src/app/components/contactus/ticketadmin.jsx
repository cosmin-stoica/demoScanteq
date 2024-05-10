import React, { useState, useEffect } from 'react';
import TicketPromptAdmin from './ticketpromptadmin';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header21Admin from '../../sections/common/header21admin';
import Header21 from '../../sections/common/header21';
import { useHistory, useNavigate } from 'react-router-dom';


function TicketAdmin() {


  
  const [email, setEmail] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      const userEmail = auth.currentUser.email;
      setEmail(userEmail);
    }
  }, [auth]);




  const [tickets, setTickets] = useState([]);
  const [nome, setNome] = useState('');
  const [cellulare, setCellulare] = useState('');
  const [messaggio, setMessaggio] = useState('');
  const autore = `${email}`;

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleCellulareChange = (e) => {
    setCellulare(e.target.value);
  };

  const handleMessaggioChange = (e) => {
    setMessaggio(e.target.value);
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [showSuccessConcludiMessage, setShowSuccessConcludiMessage] = useState(false);
const [showErrorConcludiMessage, setShowErrorConcludiMessage] = useState(false);

const handleSuccessConcludiMessage = () => {
  setShowSuccessConcludiMessage(true);
  setTimeout(() => setShowSuccessConcludiMessage(false), 2000); // Nasconde il messaggio di successo dopo 2 secondi
};

const handleErrorConcludiMessage = () => {
  setShowErrorConcludiMessage(true);
  setTimeout(() => setShowErrorConcludiMessage(false), 2000); // Nasconde il messaggio di errore dopo 2 secondi
};

  const handleSuccessMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000); // Nasconde il messaggio di successo dopo 2 secondi
  };

  const handleErrorMessage = () => {
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 2000); // Nasconde il messaggio di errore dopo 2 secondi
  };

  const [filteredTickets, setFilteredTickets] = useState([]);
  const [successMessage, setSuccessMessage] = useState(''); // Stato per il messaggio di successo

  const filterTickets = (state) => {
    let filtered = tickets;
    if (state === 'Conclusi') {
      filtered = tickets.filter((ticketData) => ticketData.Stato == 1);
    } else if (state === 'In corso') {
      filtered = tickets.filter((ticketData) => ticketData.Stato == 0);
    }
    setFilteredTickets(filtered.sort((a, b) => new Date(b.Data) - new Date(a.Data)));
  };

  const fetchTickets = async () => {
    try {
      const response = await fetch('https://www.scanteq.com/php/script.php');
      if (response.ok) {
        const data = await response.json(); // Supponendo che lo script PHP restituisca dati JSON
        setTickets(data);
      } else {
        console.error('Errore nella richiesta al server:', response.statusText);
      }
    } catch (error) {
      console.error('Errore nella richiesta al server:', error);
    }
  };

  const handleTicketConcludi = async (ticketId) => {
    try {

      const response = await fetch('https://www.scanteq.com/php/script.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          ticketId: ticketId,
        },
      });
  
      if (response.ok) {
        // Aggiorna l'elenco dei ticket dopo la modifica dello stato
        fetchTickets();
    
        // Mostra il messaggio di successo per la modifica dello stato
        handleSuccessConcludiMessage();
      } else {
        console.error('Errore nel tentativo di contrassegnare il ticket come "Concluso":');
        // Mostra il messaggio di errore per la modifica dello stato
        handleErrorConcludiMessage();
      }
    } catch (error) {
      console.error('Errore nel tentativo di contrassegnare il ticket come "Concluso":', error);
      // Mostra il messaggio di errore per la modifica dello stato
      handleErrorConcludiMessage();
      filterTickets('Tutti');
    }
  };
  
  // Richiesta DELETE per eliminare un ticket
  const handleTicketDelete = async (deletedTicketId) => {
    try {
      const response = await fetch('https://www.scanteq.com/php/script.php', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          ticketId: deletedTicketId,
        },
      });
  
      if (response.ok) {
        // Rimuovi il ticket eliminato dall'elenco
        setFilteredTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== deletedTicketId));
  
        // Imposta il messaggio di successo
        setSuccessMessage('Ticket eliminato con successo');
        handleSuccessMessage();
      } else {
        console.error('Errore nell\'eliminazione del ticket:');
  
        // Imposta il messaggio di errore
        setSuccessMessage('Errore nell\'eliminazione del ticket');
        handleErrorMessage();
      }
  
      await fetchTickets();
    } catch (error) {
      console.error('Errore nell\'eliminazione del ticket:', error);
  
      // Imposta il messaggio di errore
      setSuccessMessage('Errore nell\'eliminazione del ticket');
      handleErrorMessage();
    }
  };

  useEffect(() => {
    // Carica l'elenco dei ticket all'avvio del componente
    fetchTickets();
  }, []);

  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user.email === 'admin@auth.com') {
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
    <div className="ticketpane">
      <Header21></Header21>
      <h1>Elenco dei ticket</h1>
      <div className='contbuttons'>
        <button className='buttonticket' onClick={fetchTickets}>Aggiorna</button>
        <button className='buttonticket'  onClick={() => filterTickets('Tutti')}>Tutti</button>
        <button className='buttonticket'  onClick={() => filterTickets('Conclusi')}>Conclusi</button>
        <button className='buttonticket'  onClick={() => filterTickets('In corso')}>In corso</button>
      </div>
      {showSuccessMessage && (
        <div className={`success-message show`}>
          Ticket eliminato con successo
        </div>
      )}
      {showErrorMessage && (
        <div className={`error-message show`}>
          Ticket non eliminato con successo
        </div>
      )}
      {showSuccessConcludiMessage && (
  <div className={`success-message show`}>
    Stato del ticket modificato con successo
  </div>
)}
{showErrorConcludiMessage && (
  <div className={`error-message show`}>
    Errore nella modifica dello stato del ticket
  </div>
)}
      <div className="tickets">
      {filteredTickets
          .map((ticketData) => (
            <TicketPromptAdmin key={ticketData.id} ticketData={ticketData}  onTicketDelete={handleTicketDelete} onTicketConcludi={handleTicketConcludi} />
          ))}
      </div>
    </div>
  );
}

export default TicketAdmin;
