var express = require('express')
var router = express.Router();

Driver = require("../models/driver")
tokenDriver = require("../models/tokenDriver")

Drinker = require("../models/drinker")
tokenDrinker = require("../models/tokenDrinker")

router.post('/driver', (req,res) => {
  debugger
  tokenDriver.findOne({ token: req.body.token })
  .then((result)=> {
    if (result.token.length < 0){ 
      debugger
      res.send("This link is not valid")
    }
    else { 
      debugger
      Driver.findOne({ _id: result._userId}, function(err, Driver) {
        if (result.id.length > 0){
          debugger
          if (result.isVerified) {
            debugger
            res.send("This driver is already verified")
          } 
          else {
            Driver.isVerified =  true; 
            debugger
            Driver.save(function (err) {
              if (err) { console.log("Error: " + err)
              }
            })
            debugger
            res.send("The account has been verified. Please log in.")
          }
        } 
        else {
          debugger
          res.send("There's no such user with this ID, you are probably not registered yet")
        }
      })
    }
  })
  .catch((err)=>{
    console.log("Error: " + err); 
  })
})

router.post('/drinker', (req,res) => {
  debugger
  tokenDrinker.findOne({ token: req.body.token })
  .then((result)=> {
    
    if (result.token.length < 0){ 
      res.send("This link is not valid")
    }
    else { 
      Drinker.findOne({ _id: result._userId}, function(Drinker) {
        if (result.id.length > 0){
          debugger
          if (Drinker.isVerified) {
            debugger
            res.send("This driver is already verified")
          } 
          else {
            debugger
            Drinker.isVerified =  true; 
            Drinker.save(function (err) {
              if (err) { console.log("Error: " + err)
              }
            })
            res.send("The account has been verified. Please log in.")
            debugger
          }
        } 
        else {res.send("No such user with this ID, you are probably not registered yet")
        debugger
        }
      })
    }
  })
  .catch((err)=>{
    console.log("Error: " + err); 
  })
})

module.exports = router
