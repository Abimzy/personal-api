const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personal-api", {
    useNewUrlParser: true
});

//Ask a question about this: useMongoClientuse: true
// module.exports.Campsite = require("./campsite.js.example");

//Pulling in the Destinations model
module.exports.Destinations = require('./destinations.js');