import React from 'react';
import './bestiario.css';
import Bestia from './Bestia.jsx';  // Importa el componente Bestia
import bestiario from './Bestiariodata';  // Importa los datos del bestiario correctamente

const Bestiario = () => {
  return (
    <div className="contenedor_central_bestiario">
      <div>
        <h1 className="title-bestiario">Bestiario</h1>
        <div className="bestiario-list">
          {bestiario.map(creature => (
            <Bestia 
              key={creature.id} 
              nombre={creature.nombre} 
              descripcion={creature.descripcion} 
              imagen={creature.imagen} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestiario;
