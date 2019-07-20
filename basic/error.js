const express = require('express')

const app = express()
require('./db/mongoose')
const User = require('./modals/user')
const Task = require('./modals/task')

const port = process.env.PORT || 3000

app.use(express.json())

// adding User To data base
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()

    }


    /* User.find({}).then((users) => {
res.send(users)
    }).catch((e) => {
        */
})

/* Adding Single user into database */

app.get('/users/:id', async (req, res) => {

    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }

    /* 
    User.findById(_id).then((user) => {
    if(!user){
        return res.status(404).send()
    }
    res.send(user)

    }).catch((e) => {
res.status(500).send()
    })

   console.log((req.params)) */
})

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
        if(!isValidOperation){
            return res.status(400).send({error: 'Invalid updates'});
            }
        
    })


    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})



app.delete('/users/:id', async(req, res) => {
    try{
const user = await User.findByIdAndDelete(req.params.id)
    if(!User){
        return res.status(404).send()
    }
    res.send(user)
}catch(e){
res.status(500).send()
    }
})

// User Section End Here

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)

    } catch (e) {
        res.status(400).send(e)
    }
    /*
        task.save().then(() => {
            res.send(task)
        }).catch(() => {
            res.status(400).send(e)
        }) */
})

app.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        console.loe(e)
    }

    /*
    Tasks.find({}).then((tasks) => {
res.send(tasks)
    }).catch((e) => {
        console.log(e)
    }) */
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const tasks = await Task.findById(_id)
        if (!tasks) {
            return res.status(404).send()
        }
        res.send(tasks)

    } catch (e) {
        console.log(e)
    }
    /*
    Tasks.findById(_id).then((tasks) => {
    if(!tasks){
        return res.status(404).send()
    }
    res.send(tasks)

    }).catch((e) => {
res.status(500).send()
    })

   console.log((req.params)) */
})


app.patch('/task/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
if(!isValidOperation){
    return res.status(400).send({error: 'invalid Updates'})
}
try{
const task = await Task.findByIdAndUpdate(req.params, req.body, { new: true, runValidators: true})
if(!task){
    return res.status(404).send()
}
res.send(task)

}catch (e){
res.status(400).send(e)
}

})
app.delete('/task/:id', async (req, res) => {
    try{
const task = await Task.findByIdAndDelete(req.params.id)
   if(!task) {
       res.status(404).send()
   }
res.send(task )
} catch(e){
res.status(500).send()
    }
})

app.listen(port, () => {
    console.log('Server is up on port' + port)
})