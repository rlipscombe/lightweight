var http = require('http');

var sessions = {};

var server = http.createServer(function(req, res) {
  console.log(req.method + ' ' + req.url);
  if (req.method == 'GET') {
    var value = sessions[req.url];
    if (typeof(value) === 'undefined') {
      console.log(' - not found');
      res.writeHead(404);
      res.end();
    }
    else {
      console.log(value);
      res.writeHead(200);
      res.end(value);
    }
  }
  else if (req.method == 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      console.log(body);
      sessions[req.url] = body;
      res.writeHead(200);
      res.end();
    });
  }
  else if (req.method == 'DELETE') {
    delete sessions[req.url];
  }
  else {
    res.writeHead(405);
    res.end();
  }
});

server.listen(3001, '127.0.0.1');
console.log('Listening on localhost:3001');

