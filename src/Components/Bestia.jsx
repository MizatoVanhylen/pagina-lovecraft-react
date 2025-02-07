import React from 'react';
import './bestia.css';

const Bestia = ({ nombre,relato, descripcion, imagen }) => {
  const url = `/assets/img/${imagen}` 
  return (
    <div className="bestia_card">
      <h2 className="bestia_nombre">{nombre}</h2>
      <img className="bestia_imagen" src={url} alt={nombre} />
      <p className='bestio_relato'>{relato}</p>
      <p className="bestia_descripcion">{descripcion}</p>
    </div>
  );
};

export default Bestia;
