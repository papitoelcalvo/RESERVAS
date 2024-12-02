// src/app/Home.jsx
import React from 'react';
import '../css/OtherGrafic.css';
import Circle from './Circle';


const OtherGrafic = () => {
  return (
    <div className='con'>
      <h1>Bienvenido a la Página Principal</h1>
      <p>¡Has iniciado sesión con éxito!</p>
        <Circle/>
    </div>
  );
};

export default OtherGrafic;
