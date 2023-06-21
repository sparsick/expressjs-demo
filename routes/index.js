require('dotenv').config()

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Hello world")
  res.render('index', { title: 'Express', mongoUrl: process.env.MONGODB_URI, env: process.env.ENV });
});

module.exports = router;
