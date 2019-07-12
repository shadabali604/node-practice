const fs = require('fs');
const textIn = fs.readFileSync('./Hello.txt', 'utf-8');
console.log(textIn);
const textOut = `This Is What we know me: ${textIn}.\nCreate on ${Date.now()}`;
fs.writeFileSync('./Hello.txt', textOut);
console.log("file Written");


// Non-blocking 
fs.readFile('./Hello.txt', (err, data) =>{
console.log(data);
});