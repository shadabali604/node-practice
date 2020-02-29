const mongoose = require('mongoose');
const validator = require('validator')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength: 6,
        required:true,
       
    },
    email:{
     type:String,
     minlength:12,

     validate(value) {
        if(!validator.isEmail(value)){
            throw new Error('Email is not valid');
        }
    }

    },
    password:{
        type:String,
        minlength:8,
        required:true,
        lowercase:true
        
    }
});
userSchema.pre('save', async (next) => {

next()

})

module.exports = mongoose.model('User', userSchema)
