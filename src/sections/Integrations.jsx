// src/sections/Integrations.jsx
// import React from 'react';
import './Integrations.css';
import Integration1 from '../assets/pampa.jpeg'; // Asegúrate de que la ruta sea correcta
import Integration2 from '../assets/motomel.jpeg'; // Asegúrate de que la ruta sea correcta
import Integration3 from '../assets/farmacity.jpeg'; // Asegúrate de que la ruta sea correcta

function Integrations() {
  return (
    <section id="integrations" className="integrations">
      <h2>Integraciones</h2>
      <div className="integrations-logos">
        <img src={Integration1} alt="Integración 1" />
        <img src={Integration2} alt="Integración 2" />
        <img src={Integration3} alt="Integración 2" />
        {/* Agrega más imágenes según sea necesario */}
      </div>
    </section>
  );
}

export default Integrations;

