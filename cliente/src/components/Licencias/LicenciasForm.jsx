import React, {useState} from 'react';
import { createLicencia  } from '../helpers';
import {Button, Row, Col} from 'react-materialize'

export default function LicenciasForm(props){
  const inputsObject = {
    descrip : '',
    inicio : '',
    fin : ''
  }

  const [inputs, setInputs] = useState(inputsObject);

  const handleInputs = e =>{
    const newInputs = {...inputs};
    newInputs[e.target.name] = e.target.value;
    setInputs(newInputs);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    createLicencia(new FormData(e.target));
    setInputs(inputsObject);
    props.onSubmit();
  }
  return(
    
      <form onSubmit= {handleSubmit} encType="multipart/form-data">
        <Row>
        <Col s={6}>
          <input type="text" name = "descrip" placeholder  = "Descripción" required value ={inputs.descrip} onChange = {handleInputs}/>
          <input type="date" name = "inicio" value ={inputs.inicio} required onChange = {handleInputs}/>
          <input type="date" name = "fin" value ={inputs.fin} required onChange = {handleInputs}/>
          <Button type="submit"  >Crear Licencia</Button>
          </Col>
        </Row>
      </form>
  )
}