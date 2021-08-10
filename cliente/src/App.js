import React, {useEffect} from 'react';
import './App.css'
import '../node_modules/materialize-css/dist/css/materialize.css';
import M from 'materialize-css'
import Licencias from './components/Licencias/Licencias';

function App() {
 
  return (
    <div className="App container">
        <Licencias style = {{zIndex: '-10000'}}/>
    </div>
  );
}

export default App;


