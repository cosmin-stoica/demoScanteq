import React, { useState, useEffect } from 'react';
import ItodoImage from '../../elements/itodo-img';
function Evidenza() {


  return (
<div class="cardevidenza">
  <div class="content">
    <div class="back">
      <div class="back-content">
      <ItodoImage src="images/clienti/sabelt.png"></ItodoImage>
        <strong>In Evidenza</strong>
      </div>
    </div>
    <div class="front">
      
      <div class="img">
        <div class="circleEvidenza">
        </div>
        <div class="circleEvidenza" id="rightEvidenza">
        </div>
        <div class="circleEvidenza" id="bottomEvidenza">
        </div>
      </div>

      <div class="front-content">
        <small class="badge">Alpine DZ</small>
        <p className='statobadge'>In corso</p>
        <div class="description">
          <div class="titleEvidenza">
            <p class="titleEvidenza">
              <strong>Problema Stampante</strong>
            </p>
            <svg fillRule="nonzero" height="15px" width="15px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997">
    <g transform="scale(8,8)">
      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
    </g>
  </g>
</svg>          </div>
          <p class="card-footer">
            Descrizione...Descrizione...Descrizione...Descrizione...Descrizione...Descrizione...
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Evidenza;
