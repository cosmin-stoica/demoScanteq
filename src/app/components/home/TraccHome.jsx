import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import Header22 from '../../sections/common/header22';
import { useHistory, useNavigate } from 'react-router-dom';
import Navbar from '../traceability/navbar';
import Header21 from '../../sections/common/header21';

function TraccHome() {

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

  useEffect(() => {
    // Verifica se c'è un utente autenticato
    if (auth.currentUser) {
      // Ottieni l'indirizzo email dell'utente autenticato
      const userEmail = auth.currentUser.email;
      setEmail(userEmail);
    }
  }, [auth]);

  const isUserAllowed = email === 'sabelt@auth.com' || email === 'admin@auth.com' || email ==='demo@auth.com';


  return (
    <div className='paneee'>
      <Header21></Header21>
      <Navbar></Navbar>
    
    </div>
  );
}

export default TraccHome;
