const trips = require('../data/trips.json');

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        heading: 'Travel',
        trips: trips
    });
};

module.exports = {
    travel
};
