import React from 'react';
import Header21 from '../../sections/common/header21';
import CreaCommessa from './creacommessa';
import Navbar from './navbar';
import TableCommesse from './tablecommesse';

function GestioneCommesse() {


  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className="section-full wow fadeInDown" data-wow-duration="600ms">
        <CreaCommessa></CreaCommessa>
        <TableCommesse></TableCommesse>
      </div>
    </div>
  );
}

export default GestioneCommesse;
