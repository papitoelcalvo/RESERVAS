import React from 'react';
import '../css/Exa.css';

function Exa({ icono }) {
  return (
    <div className='hexagono'>
      {icono ? <img src={icono} alt="Icono" className='icono' /> : <p>No hay ícono disponible</p>}
    </div>
  );
}

export default Exa;
