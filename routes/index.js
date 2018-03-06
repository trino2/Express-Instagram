var express = require('express');
const Instagram = require('node-instagram').default;
var router = express.Router();

// Create a new instance with the credentials.
const instagram = new Instagram({
  clientId: process.env.clientID,
  clientSecret: process.env.clientSecret,
  accessToken: process.env.accessToken
});

// Maks Instagram API call using credentials
function instagramInfo(sendBackResponseToBrowser){
  instagram.get('users/self/media/recent', (err, data) => {
    if (err) {
      // This sets up a defult post if error occurs and console's error
      console.log("This is the trouble maker: ", err);
      var staticLink = 'https://www.instagram.com/p/BdON8OiH_Zj/';
      sendBackResponseToBrowser(staticLink);
    } else {
      // console.log('You got this from Instagram: ', data);
      var info = '';
      // This loop filters out the 2 other arrays
      for(let x of Object.keys(data)){
        if (x == 'data')
          info = data[x];
        }
        // Sends the most resent post i.e. top of the list
        var link = info[0];
        console.log(link);
        sendBackResponseToBrowser(link["link"]);
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