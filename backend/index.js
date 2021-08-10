


// Inicio aplicación

const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');


app.use(cors());
app.use(multer().fields([]));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Inicio rutas

const licenciasRouter = require('./routes/licencias');
const operariosRouter = require('./routes/operarios');

app.use('/licencias', licenciasRouter)
app.use('/operarios', operariosRouter);



  //Para testeo
  app.get('/', (req, res) => {
    res.status(404).send('Ruta no disponible')
  })




app.post('/test', async (req, res) => {
  //console.log(req)
  res.end();
})







app.listen(process.env.PORT || 8080, ()=>{
  console.log(`App iniciada en puerto ${process.env.PORT || 8080}`)
});