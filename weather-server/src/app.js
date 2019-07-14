const path = require('path')
const express = require('express')
const hbs = require('hbs')

 
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views');
const partialsPath = path.join(__dirname, '../template/partials')
 
app.set('view engine', 'hbs')
app.set('views', viewsPath) 
hbs.registerPartials(partialsPath);

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
app.get('/help/*', (req, res) => {
    res.render('404',  {
        titile: '404',
        name: 'Shadab Ali',
        errorMessage: '404 page not found'

    })
})

app.get('*', (req, res) => {
    res.render('404',  {
        titile: '404',
        name: 'Shadab Ali',
        errorMessage: 'help artice not found'

    })
})

//app.com
//app.com/help
//app.com/about
app.listen(3000, () => {
    console.log('Server is starting')
});