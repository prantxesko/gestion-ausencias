import React, {useState, useEffect} from 'react';
import axios from 'axios';

const urlBase = 'http://localhost:8080/'; //Para modificar en producción;

export default function Licencias() {
 
  const [licencias, setLicencias] = useState([]);

  const getLicencias = async ()=>{
    console.log('Obteniendo licencias')
    return [
      {
        id: 1,  
        descrip: 'HORAS 2020'
      },
      {
        id: 2,  
        descrip: 'HORAS 2021'
      },
      {
        id: 3,  
        descrip: 'VACACIONES 2020'
      },
    ];
    try{
      const response = await axios({
        method: "get",
        url: `${urlBase}licencias`,
        });
      // console.log('Response' ,response.data)
      return response.data;
    }catch(error){
      console.log(error);
    }
  }

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
      <LicenciasLista licencias = {licencias} />
    </div>
   
  )
}


function LicenciasForm(props){
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
    const data = new FormData(e.target);
    await axios({
      method: "post",
      url: `${urlBase}licencias`,
      data: data
    })
    .catch(error => console.log('Error fatal', error));
    //console.log(inputsObject);
    setInputs(inputsObject);
    props.onSubmit();
  }
  return(
    <form onSubmit= {handleSubmit} encType="multipart/form-data">
        <input type="text" name = "descrip" placeholder  = "Descripción" required value ={inputs.descrip} onChange = {handleInputs}/>
        <input type="date" name = "inicio" value ={inputs.inicio} required onChange = {handleInputs}/>
        <input type="date" name = "fin" value ={inputs.fin} required onChange = {handleInputs}/>
        <button type="submit"  >Crear Licencia</button>
    </form>
  )
}


function LicenciasLista(props){
  const {licencias} = props;
  
  const handleDelete = async e => {
    //console.log(e.target.id)
    await axios({
      method: "delete",
      url: `${urlBase}licencias?id=${e.target.id}`,
    })
    // .then(props.onChange())
    .catch(error => console.log('Error fatal', error));
   
  }
  return(
    <div>
        <h5>Lista de licencias vigentes</h5>
  
          {licencias.map(licencia =>(
            <div key = {licencia.id}>
              {licencia.descrip}{(licencia.eliminada ? ' (Eliminada)': '' ) + '\u00A0\u00A0'}
              <button id= {licencia.id} onClick = {handleDelete}>Eliminar</button>
            </div>
            ) 
          )}
    
    </div>
  )
}

