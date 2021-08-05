const express = require('express');
const app = express()
 
const hbs = require('hbs');
require('./hds/helpers')

//Heroku
//configurar el puerto
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/Public' )) //__dirname devolverme al directorio actual

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials'); //Hacer las partes
app.set('view engine', 'hbs'); //HBS


app.get('/', (req, res) => {
     /*let salida ={
      nombre: 'juan',
      edad: 23,
      url: req.url
  }
  res.send(salida);*/
  res.render('home',{
      nombre:'WILLIAM MONGE'
      //anio: new Date().getFullYear()
  });
});
/*app.get('/data',function(req,res){
    res.send('Hola Mundo')
});*/

app.get('/about', (req, res) => {
 res.render('about');
});
 
app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});