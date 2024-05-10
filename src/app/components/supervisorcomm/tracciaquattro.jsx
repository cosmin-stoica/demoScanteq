import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function TracciaQuattro() {
  const [demoCredentials, setDemoCredentials] = useState({
    email: 'demo@auth.com',
    password: 'demo123',
  });

  const navigate = useNavigate();

  const handleProvaDemo = async () => {
    const { email, password } = demoCredentials;
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If login is successful, navigate to "/home"
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error if needed
    }
  };
    
    return (
        <>
            {/* SECTION CONTENT START */}
            <div id="tracciaduepane" className="section-full p-t110 mobile-page-padding">
                <div className="container">
                    <div className="titolettisupervisor">
                    <h4>Con l'implementazione della nuova funzionalità di invio ticket, il nostro servizio di assistenza è ora più immediato che mai. Siamo consapevoli dell'importanza di risolvere rapidamente le tue esigenze e siamo entusiasti di offrirvi un canale diretto per comunicare con il nostro team di supporto. </h4>
                    <h5>Quando incontrate sfide o avete domande, basta compilare un ticket e il nostro team si attiverà immediatamente per fornirvi l'assistenza necessaria. La vostra soddisfazione è la nostra priorità, e con questa nuova funzionalità, siamo pronti a garantire risposte tempestive e soluzioni efficienti per mantenere le vostre operazioni in costante movimento.</h5>
                    </div>
                </div>
                {/*<div className="provademo">
                        <NavLink to="/home"><button onClick={handleProvaDemo}>Demo</button></NavLink>
    </div>*/}
            </div>
        </>
    )
}

export default TracciaQuattro;