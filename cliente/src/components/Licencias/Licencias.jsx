import React, {useState, useEffect} from 'react';
import LicenciasForm from './LicenciasForm';
import LicenciasLista from './LicenciasLista';
import {getLicencias} from '../helpers';


export default function Licencias() {
 
  const [licencias, setLicencias] = useState([]);



  useEffect(()=>{
 
    getLicencias()
    .then(data => {
      // console.log('Data', data)
      setLicencias(data)
    })
    .catch(error => console.log(error));
  }, [])

 


  
  return (
    <div>
      <LicenciasForm 
        onSubmit = {
          ()=> getLicencias()
          .then(data => setLicencias(data))
        }
      />
      <LicenciasLista licencias = {licencias}
      onChange = {
        ()=> getLicencias()
        .then(data => setLicencias(data))
      }
       />
    </div>
   
  )
}






