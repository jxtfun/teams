var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("ok");
});

/////              notification
router.post('/subscription', function(req, res) {

  console.log(req.body);
  
  res.send("ok");
});

module.exports = router;
