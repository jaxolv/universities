const mongoose = require('mongoose');

const University = mongoose.model('University', {
    domains: Array,
    country: String,
    "state-province": String,
    web_pages: Array,
    name: String,
    alpha_two_code: String
});

module.exports = University;
