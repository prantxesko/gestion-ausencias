
//Inicio firebase y base de datos

const firebase = require('firebase');
require('firebase/firestore');
const {firebaseConfig} = require('../firebase.js');

//console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Inicio aplicación

const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');



app.use(cors());
app.use(multer().fields([]));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.post('/licencias', async (req, res) => {
  console.log(req.body)
  try{
    await db.collection('licencias').doc().set(req.body);
  }catch(error){
    console.log(error);
  }
  res.end();
})

app.post('/test', async (req, res) => {
  //console.log(req)
  res.end();
})

app.get('/licencias', async (req, res) => {
  const query = db.collection('licencias');
  const result = [];
  try {
    await query.get().then(querySnapshot => {
      for (let doc of querySnapshot.docs) {
        //console.log(`Found document at ${JSON.stringify(doc.data())}`);
        result.push({id:doc.id, ...doc.data()});
      };
    })
    res.send(result);
  }catch(error){
    res.status(500).send(error);
  }
 
});

app.delete('/licencias', async (req, res) => {
  try{
    await db.collection('licencias').doc(req.query.id).set({eliminada: true}, {merge: true})
    res.send(req.query.id);
  }catch(error){
    console.log('error')
    res.status(500).send(error);
  }
})


app.listen(process.env.PORT || 8080, ()=>{
  console.log(`App iniciada en puerto ${process.env.PORT || 8080}`)
});