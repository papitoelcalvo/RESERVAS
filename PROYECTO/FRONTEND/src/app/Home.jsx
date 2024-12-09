import React from 'react';
import Navbar from '../components/Navbar';
import CarouselComponent from '../components/CarouselComponent';
import '../css/Home.css';
import Exa from '../components/Exa';
import { FaClipboardCheck,FaChartPie,FaFingerprint } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='en-carru'>
        <div className='ler'>
          <p></p>
          <h1 className='tit'>Reserva tu vaina ahora porque camaron que se duerme se lo mete otro camaron</h1>
          <p className='parr'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore quod harum obcaecati placeat aspernatur fugiat, debitis provident adipisci explicabo corrupti, vel minima magni, excepturi deserunt. Ex cum eos at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod culpa id cupiditate omnis eligendi fugit? Dolorem quasi nobis eos blanditiis esse totam quae. Molestias, maxime nulla magni ratione quis doloremque?</p>
          <button className='lear'>READ MORE</button>
        </div>
      </div>
      <CarouselComponent/>
      <div className='re'>
        <div className='exas'>
          <Exa icono={<FaClipboardCheck/>} ser='Service 1' defin='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore quod harum obcaecLorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore quod harum obcaec'/>
          <Exa icono={<FaChartPie/>} ser='Service 2' defin='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore quod harum obcaecLorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore quod harum obcaec'/>
          <Exa icono={<FaFingerprint/>} ser='Service 3' defin='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore quod harum obcaecLorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore quod harum obcaec'/>
        </div>
        <div className='spr'></div>
      </div>
    </div>
  );
};

export default Home;
