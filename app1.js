var express = require('express');
var bodyParser =require('body-parser'); 

var app =express();

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
 
    res.send("Hai...");
    
   });
    
   app.post('/gallery', (req, res) => {

    var name =req.body.getname;
    var roll =req.body.getroll;

    res.send("hello "+ name + "  Roll no :" +roll);
   });
   
   
    
   app.listen(3000, () => { 
    console.log("server started");
   });