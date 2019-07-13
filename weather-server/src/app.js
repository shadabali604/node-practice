const path = require('path')
const express = require('express')

console.log(__dirname);
console.log(__filename);




const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('' , (req, res) => {
res.send('Hello Express')
})
app.get('/help', (req, res) => {
res.send('<h1>This Is a help page</h1>')
})
app.get('/about',(req,res) => {
    res.send(
        {
            name: 'shadab ali',
            age:18
        }
    )
})
app.get('/weather', (req, res) => {
    res.send('<h1>This is weather report') 
})


//app.com
//app.com/help
//app.com/about
app.listen(3000, () => {
    console.log('Server is starting')
});