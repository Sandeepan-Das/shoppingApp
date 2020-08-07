const mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    category: String,
    itemid:Number,
    name:String,
    price:String,
    displayprice:String,
    photopath:String,
    
    // author:{type: mongoose.Schema.Types.ObjectId , ref:"user"}
  });
// itemSchema.index({itemid:"num"})

var itemModel= mongoose.model("item",itemSchema);

module.exports=itemModel;