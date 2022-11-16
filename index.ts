const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {

    const reqURL = url.parse(req.url, true);
    // const reqURL = new URL(req.url);  
    const fileName = "." + reqURL.pathname;
    fs.readFile(fileName, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("forOhFor")
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
    })
}).listen(8080);