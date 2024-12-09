import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/Service.css';

const Service = () => {
  const Tonos = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const [inputTone, setInputTone] = useState('');
  const [tonesMajor, setTonesMajor] = useState([]);
  const [tonesMinor, setTonesMinor] = useState([]);

  const handleInputChange = (e) => {
    const tone = e.target.value;
    setInputTone(tone);

    const index = Tonos.indexOf(tone);
    if (index !== -1) {
      const newTonesMajor = [];
      const newTonesMinor = [];
      // Secuencia de pasos para la escala mayor: +0, +2, +2, +1, +2, +2, +2
      const stepsMajor = [2, 2, 1, 2, 2, 2, 2];
      let currentIndexMajor = index;
      for (let i = 0; i < stepsMajor.length; i++) {
        newTonesMajor.push(Tonos[currentIndexMajor]);
        currentIndexMajor = (currentIndexMajor + stepsMajor[i]) % Tonos.length;
      }
      // Secuencia de pasos para la escala menor: +0, +2, +2, +1, +2, +2, +2 (edit this as needed)
      const stepsMinor = [2, 1, 2, 2, 1, 2, 2];
      let currentIndexMinor = index;
      for (let i = 0; i < stepsMinor.length; i++) {
        newTonesMinor.push(Tonos[currentIndexMinor]);
        currentIndexMinor = (currentIndexMinor + stepsMinor[i]) % Tonos.length;
      }
      setTonesMajor(newTonesMajor);
      setTonesMinor(newTonesMinor);
    } else {
      setTonesMajor(['Tono no encontrado']);
      setTonesMinor(['Tono no encontrado']);
    }
  };

  return (
    <div className='cal'>
      <Navbar/>
      <div className='calcula'>
        <h1 className='to'>Calcular escalas</h1>
        <input type="text" value={inputTone} onChange={handleInputChange} />
      </div>
      <div className='calcula'>
        <h1 className='ti'>Escala mayor</h1>
        {tonesMajor.map((tone, index) => (
          <label key={index}>
            {`Tono ${index + 1}: ${tone}`}
          </label>
        ))}
      </div>
      <div className='calcula'>
        <h1 className='ti'>Escala menor</h1>
        {tonesMinor.map((tone, index) => (
          <label key={index} className='lab'>
            {`Tono ${index + 1}: ${tone}`}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Service;
