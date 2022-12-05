const db = require('../models');
const bcrypt = require('bcryptjs');

// Test Controller
const test = (req, res) => {
    res.json({message: "Auth Test Route successful.."});
};

// POST Signup (Create)
const signup = (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.email) {
        return res.status(400).json({message:"All fields are required."});
    }

    // Check for existing account
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(400).json({message:"Account not found, please try again."});

        // Return error if account already exits
        if (foundUser) return res.status(400).json({message: "Email has already been registered, please try again."});

        // Generate hash salt
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(400).json({message: "Somethign went wrong with bcrypt, please try again."});

            // Turn plain text password into complicated hash
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(400).json({message: "Something went wrong, please try again."});

                const { firstName, lastName, email } = req.body;

                const newUser = {
                    firstName,
                    lastName,
                    email,
                    password: hash
                };

                db.User.create(newUser, (err, createdUser) => {
                    if (err) return res.status(400).json({message:"Bad request, please try again."});
                    res.status(201).json(createdUser);
                });
            });
        });
    });
};

const trySignup = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = {
        firstName,
        lastName,
        email,
        password
    };
    res.json(newUser);
}


module.exports = {
    test,
    signup,
    trySignup
}