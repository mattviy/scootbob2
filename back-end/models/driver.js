mongoose = require("mongoose")
Schema = mongoose.Schema

var Driver = mongoose.model('drivers', new Schema({
    // _ridesId: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isVerified: { type: Boolean, default: false },
    // rides: [{ type: Schema.Types.ObjectId, ref: 'rides'}]
}),'drivers')


module.exports = Driver