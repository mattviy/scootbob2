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
    priceOfRide: Number,
    rideStatus: String,
    _id: Schema.Types.ObjectId,
    drinkerInfo: [{ type: Schema.Types.ObjectId, ref: 'drinker'}]
    // driver: [{ type: Schema.Types.ObjectId, ref: 'driver'}]
}),'rides')

module.exports = requestedRides