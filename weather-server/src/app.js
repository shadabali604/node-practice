const path = require('path')
const express = require('express')

console.log(__dirname);
console.log(__filename);




const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name:'Shadab Ali'
    })
});
app.get('/about',(req, res) => {
    res.render('about')
})
app.get('/help', (req, res) => {
    res.render('help')
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