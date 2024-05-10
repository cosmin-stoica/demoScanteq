import React from 'react';
import Header21 from '../../sections/common/header21';
import HeaderSoloTicket from '../../sections/common/headersoloticket';

function AreaPersonale() {


  return (
    <div className='traccpane'>
      <div className='headersss'> 
      <HeaderSoloTicket></HeaderSoloTicket>
      </div>
      <div id="homepanesection" className="section-full wow fadeInDown" data-wow-duration="2000ms">
      <div className='containerlogoscritta'>
      {/*<ItodoImage className="logoscanteq" src="logo.png"></ItodoImage>*/}
      <span className="sx-text-primary"><i id="iconahome" className="flaticon-employee" /></span>
      <h1>Area Personale</h1>
      </div>
      </div>
    </div>
  );
}

export default AreaPersonale;
