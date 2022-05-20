const express = require('express');
const models = require('./src/models').default;
const Vehicles = models.Vehicles;
const app = express();
var bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send('Hello, please go to /vehicles !')
})

app.get('/vehicles', jsonParser, async function(req ,res){
  
  Vehicles.findAll()
    .then( 
        vehicles => {res.send({count: vehicles.length, vehicles})}
    )
    .catch(error => {console.log(error)})
});

const port = 5000;
app.listen(port, () => {
  console.log('App is now running at port ', port)
})