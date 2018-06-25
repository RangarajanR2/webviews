var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/webview/travelDates', function(req, res){
    res.render('bajaj_travel_bot/travel_dates',{"departure_date":req.query.departure_date,"days":req.query.days});
})

router.get('/webview/gender_passport',(req,res)=>{

    var json = JSON.parse(req.query.data);
    if(!req.query.count){
        req.query.count = 0;
    }
    res.render('bajaj_travel_bot/gender_dob',{
        count:req.query.count,
        data: req.query.data
    })
})

module.exports = router;
