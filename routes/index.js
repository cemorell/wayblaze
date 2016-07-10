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
	    url: 'https://api.wayblazer.com/v1/accommodations/search?adults=1&children=2&rooms=1&destination=Austin,TX&startDate=2016-10-06&endDate=2016-10-10&getPricing=true',
	    method: 'GET'
	  }, function (err, res, body) {
  			console.log({body: body});
    //it works!
  });


// 	var options = {
// 	  host: 'api.wayblazer.com',
// 	  port: 443,
// 	  path: '/v1/accommodations/seearch?adults=1&children=2&rooms=1&startDate=2016-10-06&endDate=2016-10-10&getPricing=true',
// 	  method: 'GET',
// 	  headers: {
// 	    'x-api-key': 'GUMpqpsgg96D1y8rcf6dBC32JVWVUnO2XWfMMa7e'
// 	  }
// 	};

// 	http.get(options, function(res) {
// 	  console.log('STATUS: ' + res.statusCode);
// 	  console.log('HEADERS: ' + JSON.stringify(res.headers));
// 	  res.setEncoding('utf8');
// 	  var str = '';
// 	  res.on('data', function (chunk) {
// 	    console.log('BODY: ' + chunk);
// 	    str += chunk;
// 	  });
// 	  res.on('end', function () {
// 	  	console.log(str);
// 	  })
// 	}).on("error", function(e) {
// 		console.log("Got error: " , e);
// 	})
// 	.end();
});

module.exports = router;
