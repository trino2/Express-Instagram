var express = require('express');
const Instagram = require('node-instagram').default;
var router = express.Router();

// Create a new instance.
const instagram = new Instagram({
  clientId: process.env.clientID,
  clientSecret: process.env.clientSecret,
  accessToken: process.env.accessToken
});

function instagramInfo(sendBackResponseToBrowser){
  instagram.get('users/self/media/recent', (err, data) => {
    if (err) {
      console.log("Denied!!!, This craped the bed: ", err);
    } else {
      // console.log('You got this from Instagram: ', data);
      for(let x of Object.keys(data)){
        if (x == 'data'){
          var info = data[x];
          sendBackResponseToBrowser(info);
          }
        }
      }
  });
}

// GET home page
router.get('/', function(req, res, next) {
  instagramInfo(function(info){
    // console.log(info);
    res.render('index', { title: 'TrinoTech', info: info});
  });
});

module.exports = router;