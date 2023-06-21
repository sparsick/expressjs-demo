require('dotenv').config()

var express = require('express');
var router = express.Router();
var logger = require("../utils/logger");

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info("Hello world")
  res.render('index', { title: 'Express', mongoUrl: process.env.MONGODB_URI, env: process.env.ENV });
});

module.exports = router;
