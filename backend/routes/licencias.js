const express = require('express');
const router = express.Router();
const {db} = require('../firebase');



router.post('/', async (req, res) => {
  try{
    const doc = {...req.body, activa: true}
    const docRef = await db.collection('licencias').add(doc);
    return res.send(docRef.id);

  }catch(error){
    return res.status(500).send(error);
  }
})

router.get('/', async (req, res) => {
  try {
    const query = db.collection('licencias');
    const result = [];
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
})

router.put('/', async (req, res) => {
  try{
    const {id, activa} = req.query;
    if(!id || !activa || (activa !== 'true' && activa !== 'false')){
      return res.status(400).send('Petición incorrecta');
    }
    const docRef = await db.collection('licencias').doc(id);
    const doc = await docRef.get();
    if(!doc.exists){
      return res.status(404).send('No se ha encontrado el documento');
    }

    await docRef.set({activa: activa === 'true'}, {merge: true})
    
    docRef.get().then(doc => res.send(doc.data()));
  }catch(error){
    console.log('error', error)
    return res.staus(500).send(error);
  }
})

  module.exports = router