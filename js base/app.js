var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express', name:'Omar', interests:['swim', 'tennis', 'havchik', 'football'] } );
})
router.post("/", function(req, res, next) {
    console.log(req.body);
    res.send("Hello!");
})
module.exports = router;