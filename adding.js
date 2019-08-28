const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
   try{
   await task.save()
}
catch(e) {
        res.status(500).send(e)
    }
    /*
    task.save().then(() => {
        console.log(task)
    }).catch(error => {
        console.log(error)
    })*/
})


router.get('/tasks', async(req, res) => {

try {
const tasks = await Task.find({})
res.send(tasks)
} 
catch(e){
    res.status(500).res(e)
}

    //Task.find({}).then(tasks => res.send(tasks)).catch(e => res.status(500).send())
});
router.get('/tasks/:id', async (req, res) =>{
    const _id = req.params.id;
     try {
     const task  =    await Task.findById(_id);
        res.send(task)
     }
     catch(e) {
         res.status(500).send(e);
     }
   // Task.findById(_id).then(task => res.send(task)).catch(e => res.status(500).send())

})
router.put('/tasks/:id', async (req, res) => {
    const _id = req.param.id;
    const updates = Object.keys(req.body);

    const updateAllowed = [description, completed];

    const isValidOpretion = Updates.every(update => updateAllowed.includes(update))
    if(!isValidOpretion){
        res.status(500).send('Property Not Found')
    }
    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
    }
    catch(e) {
     res.status(500).send(e)
    }
    
})
router.delete('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            res.status(404).send('Not Found')
        }
        res.send(task)

    }
    catch(e){
        res.status(500).send(e)
    }

})
module.exports = router;
