// src/sections/Clients.jsx
// import React from 'react';
import './Clients.css';
import Cala from '../assets/Cala.jpeg';
import GC from '../assets/GC.jpeg';
import Gnyes from '../assets/Gnyes.jpeg';
// import otrosLogos from '../assets/otrosLogos.jpeg';


function Clients() {
  return (
    <section id="clients" className="clients">
      <h2>Nuestros Clientes</h2>
      <div className="clients-logos">
        <img src={Cala} alt="Grupo Cala S.A" />
        <img src={GC} alt="GC Soluciones S.A" />
        <img src={Gnyes} alt="GNYES S.A" />
        {/* Agrega más logos según sea necesario */}
      </div>
    </section>
  );
}

export default Clients;
