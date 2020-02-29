const mongoose = require('mongoose');
const taskScheme = new mongoose.Schema({
    description: String,
    completed: Boolean
})
module.exports = mongoose.model('Task', taskScheme);