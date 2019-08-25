const express = require('express');
const Joi = require('@hapi/joi');

const app = express();
app.use(express.json());
const persons = [
    {name:'Shadab1', id: 1}, 
    {name:'Shadab2', id: 2},
    {name:'Shadab1', id:3}, 
    {name:'Shadab1', id: 4},
]
//Get Method
app.get('/', (req, res) => {
res.send('Hello World')
});

app.get('/api/person', (req, res) => {
    res.send(persons)
});

//Get Only One person detail

app.get('/api/person/:id', (req, res) => {
 const person = persons.find(c => c.id === parseInt(req.params.id));
 if(!person) return res.status(404).send('Not Found');
 res.send(person);

});
// Post Method
app.post('/api/person', (req, res) => {
const { error } =  ValidaterName(req.body);
if(error) return res.status.send(400).send('Not Found')
       const person = {
        id: persons.id + 1,
        name: req.body.name
    };

    person.push(person);
    res.send(person); 
});

//Put Method
app.put('/api/person/:id',(req, res) => {
  const person = ValidaterName(req.body);
  
   const person = persons.find(c => c.id === parseInt(req.param.id));
    if(!person){
        req.status(404).send('Recod not found')
    }
     person.name = req.body.name;
     req.send(person);
});

//delete Method 

app.delete('/api/person/:id', (req, res) => {
    const person = ValidaterName(req.body);
    const person = persons.find(c => c.id === parseInt(req.param.id));
    if(!person){
        req.status(404).send('Recod not found')
    }
    const index = persons.indexOf(person);
    persons.splice(index, 1);
    res.send(persons)

})
function ValidaterName(name){
    const scheme = Joi.object().keys({
        name: Joi.string().alphanum.min(3).max(30).require() });
    
};
//Helper Function
return Joi.validate(name);
app.listen(3000, () => {
    console.log('Working Good')
})
