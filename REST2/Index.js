const express = require('express');
const userRouter = require('./routers/user');
require('./db/mongoose');
const taskRouter = require('./routers/task');

const app = express();


app.use(express.json())

app.use(userRouter);
app.use(taskRouter);



const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
    console.log('Connecting')
})