'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const user = require('./user');
const auth = require('./auth');

const router = express.Router();

router.use(bodyParser.json());

router.use('/user', user);
router.use('/auth', auth);

module.exports = router;
