const db = require('../models');

// Test Controller
const test = (req, res) => {
    res.json({message: "Auth Test Route successful.."});
};

module.exports = {
    test
}