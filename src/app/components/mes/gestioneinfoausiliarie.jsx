import React from 'react';
import Header21 from '../../sections/common/header21';
import CreaCommessa from './creacommessa';
import CreaInfoAusiliarie from './creainfoausiliarie';
import Navbar from './navbar';
import TableInfoAusiliarie from './tableinfoausiliarie';

function GestioneInfoAusiliarie() {


  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className="section-full wow fadeInDown" data-wow-duration="600ms">
        <TableInfoAusiliarie></TableInfoAusiliarie>
        <CreaInfoAusiliarie></CreaInfoAusiliarie>
      </div>
    </div>
  );
}

export default GestioneInfoAusiliarie;
