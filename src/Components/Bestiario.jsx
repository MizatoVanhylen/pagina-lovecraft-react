import React, { useState } from 'react';
import './bestiario.css';
import Bestia from './Bestia.jsx';
import bestiario from './Bestiariodata';

const Bestiario = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCreatures = bestiario.filter(creature =>
    creature.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="contenedor_central_bestiario">
        <h1 className="title-bestiario">Bestiario</h1>
        <div className="contenedor_buscador">
          <input
            type="text"
            className="boton_input"
            placeholder="Buscar criatura..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="boton_buscador"
            onClick={() => setSearchTerm('')}
          >
            Buscar
          </button>
        </div>

        <div className="lista_bestiario">
          {filteredCreatures.map(creature => (
            <Bestia 
              key={creature.id} 
              nombre={creature.nombre} 
              descripcion={creature.descripcion} 
              relato={creature.relato}
              imagen={creature.imagen} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestiario;
