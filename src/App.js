import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Biografia from './Components/Biografia';
import Bestiario from './Components/Bestiario';

function App() {
  return (
    <div className="App">
      <Banner />
      <Biografia />
    </div>
  );
}

export default App;
