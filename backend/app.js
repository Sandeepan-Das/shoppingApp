const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
const body_parser = require('body-parser');

var port=process.env.PORT || 8080;
var app=express();



//ROUTING
const route = require("./Route/route");

//MIDDLEWARES
app.use(cors());
app.use(body_parser.json());
app.use("/api",route);

// app.get("*",(req,res)=>{
//     res.send(path.join(__dirname,"Public/e-cart/index.html"))
// })
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('Public/index.html', { root: __dirname });
  });
//MONGODB CONNECTION
mongoose.connect("mongodb+srv://sandeepan:34585@shoppingapp-mvpt2.mongodb.net/shop?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected! to db");
});





app.listen(port,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("server started");
    }
})