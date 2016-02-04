'use strict';

const express = require('express');

const apiRouter = require('./routes/index');

const app = express();

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.use('/api', apiRouter);

module.exports = app;
