'use strict';

const User = require('../models/user');
const auth = require('./auth/index').util;

const loginUser = (username, password) => {
  let foundUser;
  return User.findOne({
      where: {
        email: username
      }
    })
    .then((user) => {
      if (user === null) {
        throw new Error('Username not found');
      }
      foundUser = user;
      return auth.comparePassword(password, user.password);
    })
    .then((res) => {
      if (res === true) {
        return foundUser;
      }
      return false;
    });
};

const createUser = (first, last, email, password) => {
  return auth.saltAndHash(password)
    .then((password) => {
      return User.create({
        firstName: first,
        lastName: last,
        email: email,
        password: password,
      });
    })
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
