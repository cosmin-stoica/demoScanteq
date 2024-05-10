import React from 'react';
import Header21 from '../../sections/common/header21';
import CreaCommessa from './creacommessa';
import CreaPrn from './creaprn';
import Navbar from './navbar';
import SliderLavorazioni from './sliderlavorazioni';
import TableComponenti from './tablecomponenti';

function GestioneComponenti() {


  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className="section-full wow fadeInDown" data-wow-duration="600ms">
        <TableComponenti></TableComponenti>
        <CreaPrn></CreaPrn>
      </div>
    </div>
  );
}

export default GestioneComponenti;
