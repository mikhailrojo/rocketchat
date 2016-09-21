var express = require('express');
var router = express.Router();
var http = require("http");

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.msg);

  var postData = JSON.stringify({
    msg: req.body.msg
  });
  console.log(postData);

  var options = {
    hostname: 'iqrocketchat.herokuapp.com',
    port: 80,
    path: '/api/rooms/GENERAL/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': '0yNDik5f9WaRutQ_4k4-yNG2rZjEKHxhBsaNomzdxok',
      'X-User-Id': 'Ew7u24evdzAr2QNaC'
    }
  }

  var req = http.request(options, (res)=>{
    console.log(res);
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  })

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  req.write(postData);
  req.end();


});

module.exports = router;
