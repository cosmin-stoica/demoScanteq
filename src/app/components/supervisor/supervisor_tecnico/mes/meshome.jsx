import React from 'react';
import Header21 from '../../../../elements/common/header21.jsx';
import Navbar from './navbar';

function MesHome() {


  return (
    <div className='traccpane'>
          <Navbar></Navbar>
      <div className='headersss'> 
      <Header21></Header21>
      </div>
      <div id="homepanesection" className="section-full wow fadeInDown" data-wow-duration="2000ms">
      <div className='containerlogoscritta'>
      {/*<ItodoImage className="logoscanteq" src="logo.png"></ItodoImage>*/}
      <span className="sx-text-primary"><i id="iconahome" className="flaticon-employee" /></span>
      <h1>Mes</h1>
      <p>Con il Mes, sei al comando delle tue operazioni di produzione, in grado di impartire ordini alle tue postazioni con precisione e tempestività. Questo strumento ti offre la possibilità di prendere decisioni informate per ottimizzare le prestazioni del sistema, garantendo una gestione efficiente delle risorse e una maggiore produttività complessiva.</p>
      </div>
      </div>
    </div>
  );
}

export default MesHome;
