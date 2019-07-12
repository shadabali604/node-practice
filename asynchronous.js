const fs = require('fs');
const http = require('http');

//server
const server = http.createServer((reg, res) =>{    
res.end('Hello From The Server');
});
server.listen(3000, '127.0.0.1', () =>{
    console.log("Serve Start")
});