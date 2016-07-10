var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/search', function(req, res, next) {
	// var number_adults = req.query.numAdults;
	// var number_children = parseInt(req.query.numKids);
	// var body_adults = req.body.num_adults;
	// var body_children = parseInt(req.body.num_kids);
	// console.log({ adults: number_adults, bodyAdults: body_adults });
	request({
	    headers: {
	      'x-api-key': '0MLahliXwx1eePqvVdbib7mDmQCb4OYj79o4kCjf'
	    },
	    url: 'https://api.wayblazer.com/v1/accommodations/search?adults=2&children=1&rooms=1&destination=Boulder,CO&startDate=2016-09-09&endDate=2016-09-15&getPricing=true',
	    // data: {
	    // 	adults: num_adults,
	    // 	children: num_children,
	    // 	rooms: 1,
	    // 	destination: 'Boulder,CO',
	    // 	startDate: '2017-09-11',
	    // 	endDate: '2017-09-20',
	    // 	getPricing: false
	    // },
	    method: 'GET'
	  }, function (err, response, body) {
  		//console.log({body: body});
  		var body_json = JSON.parse(body);
  		res.json(body_json.accommodations);
    //it works!
    });
});

router.get('/form', function (req, res, next) {
	res.render('form');
});

router.post('/show' ,function (req, res) {
	console.log({body: req.body});
	var numAdults = req.body.num_adults;
	var numKids = req.body.num_kids;
	var startdate = req.body.start_date;
	var enddate = req.body.end_date;


	res.render('show',{
		numAdults: numAdults
	});
})



router.get('/show', function (req, res, next) {
	res.render('show',{});
});

module.exports = router;
