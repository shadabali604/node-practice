require('../task-manager/src/db/mongoose')

const Task = require('../task-manager/src/modals/task');


/*
Task.findByIdAndDelete('5d30a1ebd16406480c9418db').then((task) => {
console.log(task)
return Task.countDocuments({Completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
*/

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}
deleteTaskAndCount().then( (count) => {
    console.log('count' +count)
}).catch((e) => {
    console.log(e)
})