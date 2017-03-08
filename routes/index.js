var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson', function (error, response, body) {
	  //console.log(response.body);
	  var parsed = JSON.parse(response.body);
	  console.log(parsed);
	  res.render('index', {title : 'Earthquakes', obj : parsed});
	});
  
});



module.exports = router;

