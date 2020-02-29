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
    console.log('Before save')
const user = this
if(user.isModified('password')){
  user.password = await bcrypt.hash(user.password, 8)
}


next()

});

const myfnc = async () => {
    const hashPassword =  await bcrypt.hash('password', 8);
    console.log(hashPassword);
}
myfnc();
 
module.exports = mongoose.model('User', userSchema)
