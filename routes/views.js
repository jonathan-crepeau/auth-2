const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// test route
router.get('/test', ctrl.Views.test);

// Root (Homepage) Route
router.get('/', ctrl.Views.root);

// Login Route
router.get('/login', ctrl.Views.login)

// Profile Route
router.get('/profile', ctrl.Views.profile)

// Signup Route
router.get('/signup', ctrl.Views.signup);

module.exports = router;