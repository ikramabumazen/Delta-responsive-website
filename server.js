let http = require('http');
let server = http.createServer(function(req,res){
    res.writeHead(200 , {'content-Type' : 'text/plain'});
    res.end('hi from code ');

});

server.listen(3000,'192.168.1.109');
console.log("now listning to port 3000 ");