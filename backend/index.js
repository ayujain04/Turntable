const express = require("express"); 
const app = express(); 

app.get('/', function(req,res)
{
    return res.json({
        message: "Hello there :)", 
        success:true
    })
});

app.post('/', function(req,res){
    return res.json({
        message: "Welcome :>", 
        success: true
    })
});

app.listen(3000, ()=>
console.log(`Example app listening on port 30001`), 
);

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://turntable-6bf59-default-rtdb.firebaseio.com"
});
