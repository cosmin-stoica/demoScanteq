import React, { useEffect, useState } from 'react';

function TicketPrompt({ ticketData }) {
  const { Data, Autore, Email, Nome, Cell, Messaggio } = ticketData;

  const decodedMessaggio = decodeURIComponent(Messaggio);

  // Inizializza lo stato con il valore iniziale di Stato
  const [stato, setStato] = useState('');

  useEffect(() => {
    // Aggiorna lo stato solo se il valore di ticketData.Stato è diverso
    if (ticketData.Stato == 0) {
      setStato('In corso');
    } else if (ticketData.Stato == 1) {
      setStato('Concluso');
    }



  }, [ticketData.Stato]);

  const ticketClass = stato === 'In corso' ? 'blue-backgroundss' : 'green-background';

  return (
    <div className={`ticket-box ${ticketClass}`}>
      <p><strong>Data:</strong> {Data}</p>
      <p><strong>Email:</strong> {Email}</p>
      <p><strong>Nome:</strong> {Nome}</p>
      <p><strong>Cellulare:</strong> {Cell}</p>
      <p className='messaggioverflow'><strong>Messaggio:</strong> {decodedMessaggio}</p>
      <p><strong>Stato:</strong> {stato}</p>
    </div>
  );
}

export default TicketPrompt;
