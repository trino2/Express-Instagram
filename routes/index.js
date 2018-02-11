var express = require('express');
const Instagram = require('node-instagram').default;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  console.log('Data Length!!!!!!!!!!!!!!!!!!!!', data.length);
  res.render('index', { title: 'TrinoTech'});
});

module.exports = router;