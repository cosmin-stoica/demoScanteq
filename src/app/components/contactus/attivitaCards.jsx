import React, { useState, useEffect } from 'react';
import ItodoImage from '../../elements/itodo-img.jsx';
import ManagerAttivita from './managerattivita.jsx';

function AttivitaCards({pagina, aumPagina, updateAzienda}) {

  const [choice,setChoice] = useState('Sabelt');

  const setChoiceAumenta = (choicedascegliere) => {

    setChoice(choicedascegliere);
    aumPagina();
    updateAzienda(choicedascegliere); 
    console.log(pagina);
  }


  return (
    <div className='attivitaCards'>

        <div className='cardsFlexer'>
          <div onClick={() => setChoiceAumenta('Sabelt')} class="cardAttivita">
            <div class="card-border-top">
            </div>
            <div class="imgAttivita">
              <ItodoImage src="images/clienti/sabelt.png"></ItodoImage>
            </div>
            <span> Sabelt</span>
            <button> Click
            </button>
          </div>

          <div onClick={() => setChoiceAumenta('Lamborghini')} class="cardAttivita">
            <div class="card-border-top">
            </div>
            <div class="imgAttivita">
              <ItodoImage src="images/clienti/lamborghini.png"></ItodoImage>
            </div>
            <span> Lamborghini</span>
            <button> Click
            </button>
          </div>


          <div onClick={() => setChoiceAumenta('Proma')} class="cardAttivita">
            <div class="card-border-top">
            </div>
            <div class="imgAttivita">
              <ItodoImage src="images/clienti/proma.png"></ItodoImage>
            </div>
            <span> Proma Grugliasco</span>
            <button> Click
            </button>
          </div>


          <div onClick={() => setChoiceAumenta('Aras')} class="cardAttivita">
            <div class="card-border-top">
            </div>
            <div class="imgAttivita">
              <ItodoImage src="images/clienti/aras.png"></ItodoImage>
            </div>
            <span> Aras</span>
            <button> Click
            </button>
          </div>


          <div onClick={() => setChoiceAumenta('Altro')} class="cardAttivita">
            <div class="card-border-top">
            </div>
            <div class="imgAttivita">
              <ItodoImage src="images/clienti/altro.png"></ItodoImage>
            </div>
            <span> Altro</span>
            <button> Click
            </button>
          </div>

          <div onClick={() => setChoiceAumenta('Tutti')} class="cardAttivita">
          <div class="card-border-top">
            </div>
            <div class="imgAttivita">
              <ItodoImage src="images/clienti/tutti.png"></ItodoImage>
            </div>
            <span> Tutti</span>
            <button> Click
            </button>
          </div>


        </div>

      </div>

  );
}

export default AttivitaCards;

