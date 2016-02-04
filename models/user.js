'use strict';

const Sequelize = require('sequelize');

const db = require('./index');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name',
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    field: 'password',
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }
});


module.exports = User;
