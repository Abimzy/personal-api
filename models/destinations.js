const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating destinations schema with with 5 datapoints
const DestinationsSchema = new Schema({
    _id: String,
    country: String,
    travelDate: String,
    amazing: Boolean,
    photo: String //"/images/Discover ideas about Le Gruyere.jpeg"
});

const Destinations = mongoose.model('Destinations', DestinationsSchema);

module.exports = Destinations;