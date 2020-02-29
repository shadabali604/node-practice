const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        minlength:8
    },
    completed:{
        type: Boolean,
        
    }
})
module.exports = mongoose.model('Task', taskSchema);