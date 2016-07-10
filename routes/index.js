var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/search', function(req, res, next) {
	request({
	    headers: {
	      'x-api-key': '0MLahliXwx1eePqvVdbib7mDmQCb4OYj79o4kCjf'
	    },
	    url: 'https://api.wayblazer.com/v1/accommodations/search?adults=1&children=2&rooms=1&destination=Austin,TX&startDate=2016-09-09&endDate=2016-10-10&getPricing=true',
	    method: 'GET'
	  }, function (err, response, body) {
  		console.log({body: body});
  		var body_json = JSON.parse(body);
  		res.json(body_json.accommodations);
    //it works!
  });
});

router.get('/form', function (req, res, next) {
	res.render('form');
});

router.post('/show', function (req, res, next) {
	console.log({req: req.body});
});

router.get('/show', function (req, res, next) {

	res.render('show');
});

module.exports = router;
