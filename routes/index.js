var express = require('express');
var router = express.Router();
var http = require("http");

/* GET home page. */
router.get('/', function(req, response, next) {

  var options = {
    hostname: 'iqrocketchat.herokuapp.com',
    port: 80,
    path: '/api/rooms/GENERAL/messages',
    method: 'GET',
    headers: {
      'X-Auth-Token': '0yNDik5f9WaRutQ_4k4-yNG2rZjEKHxhBsaNomzdxok',
      'X-User-Id': 'Ew7u24evdzAr2QNaC'
    }
  }
  var fullResponse = "";
  var req = http.request(options, (res)=>{
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      fullResponse +=chunk;
    //  console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      var msg = JSON.parse(fullResponse);
      var existingValues = onlyMsg(msg.messages).filter((i)=>{if(i)return true});
      console.log(existingValues.length);
      response.render('index', {results: existingValues});
      console.log('No more data in response.');
    });
  })

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  req.end();


});


function onlyMsg(arr){
  return arr.map((i)=>i.msg);
}


module.exports = router;
