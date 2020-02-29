const express = require('express')
const router = new express.Router();
const Task = require('../models/task');
//Create new Task
router.post('/task', async (req, res) => {
    const task = new Task({
        description:req.body.description,
        completed:req.body.completed
    });
    try{
       await task.save();
        res.status(201).send(task);
    }
    catch(e){
        res.status(400).send(e)
    }
});
// Fetch  all task
router.get('/tasks', async (req, res) => {
 
    try{
        const tasks =  await Task.find();
        res.status(201).send(tasks)
    }
    catch(e){
        res.status(400).send(e)
    }
});





// fetch one task by id

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    const task = await Task.findById(_id);
    try{
        res.status(201).send(task);
    }
    catch(e){

    res.status(400).send(e)
}

})
router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    const task = await Task.findByIdAndDelete(_id);
    try{
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
});
module.exports = router;