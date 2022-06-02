var express = require('express');
var router = express.Router();
var subcontroller = require("../controller/subs")
/* GET home page. */
router.get('/', function(req, res) {
  res.send("ok");
});

/////              notification
router.post('/subscription', subcontroller ); 

module.exports = router;
