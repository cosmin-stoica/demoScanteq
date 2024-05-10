import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header21 from '../../sections/common/header21';
import { useNavigate } from 'react-router-dom';
import ItodoImage from '../../elements/itodo-img';
import PostazioniHome from './postazionihome';

function Home() {
  const [email, setEmail] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;
        const [emailPrefix] = userEmail.split('@');
        setEmail(emailPrefix);
        setAuthChecked(true);
      } else {
        navigate('/login');
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    };

  }, [auth, navigate]);

  if (!authChecked) {
    return null;
  }

  return (
    <div className='traccpane'>
      <div className='headersss'> 
        <Header21></Header21>
      </div>
      <div className='content-container'>
        {/*{!isMobile && (
          <div className='postazioni-container'>
            <PostazioniHome></PostazioniHome>
          </div>
        )}*/}
        <div id="homepanesection" className="section-full wow fadeInDown" data-wow-duration="2000ms">
        <div className='intro'>
          <ItodoImage className="imgsuper" src="images/supervisor/SupervisorLogo.png"></ItodoImage>
        <div className='home'>
            {email ? <h1>Benvenuto {email}</h1> : null}
          </div>
          <p className='supervisorscrittahome'>Supervisor, la piattaforma 4.0 all'avanguardia che rivoluziona la gestione dei dati e delle operazioni nelle vostre postazioni.
Connettiamo e centralizziamo le informazioni in tempo reale per offrirvi una visione completa e immediata del vostro sistema. Attraverso i suoi tre hub distinti Supervisor vi offre un controllo senza precedenti sulla tracciabilità, lo stato operativo e la manutenzione preventiva</p>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;