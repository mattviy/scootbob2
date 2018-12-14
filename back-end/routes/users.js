var express = require('express');
var router = express.Router();
var cors = require("cors");
var bcrypt = require("bcrypt")

Drinker = require('../models/drinker')
Driver = require('../models/driver')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/driver", (req,res) => {
  debugger
  Driver.find({email: req.body.email}, function(err, Driver){
    debugger
    if (Driver.length > 0) {
      debugger   
      if (Driver[0].isVerified != true) { 
        debugger
        res.send({warning: 'Your e-mail is not verified yet, check the inbox of your mail for the verification e-mail'})
      }
      else {
        debugger
        var password = req.body.password;
       debugger
          bcrypt.compare(password, Driver[0].password)
          .then((match) => {
            if (match){
              debugger
              res.cookie('loggedIn', 'true', {signed: true});
              res.cookie('email', Driver[0].email, {signed: true})
              res.send({loggedIn: true })
            ;} else {
            debugger
            res.send({warning: 'Your combination of credentials is not correct.'})
          }
        })
        .catch((err)=> {
          res.send("Error");
        })
      }
    }
    else{ 
      debugger
      res.send({warning: 'This e-mail is not yet registered at Scootbob.'})
    }
  })
})

router.post("/drinker", (req,res) => {
  debugger
  Drinker.find({email: req.body.email}, function(err, Drinker){
    if (Drinker.length > 0) {
      if (Drinker[0].isVerified != true) { 
        debugger
        res.send({warning: 'Your e-mail is not verified yet, check the inbox of your mail for the verification e-mail'})
      }
      else {
        debugger
        var password = req.body.password;
       debugger
          bcrypt.compare(password, Drinker[0].password).then((match) => {
            if (match){
              debugger
            res.send({loggedIn: true});
            res.signedCookies('loggedIn', 'true', {signed: true});
            res.signedCookies('email', Driver[0].email, {signed: true})}
          else{
            debugger
            res.send({warning: 'Your combination of credentials is not correct.'})
          }
        })
      }
    }
    else{ 
      debugger
      res.send({warning: 'This e-mail is not yet registered at Scootbob.'})
    }
  })
})

module.exports = router;
