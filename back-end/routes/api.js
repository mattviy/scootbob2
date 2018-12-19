var express = require('express');
var router = express.Router();

Ride = require('../models/rides')
/* GET home page. */
router.get('/pending-rides', function(req, res) {
  Ride.find({}).populate('drinker').exec()
  .then((result) => {
    
    res.json(result);
  })
  .catch((err) =>{
    
   console.log(err)
  })
});

module.exports = router;
