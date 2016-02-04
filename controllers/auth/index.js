'use strict';

const passport = require('passport');

const local = require('./local');
const util = require('./util');

passport.use(local);

//return middleware for handling login through passport provider
const authorize = (passport, strategy) => {
  return (req, res, next) => {
    passport.authenticate(strategy, (err, user, info) => {

      if (err || !user) {
        return res.status(401).json({
          error: 'Invalid username or password'
        });
      }

      //user has authenticated correctly => send JWT token 
      const token = util.signToken({
        username: user.email
      });

      res.json({
        token: token
      });

    })(req, res, next);
  };
};

module.exports.passport = passport;
module.exports.authorize = authorize;
module.exports.util = util;
