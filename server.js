'use strict';

var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var obj = {};
app.get('/', function(req,res){
	res.writeHead(200,{'Content-type': 'text/plain'});
	obj = {ip: req.headers['x-forwarded-for'],
	       language: req.headers['accept-language'].split(',')[0],
	       user_agent: req.headers['user-agent'].match(/\((.*?)\)/)[1]
	};
    res.write(JSON.stringify(obj));
    //res.write('\n'+ req.headers['user-agent']);
    //res.write('\n'+ req.headers['x-cluster-client-ip']);
    //res.write(req.headers["host"]);
    res.end();
});
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});