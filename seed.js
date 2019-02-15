// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// const db = require('./models');

// const new_campsite = {
//     description: "Sharp rocks. Middle of nowhere."
// }

// db.Campsite.create(new_campsite, (err, campsite) => {
//     if (err) {
//         return console.log("Error:", err);
//     }

//     console.log("Created new campsite", campsite._id)
//     process.exit(); // we're all done! Exit the program.
// })


const db = require('./models');

const travelDestinations = [{
        _id: "1",
        country: "Switzerland",
        travelDate: "May, 2019",
        amazing: true,
        photo: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg"
    },
    {
        _id: "2",
        country: "France",
        travelDate: "June, 2019",
        amazing: true,
        photo: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg"
    },
    {
        _id: "3",
        country: "Canada",
        travelDate: "Jan, 2018",
        amazing: false,
        photo: "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg"
    },
    {
        _id: "4",
        country: "Dubai",
        travelDate: "August, 2018",
        amazing: true,
        photo: "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg"
    },
    {
        _id: "5",
        country: "Switzerland",
        travelDate: "May, 2019",
        amazing: true,
        photo: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg"
    }
];

//Before creating items for database, all items have to be removed-deleteMany{} takes 2 args
db.Destinations.deleteMany({}, (err, locations) => {
    if (err) {
        console.log(`Error occured in deleting all travel destinations ${err}`);
    } else {
        console.log(`Removed all travel destinations: ${locations.length} in total`);
        process.exit();
    }
});