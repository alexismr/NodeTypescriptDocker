var express = require('express');
var fs = require('fs'), jsonMock
var app = express();

// Read the file and send to the callback
fs.readFile('./models/MocksHotels.json', handleFile)

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente (Hoteles)',
        response: jsonMock
    });
});

function handleFile(err, data) {
    if (err) throw err
    jsonMock = JSON.parse(data)
}


app.get('/:star/:name?', (req, res, next) => {
    var star = req.params.star;
    var name = req.params.name;

console.log(star + '' + name);

       var filldata = jsonMock;
       if(star!= 0 && star!= 'undefined')filldata = jsonMock.filter( x => x.stars == star);
       if(name && name != 'undefined'){
           filldata =  search(filldata,name )
       
       }
       
       

     if(!filldata){
        res.status(200).json({
            ok: true,
            mensaje: 'ningun registro',
            response: filldata
        });
     }
     else{
        res.status(200).json({
            ok: true,
            mensaje: 'Peticion realizada correctamente filters',
            response: filldata
        });
     }



  
});

function search(arr, s){
    var matches = [], i;
    
    for( i = arr.length; i--; ){   
            if( arr[i].hasOwnProperty("name") && arr[i]["name"].toLowerCase().indexOf(s.toLowerCase()) > -1 )
                matches.push( arr[i] );
    }

    return matches;
};



module.exports = app;