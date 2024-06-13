import React from 'react';
import Header21 from '../../../../elements/common/header21.jsx';
import CreaPrn from './creaprn';
import Navbar from './navbar';
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
