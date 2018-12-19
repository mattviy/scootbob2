mongoose = require("mongoose")
Schema = mongoose.Schema

var Drinker = mongoose.model('drinkers', new Schema({
    // _ridesId: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isVerified: { type: Boolean, default: false },
    // rides: [{ type: Schema.Types.ObjectId, ref: 'rides'}]
}),'drinkers')


module.exports = Drinker