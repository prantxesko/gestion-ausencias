import axios from 'axios';

const urlBase = 'http://localhost:8080/'; //Para modificar en producción;




export const getLicencias = async ()=>{
  console.log('Obteniendo licencias')
  try{
    const response = await axios({
      method: "get",
      url: `${urlBase}licencias`,
      });
    // console.log('Response' ,response.data)
    return response.data;
  }catch(error){
    throw new Error(error);  
  }
}

export const createLicencia = async data =>{
  try{
    await axios({
      method: "post",
      url: `${urlBase}licencias`,
      data: data
    })
  }catch(error){
    throw new Error(error);  
  }
  
}

export const setEstadoLicencia = async (id, activa = 'true') => {
  try{
    await axios({
      method: "put",
      url: `${urlBase}licencias?id=${id}&activa=${activa}`,
    })
  }catch(error){
    throw new Error(error);    
  } 
}





