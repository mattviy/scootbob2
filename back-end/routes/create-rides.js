const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlcodeParser = bodyParser.urlencoded({ extended: false});

mongoose.connect('mongodb://localhost/scooter')

require(__dirname + '/../models/rides')
const requestedRides = mongoose.model('rides')
var rides = require('../models/rides');


router.post('/', (req, res, err) => {
    var originGeoCode = req.body.originLat + ", " + req.body.originLng;
    var destinationGeoCode = req.body.destinationLat + ", " + req.body.destinationLng;
   
    rides.create({
        originGeoCode: originGeoCode,
        destinationGeoCode: destinationGeoCode,
        originAdress: "",
        destinationAdress: "",
        travelDistance: "",
        travelDuration: "",
        priceOfRide: ""
      })
      .then((result)=>{
      console.log(result)
      })
      .catch((err)=>{
        if (err) console.log("Error: " + err)
      })
    });

module.exports = router; 