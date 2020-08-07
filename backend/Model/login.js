const mongoose = require('mongoose');

const Schema = mongoose.Schema




var loginSchema = new Schema({

  Fname: String,
  Lname: String,
  city: String,
  zip: String,
  Address: String,
  Lane: String,
  state: String,
  password: String,
  email: String,
  cartItem: [
    {
      refid: { type: mongoose.Schema.Types.ObjectId, ref: 'item' },
      quantity: { type: Number }
    },
    // quantity: Number
  ]
});
// var itemListschema=new Schema({
// name:{type:String},
//   price:{type:String},
//   Quantity:{type:Number,default:0}
// })
// var itemaddModel= mongoose.model("entity",itemListschema);

// var loginSchema = new Schema({
//     name:String,
//     email:String,
//     password:String,
//     cartItem:[itemListschema]

//   });

var loginModel = mongoose.model("user", loginSchema);

module.exports = loginModel;