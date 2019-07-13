const express = require('express')
const app = express()
app.get('' , (req, res) => {
res.send('Hello Express')
})
app.get('/help', (req, res) => {
res.send('<h1>This Is a help page</h1>')
})
app.get('/about',(req,res) => {
    res.send('<h1>This is about page</h1>')
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