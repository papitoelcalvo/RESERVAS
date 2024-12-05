import React from 'react';
import logo from '../assets/logo.jpg'
import '../css/Navbar.css'
import CarouselComponent from './CarouselComponent';

function Navbar() {

  return (
    <div className='bo'>
        <div className='nab'>
            <img src={logo} alt="" className='logoo' />
        </div>
    </div>
  );
}

export default Navbar;
