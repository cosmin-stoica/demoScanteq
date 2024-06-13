import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header21 from '../../../../elements/common/header21.jsx';
import { useNavigate } from 'react-router-dom';
import Navbar from '../traceability/navbar';

function Tracciabilita() {

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

  return (
    <div className='traccpane'>
      <div className='headersss'> 
      <Navbar></Navbar>
      <Header21></Header21>
      </div>
      <div id="homepanesection" className="section-full wow fadeInDown" data-wow-duration="2000ms">
      <div className='containerlogoscritta'>
      <span className="sx-text-primary"><i id="iconahome" className="flaticon-monitor-1"/></span>
      <h1>Traceability Hub</h1>
      <p>Il Traceability Hub di Supervisor è la chiave per una gestione avanzata dei dati. Questo hub consente di tracciare ogni singolo dato proveniente dalle postazioni, offrendo una visualizzazione dettagliata e in tempo reale del flusso informativo. Grazie a questa funzionalità, avete la possibilità di analizzare i dati con precisione, migliorare la precisione delle informazioni e garantire la trasparenza nelle vostre operazioni.</p>
      </div>
  </div>
    </div>
  );
}

export default Tracciabilita;
