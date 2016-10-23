var express = require('express');
var router = express.Router();
var app = require('express')();
var path = require('path');



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Dictionary Explorer' });
  app.use(express.static(path.join(__dirname)));
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
