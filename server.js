var http = require('http');
var express = require('express');

/********************************
 * Configuration section
 ********************************/

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

/********************************
 * Web Server functionality
 ********************************/

app.get('/', function(req, res){
    console.log("Req on root page");
    res.send("Hello World");
});


app.get('/about', function(req, res){
    res.send("I'm Gareth Butler");
})


app.listen(8080, function(){
    console.log("Server running at localhost:8080");
});

// Allow CORS policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
});


/********************************
 * API functionality
 ********************************/

 var catalog = [];

 app.get('/API/catalog', function(req, res){
     res.json(catalog);
    });

     app.post('/api/items', function(req, res){
         console.log('Admin wants to save an item');

         var item =req.body;
         console.log(item);

         item.id = catalog.length + 1;
         catalog.push(item);

         res.json(item);

     });
