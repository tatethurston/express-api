'use strict';

const DATABASE_URL = process.env.DATABASE_URL;

const Sequelize = require('sequelize');

const config = {
  logging: false
};

const db = new Sequelize(DATABASE_URL, config);


module.exports = db;
