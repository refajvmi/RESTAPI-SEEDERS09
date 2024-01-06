var express = require('express');
var router = express.Router();

//Validation Input
const Validator = require('fastest-validator')
const v = new Validator();
const {users} = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
