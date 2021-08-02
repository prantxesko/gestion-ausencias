

const express = require('express');
const firebase = require('firebase');
const firestore = firebase.firestore();
//const axios = require('axios');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.post('/licencia', (req, res)=>{
  console.log(req.body)
  res.end();
})

app.post('')


app.listen(process.env.PORT || 8080, ()=>{
  console.log(`App iniciada en puerto ${process.env.PORT || 8080}`)
});