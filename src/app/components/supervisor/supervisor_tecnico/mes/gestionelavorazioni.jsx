import React from 'react';
import Header21 from '../../../../elements/common/header21.jsx';
import Navbar from './navbar';
import TableLavorazioni from './tablelavorazioni';

function GestioneLavorazioni() {


  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className="section-full wow fadeInDown" data-wow-duration="600ms">
        <TableLavorazioni></TableLavorazioni>
      </div>
    </div>
  );
}

export default GestioneLavorazioni;
