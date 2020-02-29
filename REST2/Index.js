const express = require('express');
const userRouter = require('./routers/user');
require('./db/mongoose');
const taskRouter = require('./routers/task');

const app = express();


app.use(express.json());
app.use(taskRouter);
app.use(userRouter);


const bcrypt = require('bcrypt');
const myfunction = async () => {
    const password = 'Red12345'
    const hashedPassword = await bcrypt.hash(password, 8)
    const resultPassword = await bcrypt.compare(password, hashedPassword)
    console.log(resultPassword);
console.log(password);
console.log(hashedPassword);
}
myfunction()

const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
    console.log('Connecting')
})