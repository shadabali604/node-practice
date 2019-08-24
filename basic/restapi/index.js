const express = require('express');


const app = express();
app.use()
const persons = [
    {name:'Shadab1', id: 1}, 
    {name:'Shadab2', id: 2},
    {name:'Shadab1', id:3}, 
    {name:'Shadab1', id: 4},
]
app.get('/', (req, res) => {
res.send('Hello World')
});
app.get('/api/person', (req, res) => {
    res.send(persons)
});
app.get('/api/person/:id', (req, res) => {
 const person = persons.find(c => c.id === parseInt(req.params.id));
 if(!person){ 
     res.status(404).send('Not Found');
 }
 res.send(person);
});
app.post('/api/person', (req, res) => {
    const person = {
        id: persons.id + 1,
        name: req.body.name
    };
    person.push(person);
    res.send(person);
});


app.listen(3000, () => {
    console.log('Working Good')
})
