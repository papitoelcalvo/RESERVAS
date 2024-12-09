// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.jpg';
import '../css/Navbar.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <div className='bo'>
      <div className='nab'>
        <img src={logo} alt="" className='logoo' />
        <div className='opt'>
          <ul className='list'>
            <li className='li'><NavLink to='/home' exact activeClassName='active'>HOME</NavLink></li>
            <li className='li'><NavLink to='/service' activeClassName='active'>SERVICE</NavLink></li>
            <li className='li'><NavLink to='/places' activeClassName='active'>PLACES</NavLink></li>
            <li className='li'><NavLink to='/promotion' activeClassName='active'>PROMOTION</NavLink></li>
            <li className='li'><NavLink to='/about' activeClassName='active'>ABOUT</NavLink></li>
          </ul>
        </div>
        <div className='lo'>
          <div className='ic'>
            <FaSquareInstagram className='insta' />
            <IoLogoWhatsapp className='whatsapp' />
          </div>
          <p>sign in</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
