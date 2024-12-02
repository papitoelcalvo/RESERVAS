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
  return (
    <div className='ap'>
      <MenuLa 
      
      content={

        <div>
          <h1>DASHBOAR</h1>
          <div className='top'>
            <BruseBanner icon={<IoMdSettings />} color='#ff4a4a'/>
            <BruseBanner icon={<AiFillProduct />} color='skyblue'/>
            <BruseBanner icon={<FaBuilding />} color='pink'/>
            <BruseBanner icon={<SiBitcoincash />} color='lightgreen'/>
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
          </div>
        </div>

      }
      
      />
    </div>
  );
};

export default Dashboard;
