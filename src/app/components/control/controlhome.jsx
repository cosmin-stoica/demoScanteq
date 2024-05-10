import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header21 from '../../sections/common/header21';
import { useHistory, useNavigate } from 'react-router-dom';
import ScegliPostazione from './sceglipostazione';
import Navbar from './navbar';
import ItodoImage from '../../elements/itodo-img';

function ControlHome() {

  const [email, setEmail] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const auth = getAuth();
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
  return (
    <div className='traccpane'>
          <Navbar></Navbar>
      <div className='headersss'> 
      <Header21></Header21>
      </div>
      <div id="homepanesection" className="section-full wow fadeInDown" data-wow-duration="2000ms">
      <div className='containerlogoscritta'>
      {/*<ItodoImage className="logoscanteq" src="logo.png"></ItodoImage>*/}
      <span className="sx-text-primary"><i id="iconahome" className="flaticon-data" /></span>
      <h1>Control Hub</h1>
      <p>Il Control Hub di Supervisor vi offre un controllo immediato e completo sullo stato operativo delle postazioni. Monitora e visualizza in tempo reale le attività in corso, consentendoti di identificare rapidamente eventuali anomalie o aree di miglioramento. Con il Control Hub, sarete al comando delle vostre operazioni, in grado di prendere decisioni informate per ottimizzare le prestazioni del sistema.</p>
      </div>
      </div>
    </div>
  );
}

export default ControlHome;
