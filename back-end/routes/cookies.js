var express = require('express');
var router = express.Router();

router.get('/', (req,res)=> {
  debugger
  (req.signedCookies.loggedIn && req.signedCookies.type.length > 0 ) ? res.send({loggedIn: true, type: req.signedCookies.type, name: req.signedCookies.name}): res.send({loggedIn: false})
  debugger
})

module.exports = router