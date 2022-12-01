const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minlength: [2, 'Your First Name must be at least 2 characters'],
        maxlength: [50, 'Your First Name cannot be longer than 50 characters'],
        trim: true,
      },
      lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minlength: [2, 'Your Last Name must be at least 2 characters'],
        maxlength: [50, 'Your Last Name cannot be longer than 50 characters'],
        trim: true,
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        // unique: [true, 'Email has already been registered. Please try again'],
        lowercase: true,
      },
      password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [4, 'Password must be at least 4 characters'],
      },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;