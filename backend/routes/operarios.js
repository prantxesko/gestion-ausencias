const express = require('express');
const router = express.Router();
const {db} = require('../firebase');


router.get('/', (req, res) => {
  res.send('Ruta operarios')
});

router.post('/:id', (req, res) =>{
  console.log('eoo')
  // try{
    const idLicencia = req.query.licencia || '';
    const idOperario = req.params.id;
    console.log(req.params.id, idLicencia)
    res.end();
  // }catch(error){
  //  return res.status(500).send
  // }

});

module.exports = router;