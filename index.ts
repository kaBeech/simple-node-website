const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

// const fs = require('fs');
// const http = require('http');

// http.createServer(function (req, res) {

//     const fileName = "." + req.url;
    
//     const fourOhFour = () => fs.readFileSync('./404.html', function(err, data) {
//         if (err) {
//             return '404 Page Not Found';
//         }
//         return data;
//     });

//     fs.readFile(fileName, function(err, data) {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             res.write(fourOhFour());
//             return res.end();
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data)
//         return res.end();
//     })
    
// }).listen(8080);