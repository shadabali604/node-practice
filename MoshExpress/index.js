 const express = require('express');
const app = express();

app.use(json());

const courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'},
  {id: 4, name: 'course3'},
];

app.get('/', (req, res) => {
res.send('Hello')
});

app.get('/api/courses', (req, res) => {
res.send(courses);
});


app.get('/api/courses/:id', (req, res) => {
const course =  courses.find(c => c.id === parseInt(req.params.id));
if (!course){
if(!course) res.status(404).send('The Course with this id not found')
}
res.send(course);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: course.length + 1,
        name: req.body.name
    };
    courses.push(course)
    res.send(course);
});
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('No such course found');
    course.name = req.body.name;
    res.send(course);
})
const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Listening on Port $...`)
});
