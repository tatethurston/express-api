'use strict';

const LocalStrategy = require('passport-local').Strategy;

const userController = require('../user');

module.exports = new LocalStrategy((username, password, done) => {

  userController.loginUser(username, password)
    .then((user) => {
      if (user === false) {
        done(null, false, {
          message: 'Incorrect password.'
        });
      }
      done(null, user);
    })
    .catch((err) => done(err));
});
