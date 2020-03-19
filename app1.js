var express = require('express');
var app =express();

app.get('/', (req, res) => {
 
    res.send("Hai...");
    
   });
    
   app.get('/gallery', (req, res) => {
    res.send("My Gallery Page");
   });
   
   
    
   app.listen(3000, () => {
    console.log("server started");
   });