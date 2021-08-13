const express = require('express');
const router = express.Router();
const {db} = require('../firebase');



router.post('/test', (req, res) => {
  try{
    const batch = db.batch();
    for(let i=1; i<=500; i++){
      // let doc = db.collection("operarios_2").doc(i.toString())
      batch.set(db.collection("operarios_3").doc(i.toString()), {edad: 48})
    }
    // batch.commit()
    // .catch(console.log(error))
  }catch(error){
    return res.send(error)
  }
  return res.end();
})


router.get('/:id', (req, res) => {
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