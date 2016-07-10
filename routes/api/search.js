var options = {
  host: 'https://api.wayblazer.com',
  port: 80,
  path: '/v1/accommodations/search?adults=1&children=2&destination=Austin,TX',
  method: 'GET',
  headers: {
    'x-api-key': 'GUMpqpsgg96D1y8rcf6dBC32JVWVUnO2XWfMMa7e'
  }
};

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();