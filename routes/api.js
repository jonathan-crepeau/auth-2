const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Test Route
router.get('/test', ctrl.Auth.test);

// Signup Route
router.post('/signup', ctrl.Auth.signup);

// Login - Create Session
router.post('/login', ctrl.Auth.createSession);

// Destroy - Delete Session
router.delete('/logout', ctrl.Auth.deleteSession);

// GET - Verify
router.get('/verify', ctrl.Auth.verify);

module.exports = router;