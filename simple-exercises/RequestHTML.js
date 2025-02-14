var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-type' : 'text/html'});
            return res.end('Not Found');
        }
    
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

}).listen(8080);


