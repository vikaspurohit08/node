var express = require("express");
var mysql = require("express");


var app = express();

app.get("/", function(request,response){
    response.send(JSON.stringify("Hello and Welcome"));
})

app.post("/",function(request,response){
   response.send(JSON.stringify("Add DAta")); 
});