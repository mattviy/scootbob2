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
  
  Driver.find({email: req.body.email}, function(err, Driver){
   
    if (Driver.length > 0) {
      var name = `${Driver[0].firstName[0]}. ${Driver[0].lastName}`
      var id  = Driver[0]._id
      if (Driver[0].isVerified != true) { 
        
        res.send({warning: 'Your e-mail is not verified yet, check the inbox of your mail for the verification e-mail',  loggedIn: false})
        //works
      }
      else {
        
        var password = req.body.password;
       
          bcrypt.compare(password, Driver[0].password)
          .then((match) => {
            if (match){
              debugger
              res.cookie('loggedIn', 'true', {signed: true});
              res.cookie('type', 'driver', {signed: true})
              res.cookie('name', name, {signed: true})
              res.send({loggedIn: true, type: 'driver', name: name, id: id});
              ;} else {
              
            res.send({warning: 'Your combination of credentials is not correct.',  loggedIn: false})
          }
        })
        .catch((err)=> {
          res.send("Error");
        })
      }
    }
    else { 
      res.send({warning: 'This e-mail is not yet registered at Scootbob.', loggedIn: false})
      
    }
  })
})

router.post("/drinker", (req,res) => {
  
  Drinker.find({email: req.body.email}, function(err, Drinker){
    if (Drinker.length > 0) {
      var name = `${Drinker[0].firstName[0]}. ${Drinker[0].lastName}`
      var id  = Drinker[0]._id
      if (Drinker[0].isVerified != true) { 
        
        res.send({warning: 'Your e-mail is not verified yet, check the inbox of your mail for the verification e-mail',
                  loggedIn: false})
      }
      else {
        var password = req.body.password;
          bcrypt.compare(password, Drinker[0].password).then((match) => {
            if (match){
              debugger
            res.cookie('loggedIn', 'true', {signed: true});
            res.cookie('type', 'drinker', {signed: true})
            res.cookie('name', name, {signed: true})
            res.send({loggedIn: true, type: 'drinker', name: name, id: id});
            }
          else{
            res.send({warning: 'Your combination of credentials is not correct.',
            loggedIn: false})
          }
        })
      }
    }
    else{ 
      res.send({warning: 'This e-mail is not yet registered at Scootbob.',
      loggedIn: false})
    }
  })
})


module.exports = router;
