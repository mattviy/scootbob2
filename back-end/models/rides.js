mongoose = require("mongoose")
var Schema = mongoose.Schema

var requestedRides = mongoose.model('rides', new Schema({
    originGeoCode: String,
    destinationGeoCode: String,
    originAdress: String,
    destinationAdress: String,
    distanceText: String,
    distanceValue: Number,
    durationText: String,
    durationValue: Number,
    priceOfRide: Number
}),'rides')

module.exports = requestedRides