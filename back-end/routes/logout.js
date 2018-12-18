var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.clearCookie("loggedIn")
  res.clearCookie("type")
  res.clearCookie("name")
  res.send({loggedIn: false})
  debugger
});

module.exports = router