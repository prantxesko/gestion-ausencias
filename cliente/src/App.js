import React from 'react';
import './App.css'
import '../node_modules/materialize-css/dist/css/materialize.css';
import M from 'materialize-css'
import { Modal, Button } from 'react-materialize';
import Licencias from './components/Licencias/Licencias';

function App() {
 
  return (
    <div className="App container">
     
  
      <Licencias/>
    </div>
  );
}

export default App;
