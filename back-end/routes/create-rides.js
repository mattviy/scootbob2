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
    var drinkerId = mongoose.Types.ObjectId(req.signedCookies.drinkerId);
    rides.create({
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
        rideStatus: req.body.rideStatus,
        drinker: drinkerId,
      })
      .then((result)=>{
      console.log(result)
      })
      .t((err)=>{
        if (err) console.log("Error: " + err)
      })
    });

  router.post('/update-ride', (req, res, err) => {
    var driverId = mongoose.Types.ObjectId(req.signedCookies.driverId);
    console.log(driverId)
    rides.update( { _id : req.body._id }, { rideStatus: "Accepted", driver: driverId }, function (err, raw) {
      if (err) {
        console.log(err)
      }
      debugger
      res.send(raw)
      console.log('The raw response from Mongo was ', raw);    
      });
    })

module.exports = router; 
