import React from 'react';
import './bestia.css';

const Bestia = ({ nombre,relato, descripcion, imagen }) => {
  return (
    <div className="bestia_card">
      <h2 className="bestia_nombre">{nombre}</h2>
      <img className="bestia_imagen" src={imagen} alt={nombre} />
      <p className='bestio_relato'>{relato}</p>
      <p className="bestia_descripcion">{descripcion}</p>
    </div>
  );
};

export default Bestia;
