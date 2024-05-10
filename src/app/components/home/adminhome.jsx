import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import Header21 from '../../sections/common/header21';
import TicketAdmin from '../contactus/ticketadmin';
import { useHistory, useNavigate } from 'react-router-dom';
import Header21Admin from '../../sections/common/header21admin';

function AdminHome() {

  const [email, setEmail] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se c'è un utente autenticato
    if (auth.currentUser) {
      // Verifica se l'email è definita prima di accedere
      if (auth.currentUser.email) {
        // Ottieni l'indirizzo email dell'utente autenticato
        const userEmail = auth.currentUser.email;
        setEmail(userEmail);
      } else {
        // Se l'email non è definita, reindirizza l'utente alla pagina di login
        navigate('/login');
      }
    } else {
      // Se l'utente non è autenticato, reindirizza alla pagina di login
      navigate('/login');
    }
  }, [auth, navigate]);

  return (
    <div className='traccpane'>
      <div className='headersss'> 
      <Header21Admin></Header21Admin>
      </div>
      <div className='home'>
        <h1>Benvenuto admin </h1>
      </div>
    </div>
  );
}

export default AdminHome;
