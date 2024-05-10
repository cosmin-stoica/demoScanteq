import React from 'react';
import Header21 from '../../sections/common/header21';
import Navbar from './navbar';

function PickHome() {


  return (
    <div className='traccpane'>
      <div className='headersss'> 
      <Navbar></Navbar>
      <Header21></Header21>
      </div>
      <div id="homepanesection" className="section-full wow fadeInDown" data-wow-duration="2000ms">
      <div className='containerlogoscritta'>
      {/*<ItodoImage className="logoscanteq" src="logo.png"></ItodoImage>*/}
      <span className="sx-text-primary"><i id="iconahome" className="flaticon-physics" /></span>
      <h1>Pick To Image</h1>

      <p>Pick 2 Image è un sistema integrato avanzato con display incorporato, progettato per la visualizzazione e trasmissione dati, nonché la gestione remota. Le sue caratteristiche tecniche consentono un'interfaccia flessibile per diverse applicazioni, garantendo affidabilità nelle operazioni di visualizzazione e trasmissione dati. Il controllo remoto amplia ulteriormente le sue funzionalità, offrendo una soluzione versatile per le specifiche sfide del vostro contesto operativo.</p>
      </div>
      {/*<div className='tracc'>
        <h1>Tracciabilità</h1>
  </div>*/}
  </div>
    </div>
  );
}

export default PickHome;
