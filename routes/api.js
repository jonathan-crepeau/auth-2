const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Test Route
router.get('/test', ctrl.Auth.test);

// Signup Route
router.post('/signup', ctrl.Auth.signup);

// Login - Create Session
router.post('/login', ctrl.Auth.createSession);

module.exports = router;