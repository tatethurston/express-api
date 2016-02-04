'use strict';

const JWT_SECRET = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');
const Promise = require('bluebird');
const bcrypt = require('bcrypt');

const salt = Promise.promisify(bcrypt.genSalt);
const hash = Promise.promisify(bcrypt.hash);
const compare = Promise.promisify(bcrypt.compare);

const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
};

const saltAndHash = (payload) => {
  return salt(10)
    .then((salt) => hash(payload, salt))
};

module.exports.saltAndHash = saltAndHash;
module.exports.comparePassword = compare;
module.exports.signToken = signToken;
