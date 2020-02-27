const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength: 6
    },
    email:{
     type:String,
     minlength:12

    },
    password:{
        type:String,
        minlength:8
    }
});

module.exports = mongoose.model('User', userSchema)
