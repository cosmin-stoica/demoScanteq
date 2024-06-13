import React,{useEffect, useState,} from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderSoloTicket from '../../elements/common/headersoloticket';
import Loader from '../../elements/loader';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function AreaPersonalePage() {

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

  if (!authChecked) {
    return <Loader />; // Aggiungi un loader mentre l'autenticazione è in corso
  }

  return (
    <div className='traccpane'>
      <div className='headersss'> 
      <HeaderSoloTicket></HeaderSoloTicket>
      </div>
      <div id="homepanesection" className="section-full wow fadeInDown" data-wow-duration="2000ms">
      <div className='containerlogoscritta'>
      {/*<ItodoImage className="logoscanteq" src="logo.png"></ItodoImage>*/}
      <span className="sx-text-primary"><i id="iconahome" className="flaticon-employee" /></span>
      <h1>Area Personale</h1>
      </div>
      </div>
    </div>
  );
}

export default AreaPersonalePage;
