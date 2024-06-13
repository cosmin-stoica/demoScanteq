import React, { useState } from 'react';
import CommessaDue from './commessadue.jsx';
import CommessaUno from './commessauno.jsx';

function CreaCommessa() {
  const [isDivAperto, setDivAperto] = useState(false);
  const [isDivAperto2, setDivAperto2] = useState(false);

  const apriChiudiDiv = () => {
    setDivAperto(!isDivAperto);
  };


  const apriChiudiDiv2 = () => {
    setDivAperto2(!isDivAperto2);
  };


  return (
    <div className='paneprincipalecreacommessa'>
      <div className='creacommessadiv'>
        <div className='creadiv'>
          <div onClick={apriChiudiDiv} className='boxcommessa'>
            <h2 >Crea Commessa</h2>
          </div>
          {isDivAperto && (
            <div className='divAperto'>
              <span onClick={apriChiudiDiv} className='chiudiDiv'>
                &times;
              </span>
              <CommessaUno></CommessaUno>
            </div>
          )}
          <div onClick={apriChiudiDiv2} className='boxcommessa'>
            <h2>Crea Commessa Guidata</h2>
          </div>
          {isDivAperto2 && (
            <div className='divAperto'>
              <span onClick={apriChiudiDiv2} className='chiudiDiv'>
                &times;
              </span>
              <CommessaDue></CommessaDue>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreaCommessa;
