const express = require('express');
const router = new express.Router;
const User = require('../models/user');


//fetching all users from mongo

router.get('/users',async (req, res) => {
 try{
    const users = await User.find(); 
    res.status(201).send(users);
} 
 catch(e){
     res.status(404).send(e)
 }  
});

//fetching one users form mongo
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try{
        const user = await User.findById(_id);
        if(!user){
            req.status(404).send('User Not found')
        }
        res.status(201).send(user)
    } 
    catch(e){
        res.status(400).send(e)
    }
});

//user creation 

router.post('/user',async (req, res) => {
const user = new User({
    name:req.body.name,
    last:req.body.last
});
try{
    await user.save();
    res.status(200).send(user)
}
catch(e) {
    res.status(400).send(e)
}
});
//deleting user from mongo

router.delete('/users/:id', async (req, res) => {
const _id = req.params.id;
try{
   const user =  await findByIdAndDelete(_id)

}
catch(e) {
    res.status(400).send(e)
}
});


module.exports = router;