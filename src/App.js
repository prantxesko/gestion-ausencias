import React from 'react';
import './App.css';
import {firebase, firestore} from './firebase'

function App() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const getData = async () =>{
      const query = await firestore.collection('011').get();
      query.forEach(item => console.log(item.id, item.data()));
    }
    getData();
  });
  return (
    <div className="App">
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
