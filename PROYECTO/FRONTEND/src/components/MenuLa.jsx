import React, { useState } from 'react';
import '../css/MenuLa.css';
import { IoSettingsSharp } from 'react-icons/io5';
import user from '../assets/user.png';

function MenuLa({content}) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className='App2'>
      <div className="lateral">
        <div className="logo">
          <img className='perfile' src={user} alt="" />
          <p>Dary</p>
        </div>
        <div className="menu">
          <ul>
            <li><p className='op' href="#dashboard">Dashboard</p></li>
            <li>
              <p className="op" onClick={() => toggleMenu('usuarios')}>Usuarios</p>
              <ul className={`sub-menu ${openMenu === 'usuarios' ? 'show' : ''}`}>
                <li><a href="#gestion-usuarios">Gestión de Usuarios</a></li>
                <li><a href="#roles-permisos">Roles y Permisos</a></li>
              </ul>
            </li>
            <li>
              <p className="op" onClick={() => toggleMenu('clientes')}>Clientes</p>
              <ul className={`sub-menu ${openMenu === 'clientes' ? 'show' : ''}`}>
                <li><a href="#gestion-clientes">Gestión de Clientes</a></li>
                <li><a href="#detalles-cliente">Detalles del Cliente</a></li>
                <li><a href="#historial-reservas">Historial de Reservas</a></li>
              </ul>
            </li>
            <li>
              <p className="op" onClick={() => toggleMenu('reservas')}>Reservas</p>
              <ul className={`sub-menu ${openMenu === 'reservas' ? 'show' : ''}`}>
                <li><a href="#crear-reserva">Crear Reserva</a></li>
                <li><a href="#gestionar-reservas">Gestionar Reservas</a></li>
                <li><a href="#calendario-reservas">Calendario de Reservas</a></li>
              </ul>
            </li>
            <li>
              <p className="op" onClick={() => toggleMenu('pagos')}>Pagos</p>
              <ul className={`sub-menu ${openMenu === 'pagos' ? 'show' : ''}`}>
                <li><a href="#opciones-pago">Opciones de Pago</a></li>
                <li><a href="#historial-pagos">Historial de Pagos</a></li>
              </ul>
            </li>
            <li>
              <p className="op" onClick={() => toggleMenu('aeropuertos-servicios')}>Aeropuertos y Servicios</p>
              <ul className={`sub-menu ${openMenu === 'aeropuertos-servicios' ? 'show' : ''}`}>
                <li><a href="#gestion-aeropuertos">Gestión de Aeropuertos</a></li>
                <li><a href="#servicios-aeropuerto">Servicios de Aeropuerto</a></li>
              </ul>
            </li>
            <li>
              <p className="op" onClick={() => toggleMenu('servicios-adicionales')}>Servicios Adicionales</p>
              <ul className={`sub-menu ${openMenu === 'servicios-adicionales' ? 'show' : ''}`}>
                <li><a href="#estacionamiento">Estacionamiento</a></li>
                <li><a href="#salas-vip">Salas VIP</a></li>
                <li><a href="#transporte">Transporte</a></li>
                <li><a href="#alojamiento">Alojamiento</a></li>
                <li><a href="#asistencia-especial">Asistencia Especial</a></li>
                <li><a href="#comidas">Comidas</a></li>
                <li><a href="#compras-dutyfree">Compras Duty-Free</a></li>
                <li><a href="#bienestar">Bienestar</a></li>
                <li><a href="#servicios-tecnologicos">Servicios Tecnológicos</a></li>
                <li><a href="#documentacion">Documentación</a></li>
                <li><a href="#seguridad-proteccion">Seguridad y Protección</a></li>
                <li><a href="#guarderia">Guardería</a></li>
                <li><a href="#servicios-medicos">Servicios Médicos</a></li>
                <li><a href="#servicio-equipaje">Servicio de Equipaje</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="foot">
            <p>blalal</p>
        </div>
      </div>

      <div className='derecha'>
        <div className="horizontal">
          <p>Sistema de la página</p>
          <IoSettingsSharp />
        </div>
        <div className='resto'>
          {content}
        </div>
      </div>
    </div>
  );
}

export default MenuLa;
