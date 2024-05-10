import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TicketPrompt from './ticketprompt';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import emailjs from '@emailjs/browser';
import Header21 from '../../sections/common/header21';
import { useHistory, useNavigate } from 'react-router-dom';

function Ticket() {
  const [email, setEmail] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      const userEmail = auth.currentUser.email;
      setEmail(userEmail);
    }
    fetchTickets();
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
    console.log(state);
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

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    Nome: nome,
    Messaggio: encodeURIComponent(messaggio),
    Autore: autore,
    Cellulare: encodeURIComponent(cellulare),
    Stato: '0'
  };

    // Update emailData with form values
    const updatedEmailData = {
      ...emailData,
      text: `!!!`,
    };

    setEmailData(updatedEmailData);
    sendEmail();
  try {
    // Converti l'oggetto 'data' in una stringa JSON
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
      // Imposta il messaggio di successo
      setSuccessMessage('Richiesta inviata con successo');
      handleSuccessMessage();

      // Ripulisci i campi del modulo
      setNome('');
      setCellulare('');
      setMessaggio('');

      // Dopo che la richiesta POST è stata completata, richiama fetchTickets per aggiornare la lista dei ticket
      await fetchTickets();
    } else {
      console.error('Errore nella richiesta al server:', response.statusText);

      // Imposta il messaggio di errore
      setSuccessMessage('Richiesta non inviata con successo');
      handleErrorMessage();
    }
  } catch (error) {
    console.error('Errore nella richiesta al server:', error);

    // Imposta il messaggio di errore
    setSuccessMessage('Richiesta non inviata con successo');
    handleErrorMessage();
  }
};

  useEffect(() => {
    // Carica l'elenco dei ticket all'avvio del componente
    fetchTickets();
  }, []);


  const [emailData, setEmailData] = useState({
    to: 'cosmin.stoica5@gmail.com',
    subject: `E STATO APERTO UN NUOVO TICKET`, // Removed ${nome}
    text: `!!!`,
  });

  const custom = 'Sc38ahD38sW31Hshue';

  const sendEmail = async () => {
    try {
      const response = await axios.post('https://www.scanteq.com/php/send-email.php', emailData,
      {headers: {
        'Custom-Header': custom,
      },
    });
      console.log('E-mail inviata con successo:', response.data);
      // Handle success if needed
    } catch (error) {
      console.error('Errore nell\'invio dell\'e-mail:', error);
      // Handle error if needed
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
    <div className='panegrande'>
    <Header21></Header21>
    <div className="ticketpane">
      <h1>Elenco dei ticket</h1>
      <div className='contbuttons'>
        <button className='buttonticket' onClick={fetchTickets}>Aggiorna</button>
        <button className='buttonticket'  onClick={() => filterTickets('Tutti')}>Tutti</button>
        <button className='buttonticket'  onClick={() => filterTickets('Conclusi')}>Conclusi</button>
        <button className='buttonticket'  onClick={() => filterTickets('In corso')}>In corso</button>
        
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
      <div className="tickets">
        {filteredTickets
          .filter((ticketData) => ticketData.Autore === email)
          .map((ticketData) => (
            <TicketPrompt key={ticketData.id} ticketData={ticketData} />
          ))}
      </div>
      </div>
      <div className='creaticketpane'>
        <h2>Crea un nuovo ticket</h2>
        <div className='ppp'>
          <div className='ticketform'>
            <form onSubmit={handleSubmit}>
              <div className='nome'>
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
              <div className='cellulare'>
                <label htmlFor="cellulare">Cellulare:</label>
                <input
                  type="text"
                  id="cellulare"
                  name="Cellulare"
                  value={cellulare}
                  onChange={handleCellulareChange}
                  required
                />
              </div>
              <div className='messaggio'>
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
              <button id="sspp" className="site-button sx-btn-primary icon sx-btn-lg" type="submit">Invia</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
