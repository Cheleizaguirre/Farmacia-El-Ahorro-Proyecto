const express = require('express');
const morgan = require('morgan');
const path= require('path'); //Para enlazar con el frontend
const mysql= require('mysql');
const cors = require('cors');
const myConnection= require('express-myconnection');

const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};

app.use(cors(
    config.application.cors.server
  ));

  //Rutas del Backend
const clienteRoutes = require('./Routes/cliente');
const medicinaRoutes = require('./Routes/medicina');
  
app.set('port', process.env.PORT || 3000);

//Conexion a Base de Datos
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'chele123',
    port:3306,
    database:'farmacia'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Comunicacion FrontEnd
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Rutas de FrontEnd
app.use('/api/cliente', clienteRoutes);
app.use('/api/medicina', medicinaRoutes);

// archivos estaticos frontend
app.use(express.static(path.join(__dirname,'public')));

//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});

