
var express = require('express');
const Instagram = require('node-instagram').default;
var router = express.Router();

// Create a new instance.
const instagram = new Instagram({
  clientId: process.env.id,
  clientSecret: process.env.clientS,
  accessToken: process.env.token
});

// You can use callbacks or promises
instagram.get('users/self/media/recent', (err, data) => {
  if (err) {
    console.log("nice try!");
    console.log(err);
  } else {
    console.log('Your got this: ', data);
    data = data;
  }
});
 
// Get information about the owner of the access_token.
// var data = instagram.get('users/self');
// console.log("User Data: ", data);
 
// Handle errors
instagram.get('tags/lol').then((data) => {
  // console.log(data);
}).catch((err) => {
  // An error occured
  console.log(err);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TrinoTech'});
});

module.exports = router;