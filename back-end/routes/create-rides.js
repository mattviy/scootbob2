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
        _drinkerid: req.signedCookies.drinkerId,
        drinkerName: req.signedCookies.name,
        originGeoCode: originGeoCode,
        destinationGeoCode: destinationGeoCode,
        originAdress: req.body.originAdress,
        destinationAdress: req.body.destinationAdress,
        distanceText: req.body.distanceText,
        distanceValue: req.body.distanceValue,
        durationText: req.body.durationText,
        durationValue: req.body.durationValue,
        priceOfRide: req.body.priceOfRide,
        rideStatus: req.body.rideStatus
      })
      .then((result)=>{
      console.log(result)
      })
      .t((err)=>{
        if (err) console.log("Error: " + err)
      })
    });

// router.post('/update-ride', (req, res, err) => {
//   db.rides.update(
//     { _id : "5c1997e25d5d7d826b10fe9e" },
//     { $set: { "rideStatus": "Accepted" } }
//  )
//  console.log("post req sucessfully executed")
// })

module.exports = router; 