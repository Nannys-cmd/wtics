import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo WTICS" className="logo" />
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#clients">Clientes</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
