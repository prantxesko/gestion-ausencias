

// En producción hay que definir las variables de entorno USERNAME Y PASSWORD

// const axios = require('axios');
import axios from 'axios'

import dotenv from 'dotenv';
dotenv.config();
  
const token = '6xmknUyPc3Ip4hxBDoyVsH8ZHcieLtv-bM3E1qrKMJ_-0AJgelCDq9YvmWRjK8SQicBlMsR9hWvYa8AsjLzsqP4VXkRarikYOtsMvi04ekcC31TVRI7g_zrAFnIKKLSIpFCc3xZKfdH2A89q2qGWPax9CGqwv6vmpviMV084WI66RpelK-DbyPtZ61ncz6E_t2wV12yLhdf1hF5k2gBvPA'


const credentials =  `username=${process.env.API_USER}&password=${process.env.API_PASSWORD}&grant_type=password`;
const urlBaseInt = process.env.API_URL_INT;
const urlBaseExt = process.env.API_URL_EXT;

async function appInit(){
  try{
    const data = await postAPI(['http://192.168.24.204:8083/ObtenerToken'], {credentials});
    console.log(data)
  }catch(error){
    throw new Error(error.message)
  }
}

const retardo = await appInit()


// Recibe array de urls a testear
export function postAPI(urlArray, options){
  //console.log(arguments)
  return new Promise((resolve, reject) =>{
    const reqOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': options.authorization ? `Bearer ${options.authorization.access_token}` : ''
    },
    data: options.credentials || {}
    };
    const errorsArray = new Array(options.urlArray).map(item => item = null); 
      urlArray.forEach((url, idx) =>{
        axios({...reqOptions, url})
        .then(response => resolve(response.data))
        .catch(error => {
          errorsArray[idx] = error.message;
          if(!errorsArray.includes(null)){
            reject(errorsArray)
            console.log(errorsArray)
          }
        })
      });
  });
}
 // targetUrl: 'http://192.168.24.204:8083/ObtenerToken',
// targetUrl: 'https://api.her-jai.com/ObtenerToken',



class ExpertisApp{
  constructor(){
   
  
  }
  // Inicia aplicación y obtiene token;
  async init(urlArray, credentials){
    try{
      const data = await postAPI(urlArray.map(url => url = `${url}ObtenerToken`), {credentials});
      this.authorization = data;
    }catch(error){
      throw new Error(error.message)
    }
  }
}


// new ExpertisApp().init(['http://192.168.24.203:8083/', 'https://api.her-jai.com/'], credentials)
// .then(data => console.log ('EXITO'))
// .catch(error =>console.log ('FRACASO'))

//module.exports = {ExpertisApp, postAPI};

