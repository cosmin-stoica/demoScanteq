import React, { useState, useEffect } from 'react';
import HeaderSoloTicket from '../../sections/common/headersoloticket';
import CreaTicket from './creaTicket';
import ManagerAttivita from './managerattivita';
import firebase from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import AttivitaCards from './attivitaCards';

function AttivitaAdmin() {

  const [azienda, setAzienda] = useState('');

  const [pagina, setPagina] = useState(0);
  const maxpagine = 1;

  const handleCardChoiceAttiva = (e) => {
    setAzienda(e);
    setPagina(1);
  }

  const handleCardChoiceCrea = (e) => {
    setAzienda(e);
    setPagina(3);
  }

  const handleEsciButton = () => {
    DimPagina();
  }

  const DimPagina = () =>{

    if(pagina==3){
    setPagina(0);
    return;}

    if(pagina>0)
    setPagina(pagina - 1);
  }

  const AumPagina = () =>{
    setPagina(pagina + 1);
  }


  const firebaseConfig = {
    apiKey: "AIzaSyCtuJ3uDDNlCvz7EXoWyUH6EmOFCBdIh_c",
    authDomain: "scanteq-aaa19.firebaseapp.com",
    projectId: "scanteq-aaa19",
    storageBucket: "scanteq-aaa19.appspot.com",
    messagingSenderId: "330344662556",
    appId: "1:330344662556:web:caff0b5787f90c563ec1d9",
    measurementId: "G-RW2056K68F"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const storage = getStorage(firebaseApp);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 991);
    };

    const intervalId = setInterval(() => {
      handleResize();
    }, 300);

    handleResize();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const updateAzienda = (newAzienda) => {
    setAzienda(newAzienda);
  };
  

  return (
    <div className='paneprincipalepostazioni'>
      <HeaderSoloTicket></HeaderSoloTicket>
      <div className='paneattivitafull'>

        <button onClick={handleEsciButton} className='esciattivitabutton'>{isSmallScreen ? '<' : 'Indietro'}</button>

        {pagina == 0 && <div className='cardAdmindiv'>
          <div onClick={() => handleCardChoiceAttiva('attivita')} class="cardAdmin">Gestione Attività</div>
          <div onClick={() => handleCardChoiceCrea('crea')} class="cardAdmin">Crea Attività</div>
        </div>}


        {/*pagina == 1 && <ManagerAttivita></ManagerAttivita>*/}
        {pagina == 1 && <AttivitaCards pagina={pagina} aumPagina={AumPagina} updateAzienda={updateAzienda} />}
        {pagina == 2 && <ManagerAttivita azienda={azienda}></ManagerAttivita>}
        {pagina == 3 && <CreaTicket></CreaTicket>}
      </div>
    </div>
  );
}

export default AttivitaAdmin;
