import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ItodoImage from "../../elements/itodo-img";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleErrorMessage = () => {
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 2000); // Nasconde il messaggio di errore dopo 2 secondi
  };

  const auth = getAuth();
  const navigate = useNavigate();

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoggedIn(true);
        if(user == 'admin@auth.com')
          navigate('/ticketadmin');
        else
          navigate('/ticketscanteq');
        
      })
      .catch((error) => {
        handleErrorMessage();
        console.error(error.message);
      });
  }

  return (
    <div className='fullpane'>
      <div className="panesinistra">
      <div className='perbutton'>
        <NavLink to="/"><button>Indietro</button></NavLink>
      </div>
        <div className='textpanes'>
      <ItodoImage className = "logologin" src="images/supervisor/SupervisorLogo.png"></ItodoImage>
      <p>Il tuo spazio personale</p>
      <h1>
      Centralizza e gestisci i tuoi dati in tempo reale per un miglioramento continuo delle prestazioni industriali.
</h1>
      </div>
      <div className='containerhublogin' >
      <div>
      <h1>Control Hub</h1>
      <p>Controlla in tempo reale l'operatività</p>
      </div>
      <div>
      <h1>Traceabilty Hub</h1>
      <p>Visualizza i dati di tracciabilità
      </p>
      </div>
      <div>
      <h1>Maintenance Hub</h1>
      <p>Metti in atto una manutenzione preventiva</p>
      </div>
      </div>
      </div>
    <div className='loginpane'>
      <div className='logincont'>
      <h1 className='aut'>Login</h1>
      <div className='loginform'>
      <i id="loginicon" class="flaticon-email-1"></i>
        <input className='emailpane'
        id="login__input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> {/* Aggiungi un break per separare i campi */}
        <i id="loginicon" class="flaticon-physics"></i>
        <input className='loginpanes'
                id="login__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> {/* Aggiungi un break per separare i campi */}
        </div>
        <button id='login__submit' type="button" className="site-button sx-btn-primary icon sx-btn-lg" onClick={handleLogin}>Login</button>
      </div>
      {showErrorMessage && (
        <div className={`error-message show`}>
          Account non trovato o password sbagliata
        </div>
      )}
    </div>
    </div>
  );
}

export default Login;
