require('../task-manager/src/db/mongoose')

const User = require('../task-manager/src/modals/user')
/*
User.findByIdAndUpdate('5d3148bd022b173a04278d6a', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
*/
const UpdateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndDelete(id, { age })
    const count = await User.countDocuments({ age })
    return count
    }
    UpdateAgeAndCount('5d30a15bb977054f141167d3',21).then((count) => {
        console.log(count)
    }).catch((e) => {
        console.log(e)
    })