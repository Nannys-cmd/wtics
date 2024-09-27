// src/sections/MonitoringSystems.jsx
// import React from 'react';
import './MonitoringSystems.css';
import Monitoring1 from '../assets/monitoring1.jpg'; // Asegúrate de que la ruta sea correcta

function MonitoringSystems() {
  return (
    <section id="monitoring-systems" className="monitoring-systems">
      <h2>Instalación de Sistemas de Monitoreo</h2>
      <div className="monitoring-images">
        <img src={Monitoring1} alt="Sistema de Monitoreo 1" />
        {/* Agrega más imágenes según sea necesario */}
      </div>
    </section>
  );
}

export default MonitoringSystems;

