// src/sections/Equipament.jsx
// import React from 'react';
import './Equipament.css';
import Equipament1 from '../assets/dahua.jpg'; // Asegúrate de que la ruta sea correcta
import Equipament2 from '../assets/HKVision.jpg'; // Asegúrate de que la ruta sea correcta
import Equipament3 from '../assets/wisenet.jpg'; // Asegúrate de que la ruta sea correcta

function Equipament() {
  return (
    <section id="equipament" className="equipament">
      <h2>Equipamientos con los que trabajamos</h2>
      <div className="equipament-logos">
        <img src={Equipament1} alt="Dahua Technology" />
        <img src={Equipament2} alt="HKVision" />
        <img src={Equipament3} alt="Wisenet" />
        {/* Agrega más imágenes según sea necesario */}
      </div>
    </section>
  );
}

export default Equipament;
