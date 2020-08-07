const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    uid:Number,
    name:String,

  });

var categoryModel= mongoose.model("category",categorySchema);

module.exports=categoryModel;