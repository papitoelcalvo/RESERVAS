// src/app/Home.jsx
import React from 'react';
import MenuLa from '../components/MenuLa';
import Grafic from '../components/Grafic'

const Dashboard = () => {
  return (
    <div>
      <MenuLa 
      
      content={

        <div>
          <h1>DASHBOAR</h1>
          <div className='top'>

          </div>
          <div className='medium'>
            <Grafic/>
          </div>
          <div className='off'>

          </div>
        </div>

      }
      
      />
    </div>
  );
};

export default Dashboard;
