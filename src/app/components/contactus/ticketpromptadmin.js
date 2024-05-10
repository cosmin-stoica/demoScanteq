import React,{useState, useEffect} from 'react';
import axios from 'axios';

function TicketPromptAdmin({ ticketData, onTicketDelete, onTicketConcludi }) {
  const { ID, Data, Autore, Email, Nome, Cell, Messaggio, Stato } = ticketData;
  const ticketClass = Stato == 0 ? 'blue-backgroundss' : 'green-background';

  const decodedMessaggio = decodeURIComponent(Messaggio);

  const [showSuccessPrendiMessage, setShowSuccessPrendiMessage] = useState(false);
const [showErrorPrendiMessage, setShowErrorPrendiMessage] = useState(false);

const [stato, setStato] = useState('');

useEffect(() => {
  // Aggiorna lo stato solo se il valore di ticketData.Stato è diverso
  if (Stato == 0) {
    setStato('In corso');
  } else if (
    Stato == 1) {
    setStato('Concluso');
  }

}, [Stato]);



const handleSuccessPrendiMessage = () => {
  setShowSuccessPrendiMessage(true);
  setTimeout(() => setShowSuccessPrendiMessage(false), 2000); // Nasconde il messaggio di successo dopo 2 secondi
};

const handleErrorPrendiMessage = () => {
  setShowErrorPrendiMessage(true);
  setTimeout(() => setShowErrorPrendiMessage(false), 2000); // Nasconde il messaggio di errore dopo 2 secondi
};

const [successMessage, setSuccessMessage] = useState(''); // Stato per il messaggio di successo


  const handleDelete = async () => {
    try {
      const response = await fetch('https://www.scanteq.com/php/script.php', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticketId: ID }),
      });

      if (response.ok) {
        onTicketDelete(ID); // Chiamare la funzione di callback per aggiornare l'elenco dei ticket
      } else {
        console.error('Errore nell\'eliminazione del ticket:', response.statusText);
      }

      // Puoi rimuovere la parte successMessage e errorMessage se non sono necessarie qui
    } catch (error) {
      console.error('Errore nell\'eliminazione del ticket:', error);
    }
  };

  const handleConcludi = async () => {
    try {
      const response = await fetch(`https://www.scanteq.com/php/script.php`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticketId: ID }),
      });
  
      if (response.ok) {
        // La richiesta PUT ha avuto successo
        onTicketConcludi(ID);
        // Puoi gestire il successo qui
      } else {
        console.error('Errore nel cambiamento di stato del ticket:', response.statusText);
        // Puoi gestire l'errore qui
      }
    } catch (error) {
      console.error('Errore nel cambiamento di stato del ticket:', error);
      // Puoi gestire l'errore qui
    }
    try {

      const custom = 'Sc38ahD38sW31Hshue';

      const emailData2 = ({
        to: Email, // Assuming Autore is the email address of the ticket author
        subject: 'TICKET CONCLUSO',
        text: `Il tuo ticket aperto in data ${Data} di ${Nome}:\n \n ${decodedMessaggio}\n \n e' stato concluso da Scanteq srl, siamo lieti di aiutarvi!`,
      });
    

      console.log(emailData2);
      const response = await axios.post('https://www.scanteq.com/php/send-email.php', emailData2, 
      {headers: {
        'Custom-Header': custom,
      },
    });
      console.log('E-mail inviata con successo');
      console.log(response.data);
      // Puoi aggiungere il codice per gestire il successo qui
    } catch (error) {
      console.error('Errore nell\'invio dell\'e-mail:', error);
      // Puoi aggiungere il codice per gestire l'errore qui
    }
  };


  const sendEmail = async () => {
    try {

      console.log(Email);

      const emailData = ({
        to: Email, // Assuming Autore is the email address of the ticket author
        subject: 'TICKET PRESO IN CARICO',
        text: `Il tuo ticket aperto in data ${Data} di ${Nome}:\n \n ${decodedMessaggio}\n \n e' stato preso in carico da Scanteq srl`,
      });
    
      const custom = 'Sc38ahD38sW31Hshue';

      console.log(emailData);
      const response = await axios.post('https://www.scanteq.com/php/send-email.php', emailData, 
      {headers: {
        'Custom-Header': custom,
      },
    });
      console.log('E-mail inviata con successo');
      console.log(response.data);
      handleSuccessPrendiMessage();
    } catch (error) {
      handleErrorPrendiMessage();
      console.error('Errore nell\'invio dell\'e-mail:', error);
      // Puoi aggiungere il codice per gestire l'errore qui
    }
  };

  const handleclickdebug = (e) =>{
    console.log(e);
  }


  return (
    <div className={`ticket-box ${ticketClass}`}>
      <div className='ticketbuttonspanel'>
      <button id="ticketbuttons" className='buttoneliminaticket' onClick={handleDelete}>Elimina</button>
      <button id="ticketbuttons" className='buttonconcluditicket' onClick={handleConcludi}>Concludi</button>
      <button id="ticketbuttons" className='buttonconcluditicket' onClick={sendEmail}>Prendi in carico</button>
      </div>
      <p><strong>ID:</strong>{ID}</p>
      <p><strong>Data:</strong> {Data}</p>
      <p><strong>Autore:</strong> {Autore}</p>
      <p><strong>Email:</strong> {Email}</p>
      <p><strong>Nome:</strong> {Nome}</p>
      <p><strong>Cellulare:</strong> {Cell}</p>
      <p className='messaggioverflow'><strong>Messaggio:</strong> {decodedMessaggio}</p>
      <p><strong>Stato:</strong> {stato}</p>
      {showSuccessPrendiMessage && (
  <div className={`success-message show`}>
    Ticket preso in carico con successo
  </div>
)}
{showErrorPrendiMessage && (
  <div className={`error-message show`}>
    Errore nella prendita in carico del ticket
  </div>
)}
    </div>
  );
}

export default TicketPromptAdmin;