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
    debugger
    rides.create({
        originGeoCode: originGeoCode,
        destinationGeoCode: destinationGeoCode,
        originAdress: req.body.originAdress,
        destinationAdress: req.body.destinationAdress,
        distanceText: req.body.distanceText,
        distanceValue: req.body.distanceValue,
        durationText: req.body.durationText,
        durationValue: req.body.durationValue,
        priceOfRide: req.body.priceOfRide
      })
      .then((result)=>{
      console.log(result)
      })
      .catch((err)=>{
        if (err) console.log("Error: " + err)
      })
    });

module.exports = router; 