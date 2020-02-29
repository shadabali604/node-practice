const express = require('express')
const router = new express.Router();
const Task = require('../models/task');

router.post('/task', (req, res) => {
    const task = new Task({
        description:req.body.description,
        completed:req.body.completed
    });
    try{
        task.save();
        res.status(201).send(task);
    }
    catch(e){
        res.status(400).send(e)
    }
});
module.exports = router;