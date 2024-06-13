import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header21 from '../../../../elements/common/header21';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';

function MaintenanceHome() {

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
      {/*<ItodoImage className="logoscanteq" src="logo.png"></ItodoImage>*/}
      <span className="sx-text-primary"><i id="iconahome" className="flaticon-technical-support" /></span>
      <h1>Maintenance Hub</h1>
      <p>La manutenzione preventiva è fondamentale per garantire il corretto funzionamento delle postazioni nel tempo. Il Maintenance Hub di Supervisor vi offre gli strumenti necessari per gestire in modo proattivo la manutenzione, garantendo che le vostre postazioni siano sempre operative al massimo delle loro capacità. Con funzionalità avanzate di monitoraggio e avvisi tempestivi, Supervisor semplifica la gestione della manutenzione, consentendovi di ridurre i tempi di fermo e migliorare l'efficienza complessiva del vostro sistema.</p>
      </div>
      {/*<div className='tracc'>
        <h1>Tracciabilità</h1>
  </div>*/}
  </div>
    </div>
  );
}

export default MaintenanceHome;
