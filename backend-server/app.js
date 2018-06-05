// Requires
var express = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// cros
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-ControL-Allow-Methods", "POST ,GET , PUT , DELETE , OPTIONS")
    next();
  });


// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Import routes
var appRoutes = require('./routes/app');
var hotelsRoutes = require('./routes/hotels');


// Conexión a la base de datos
// mongoose.connection.openUri('mongodb://localhost:27017/hotelesDB', (err, res) => {
//     if (err) throw err;
//     console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

// });

// Server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'))
// app.use('/uploads', serveIndex(__dirname + '/uploads'));

// Rutes
app.use('/hotel', hotelsRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(5000, () => {
    console.log('Express server puerto 5000: \x1b[32m%s\x1b[0m', 'online');
});