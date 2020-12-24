var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const bcrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Basta' });
});

module.exports = router;
