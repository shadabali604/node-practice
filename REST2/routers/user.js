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
    email:req.body.email,
    password:req.body.password
});
try{
    await user.save();
    res.status(200).send(user)
}
catch(e) {
    res.status(400).send(e)
}
});

router.post('/user/login', async (req, res) => {
    try {
  const user = await User.findByCredentials(req.body.email, req.body.password);
  res.status(201).send(user);

}
   catch (e) {
       res.status(401).send(e);
   }
});
//deleting user from mongo
router.delete('/users/:id', async (req, res) => {
const _id = req.params.id;
try{
   const user =  await User.findByIdAndDelete(_id);
   if(!user){
       res.status(404).send('Id Not Founded')
   }
     res.status(401).send(user)
}
catch(e) {
    res.status(400).send(e)
}
});
//login into user account




module.exports = router;