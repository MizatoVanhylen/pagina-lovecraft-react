import React from 'react';
import './bestia.css';  // Estilos específicos para este componente

const Bestia = ({ nombre, descripcion, imagen }) => {
  return (
    <div className="bestia-card">
      <img className="bestia-imagen" src={imagen} alt={nombre} />
      <h2 className="bestia-nombre">{nombre}</h2>
      <p className="bestia-descripcion">{descripcion}</p>
    </div>
  );
};

export default Bestia;
