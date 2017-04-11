var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
  console.log('client request URL:', request.url);
  if(request.url === '/'){
    fs.readFile('index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === "/ninjas"){
    fs.readFile('ninja.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.writeHead(200, {'Content-type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === "/dojo/new"){
    fs.readFile('dojo.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else {
    response.end('File not found!!!!!!')
  }
});


server.listen(8000);

console.log("Running in localhost to port 8000!");
