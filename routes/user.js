'use strict';

const express = require('express');

const userController = require('../controllers/user');
const User = require('../models/user');

const router = express.Router();


router.post('/', (req, res) => {
  userController.createUser(req.body.firstName, req.body.lastName,
      req.body.email, req.body.password)
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      console.error(err);
      res.status(400).end();
    });
})

router
  .param('id', function (req, res, next, id) {
    req.id = id;
    next();
  })
  .route('/:id')
  .get((req, res) => {
    User.findById(req.id)
      .then((user) => res.json(user))
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  })
  .put((req, res) => {
    User.update(req.body.fields, {
        where: {
          id: req.id
        }
      })
      .then((user) => res.json(user))
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  })
  .delete((req, res) => {
    User.destroy({
        where: {
          id: req.id
        }
      })
      .then(() => res.status(200).end())
      .catch((err) => {
        console.error(err);
        res.status(400).end();
      });
  });

module.exports = router;
