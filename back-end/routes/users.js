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
         
      if (Driver[0].isVerified != true) { 
        
        res.send({warning: 'Your e-mail is not verified yet, check the inbox of your mail for the verification e-mail',  loggedIn: false})
        //works
      }
      else {
        
        var password = req.body.password;
       
          bcrypt.compare(password, Driver[0].password)
          .then((match) => {
            if (match){
              
              res.cookie('loggedIn', 'true', {signed: true});
              res.cookie('email', Driver[0].email, {signed: true})
              res.send({loggedIn: true }) //works
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
      if (Drinker[0].isVerified != true) { 
        
        res.send({warning: 'Your e-mail is not verified yet, check the inbox of your mail for the verification e-mail',
                  loggedIn: false})
      }
      else {
        
        var password = req.body.password;
       
          bcrypt.compare(password, Drinker[0].password).then((match) => {
            if (match){
              
            res.send({loggedIn: true});
            res.signedCookies('loggedIn', 'true', {signed: true});
            res.signedCookies('email', Driver[0].email, {signed: true})}
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
