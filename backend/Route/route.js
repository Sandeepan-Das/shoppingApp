const express = require('express');
const mongoose = require("mongoose")

var app = express();

const cModel = require('../Model/category');
const iModel = require("../Model/item");
const lmodel = require('../Model/login');


app.get("/category", (req, res, next) => {
    cModel.find((err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.json(data);
        }
    })
})
app.get("/item/:category", (req, res, next) => {
    var query = req.params.category;
    // console.log(query)

    iModel.find({
        "category": query
    }, (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
})

//ADD ITEMS IN DATABASE BY ADMIN
app.post("/new-item", (req, res, next) => {
    console.log(req.body.category)
    let newitemModel = new iModel({
        itemid: req.body.itemid,
        name: req.body.name,
        price: req.body.price,
        displayprice: req.body.displayprice,
        photopath: req.body.photopath,
        category:req.body.category
    })
    newitemModel.save((err, result) => {
        if (err) res.json({ msg: "failed" });
        else res.json({ msg: "Added succesfully" });
    })
})
app.post("/quantity", (req, res, next) => {
    // let pull_array = 
    console.log("A")
    iModel.findOne({ name: req.body.name }, (err, result) => {
        console.log(typeof (result._id))
        lmodel.findOneAndUpdate({ email: req.body.email }, {

            $pull: {

                cartItem: {
                    refid: result._id
                }
            }


        }, (err, result2) => {
            if (err) {
                console.log(err)
            }
            else {
                lmodel.findOneAndUpdate({ email: req.body.email }, {
                    $push: {

                        cartItem: [{
                            refid: result._id,
                            quantity: req.body.quantity
                        }]
                    }

                }, (err, result2) => {
                    if (result2 != null) {

                        res.send(result2.cartItem)
                    } else {
                        res.send("null")
                    }
                })

            }
        })
    })

})
// app.post("/quantity", (req, res, next) => {

//     lmodel.findOneAndUpdate({ email: req.body.email }, {
//         $pull: {

//             cartItem: {


//                 name: req.body.name,
//             }
//         }
//     }, (err, result) => {
//         if (err) res.json({ msg: "failed" });
//         else {



//             lmodel.findOneAndUpdate({ email: req.body.email }, {
//                 $push: {

//                     cartItem: [{

//                         name: req.body.name,
//                         price: req.body.price,
//                         Quantity: req.body.quantity,
//                     }]
//                 }
//             }, (err, result2) => {
//                 if (err) res.json({ msg: "failed" });
//                 else res.json(result2.cartItem);
//             })

//         }
//     })
// })

//NEW USER WILL CREATE ACCOUNT
app.post("/newLogin", (req, res, next) => {
    console.log(req.body)
    let newloginmodel = new lmodel({
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        city: req.body.city,
        zip: req.body.zip,
        Address: req.body.Address,
        Lane: req.body.Lane,
        state: req.body.state,
        email: req.body.email,
        password: req.body.password,
    })
    console.log(newloginmodel)
    newloginmodel.save((err,result)=>{
        if(err) throw err
        
    })
    // newloginmodel.save((err, result) => {
    //     if (err) console.log("error");
    //     else 
    // })
})
app.get("/addentity/:email", (req, res, next) => {
    lmodel.findOne({ email: req.params.email }, (err, data) => {
        if (err) res.send(err)
        else {
            res.send(data.cartItem)
        }
    })
})

//CHECK LOGIN
app.get("/userinfo/:email/:pass", (req, res, next) => {


    lmodel.findOne({ email: req.params.email }, (err, result) => {
        
        if (result == null) {
            res.json(false);
            
        }
        else {
            if (result.password == req.params.pass) {
                res.json(result)

                // console.log("login");
            } else {
                res.json(false)

            }
        }
    })
})
app.get("/displaycart/:email", (req, res, next) => {

    // console.log("final");
    // console.log(req.params.email)
    lmodel.findOne({ email: req.params.email }).populate("cartItem.refid", "-__v -itemid ").exec((err, result) => {
      
        // if (result != null) {

        //     res.send(result.cart)
        // } else {
        //     res.send("null")
        // }
        res.send(result)
    })

})

app.get("/del-quantity/:email/:id", (req, res, next) => {
  
   
    var Id = mongoose.Types.ObjectId(req.params.id)
   
    lmodel.findOneAndUpdate({ email: req.params.email }, {
        $pull: {

            cartItem: {
                refid: Id
            }
        }
    }, (err, result) => {
        res.send(result)
    })
})
app.get("/del-all/:email", (req, res, next) => {
  
   
   
    lmodel.findOneAndUpdate({ email: req.params.email }, {
       $set:{
           cartItem:[]
       }
    }, {multi:true}, (err, result) => {
        console.log(result)
    })
})

module.exports = app;