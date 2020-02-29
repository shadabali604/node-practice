const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength: 6,
        required:true,
       
    },
    email:{
     type:String,
     minlength:12,
     unique:true,

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
userSchema.pre('save', async function (next)  {
console.log('Before save')
const user = this
if(user.isModified('password')){
  user.password = await bcrypt.hash(user.password, 8)
}

next()

});
userSchema.static.userByCredentials = async (password, email) => {
const user = await User.findOne({email})
if(!user){
    throw new Error('User Not Found')
}
const isMatch = await bcrypt.compare(password, user.password)
if(!isMatch){
    throw new Error('Your Password is wrong')
}
return user

}
 
 
module.exports = mongoose.model('User', userSchema)
