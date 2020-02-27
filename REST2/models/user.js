const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength: 8
    },
    last:{
     type:String,


    }
});

module.exports = mongoose.model('User', userSchema)
