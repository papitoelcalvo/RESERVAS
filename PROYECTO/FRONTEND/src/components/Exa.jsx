import React from 'react';
import '../css/Exa.css';

function Exa({ icono , defin, ser}) {
  return (
    <div className='ex'>
      <div className='hexagono'>
        {icono}
      </div>
      <h2 className='tt'>{ser}</h2>
      <p className='def'>{defin}</p>
    </div>
  );
}

export default Exa;
