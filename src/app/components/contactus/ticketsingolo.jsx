import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TicketPrompt from './ticketprompt';
import TicketPromptAdmin from './ticketpromptadmin';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import emailjs from '@emailjs/browser';
import { useHistory, useNavigate } from 'react-router-dom';
import HeaderSoloTicket from '../../sections/common/headersoloticket';
import ChatComponent from '../picktoimage/provaopen';

function TicketSingolo() {
  const [email, setEmail] = useState(null);
  const auth = getAuth();
  const [nome, setNome] = useState('');
  const [formemail, setFormEmail] = useState('');
  const [cellulare, setCellulare] = useState('');
  const [messaggio, setMessaggio] = useState('');
  const [statoFiltro, setStatoFiltro] = useState('Tutti'); // Aggiunto statoFiltro
  const [page, setPage] = useState(1); // Pagina corrente
  const [ticketsPerPage, setTicketsPerPage] = useState(0); // Numero di ticket per pagina, inizializzato a 5
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      const userEmail = auth.currentUser.email;
      setEmail(userEmail);
      setIsAdmin(userEmail.includes('admin@auth.com'));
      console.log(auth.currentUser.email);
    }
    fetchTickets();
  }, [auth]);
  


  const handleSuccessMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000); // Nasconde il messaggio di successo dopo 2 secondi
  };

  const handleErrorMessage = () => {
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 2000); // Nasconde il messaggio di errore dopo 2 secondi
  };


  const getWindowWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };

  // Calcola il numero di ticket per pagina in base alla larghezza corrente del viewport
  const calculateTicketsPerPage = () => {
    const windowWidth = getWindowWidth();
    if (windowWidth < 768) {
      return 2; // Ad esempio, 3 ticket per pagina per dispositivi con larghezza inferiore a 768px
    } else if (windowWidth < 1024) {
      return 3; // Ad esempio, 5 ticket per pagina per dispositivi con larghezza inferiore a 1024px
    } else {
      return 4; // Ad esempio, 7 ticket per pagina per dispositivi con larghezza maggiore di 1024px
    }
  };

  useEffect(() => {
    setTicketsPerPage(calculateTicketsPerPage());
    const handleResize = () => {
      setTicketsPerPage(calculateTicketsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const [tickets, setTickets] = useState([]);
  const autore = `${email}`;

  const fetchTickets = async () => {
    try {
      const response = await fetch('https://www.scanteq.com/php/script.php');
      if (response.ok) {
        const data = await response.json();
        setTickets(data);
        console.log("OK");
      } else {
        console.error('Errore nella richiesta al server:', response.statusText);
      }
    } catch (error) {
      console.error('Errore nella richiesta al server:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Nome: nome,
      Messaggio: encodeURIComponent(messaggio),
      Autore: autore,
      Email: formemail,
      Cellulare: encodeURIComponent(cellulare),
      Stato: '0'
    };

    const updatedEmailData = {
      ...emailData,
      text: `!!!`,
    };

    setEmailData(updatedEmailData);
    sendEmail();
    try {
      const jsonData = JSON.stringify(data);

      const response = await fetch('https://www.scanteq.com/php/script.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      console.log(data);
      console.log(jsonData);
      console.log('Risposta del server:', response);

      if (response.ok) {
        handleSuccessMessage();
        await fetchTickets();
      } else {
        handleErrorMessage();
        console.error('Errore nella richiesta al server:', response.statusText);
      }
    } catch (error) {
      handleErrorMessage();
      console.error('Errore nella richiesta al server:', error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const [emailData, setEmailData] = useState({
    to: 'cosmin.stoica5@gmail.com',
    subject: `E STATO APERTO UN NUOVO TICKET`,
    text: `!!!`,
  });

  const custom = 'Sc38ahD38sW31Hshue';

  const sendEmail = async () => {
    try {
      const response = await axios.post('https://www.scanteq.com/php/send-email.php', emailData,
        {
          headers: {
            'Custom-Header': custom,
          },
        });
      console.log('E-mail inviata con successo:', response.data);
    } catch (error) {
      console.error('Errore nell\'invio dell\'e-mail:', error);
    }
  };

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

  
  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };


  const handleFormEmailChange = (e) => {
    setFormEmail(e.target.value);
  };


  const handleCellulareChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, ''); // Rimuove tutti i caratteri non numerici
  
    // Aggiorna il valore dell'input con solo caratteri numerici
    setCellulare(numericValue);
  };
  
  

  const handleMessaggioChange = (e) => {
    setMessaggio(e.target.value);
  };


  const filteredTickets = tickets
    .filter((ticketData) => {
      if (statoFiltro === "Tutti") {
        return true;
      } else {
        return ticketData.Stato === statoFiltro;
      }
    })
    .filter((ticketData) => ticketData.Autore === email);

  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0); // Scrolla verso l'alto quando cambi pagina
  };

  const visibleTickets = filteredTickets.slice((page - 1) * ticketsPerPage, page * ticketsPerPage);

  
  const filteredTicketsAdmin = tickets
    .filter((ticketData) => {
      if (statoFiltro === "Tutti") {
        return true;
      } else {
        return ticketData.Stato === statoFiltro;
      }
    })

  const totalPagesAdmin = Math.ceil(filteredTicketsAdmin.length / ticketsPerPage);

    
  const visibleTicketsAdmin = filteredTicketsAdmin.slice((page - 1) * ticketsPerPage, page * ticketsPerPage);
  
  

  return (
    <div className='paneprincipalepostazioni'>
              <HeaderSoloTicket></HeaderSoloTicket>
      <div className='tablepaneavv'> 
        <div className='perimieiticket'>
          <p>I miei Ticket</p>
          <select value={statoFiltro} onChange={(e) => setStatoFiltro(e.target.value)}>
            <option value="Tutti">Tutti</option>
            <option value="0">In Corso</option>
            <option value="1">Conclusi</option>
          </select>
        </div>
        {!isAdmin &&<div className="pagination">
          <button className='buttonaggiornatickets' onClick={fetchTickets}>Aggiorna</button>
        <button className='paginaticket' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Indietro</button>
        <span>Pagina {page} di {totalPages}</span>
        <button className='paginaticket' onClick={() => handlePageChange(page + 1)} disabled={page === totalPages || totalPages === 0}>Avanti</button>
      </div>}

      {isAdmin &&<div className="pagination">
          <button className='buttonaggiornatickets' onClick={fetchTickets}>Aggiorna</button>
        <button className='paginaticket' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Indietro</button>
        <span>Pagina {page} di {totalPagesAdmin}</span>
        <button className='paginaticket' onClick={() => handlePageChange(page + 1)} disabled={page === totalPagesAdmin || totalPages === 0}>Avanti</button>
      </div>}

        <div className='barradeiticket'>
          <div className="ticketsbarra">

          {isAdmin && visibleTicketsAdmin
              .map((ticketData) => (
                <TicketPromptAdmin key={ticketData.id} ticketData={ticketData} />
              ))}

            {!isAdmin && visibleTickets
              .filter((ticketData) => {
                if (statoFiltro === "Tutti") {
                  return true;
                } else {
                  return ticketData.Stato === statoFiltro;
                }
              })
              .filter((ticketData) => ticketData.Autore === email)
              .map((ticketData) => (
                <TicketPrompt key={ticketData.id} ticketData={ticketData} />
              ))}
          </div>
        </div>
      </div>
      <div className='creaticketdivnuovo'>
        <div className='ticketformdiv'>
        <h2>Crea un nuovo ticket</h2>
          <div className=''>
            <form onSubmit={handleSubmit}>
            <div className='perflexticket'>
                <label htmlFor="nome">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  value={formemail}
                  onChange={handleFormEmailChange}
                  required
                />
              </div>
              <div className='perflexticket'>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="Nome"
                  value={nome}
                  onChange={handleNomeChange}
                  required
                />
              </div>
              <div className='perflexticket'>
                <label htmlFor="cellulare">Cellulare:</label>
                <input
                  type="phone"
                  id="cellulare"
                  name="Cellulare"
                  value={cellulare}
                  onChange={handleCellulareChange}
                  className="cellulareinputticket"
                  required
                />
              </div>
              <div className='perflexticket'>
                <label htmlFor="messaggio">Messaggio:</label>
                <textarea
                  type="text"
                  id="messaggio"
                  name="Messaggio"
                  value={messaggio}
                  onChange={handleMessaggioChange}
                  required
                />
              </div>
              <button className="inviaformticket" type="submit">Invia</button>
            </form>
          </div>
        </div>
        {showSuccessMessage && (
        <div className={`success-message show`}>
          Richiesta inviata con successo
        </div>
      )}
      {showErrorMessage && (
        <div className={`error-message show`}>
          Richiesta non inviata con successo
        </div>
      )}
      </div>
    </div>
  );
}

export default TicketSingolo;
