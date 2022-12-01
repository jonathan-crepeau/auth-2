const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Test Route
router.get('/test', ctrl.Auth.test);

module.exports = router;