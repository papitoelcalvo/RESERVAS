// src/app/Home.jsx
import React from 'react';
import MenuLa from '../components/MenuLa';
import Grafic from '../components/Grafic'
import GraLine from '../components/GraLine'
import BruseBanner from '../components/BruseBanner';
import OtherGrafic from '../components/OtherGrafic';
import '../css/Dashboard.css'
import { IoMdSettings } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { SiBitcoincash } from "react-icons/si";
import { FaBuilding } from "react-icons/fa6";

const Dashboard = () => {
  const data = [
    { nombre: 'Juan', edad: 25, ciudad: 'Madrid' },
    { nombre: 'María', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'Carlos', edad: 28, ciudad: 'Valencia' },
    { nombre: 'Carlos', edad: 28, ciudad: 'Valencia' },
    { nombre: 'Carlos', edad: 28, ciudad: 'Valencia' },
  ];

  return (
    <div className='ap'>
      <MenuLa 
      
      content={

        <div>
          <h1>DASHBOAR</h1>
          <div className='top'>
            <BruseBanner icon={<IoMdSettings />} color='#ffffff'/>
            <BruseBanner icon={<AiFillProduct />} color='#ffffff'/>
            <BruseBanner icon={<FaBuilding />} color='#ffffff'/>
            <BruseBanner icon={<SiBitcoincash />} color='#ffffff'/>
          </div>
          <div className='medium'>
            <Grafic/>
            <div className='medium-leff'>
              <GraLine/>
              <OtherGrafic/>
            </div>
          </div>
          <div className='off'>
            <div className="off-leff">
              
            </div>
            <div className="table-container">

    <table className="simple-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Ciudad</th>
          <th>Ciudad</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.nombre}</td>
            <td>{row.edad}</td>
            <td>{row.ciudad}</td>
            <td>{row.ciudad}</td>
            <td>{row.ciudad}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
          </div>
        </div>

      }
      
      />
    </div>
  );
};

export default Dashboard;
