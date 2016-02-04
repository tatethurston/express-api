'use strict';

const express = require('express');

const passport = require('../controllers/auth/index').passport;
const authorize = require('../controllers/auth/index').authorize;

const router = express.Router();
const local = authorize(passport, 'local');

router.use(passport.initialize());

router.post('/', local);

module.exports = router;
