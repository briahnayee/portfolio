var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/home.html'));
});

router.get('/portfolio', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/portfolio.html'));
});

router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/contact.html'));
});

module.exports = router;

