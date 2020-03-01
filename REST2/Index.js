const express = require('express');
const userRouter = require('./routers/user');
require('./db/mongoose');
const taskRouter = require('./routers/task');

const app = express();


app.use(express.json());
app.use(taskRouter);
app.use(userRouter);


 
const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {
    console.log('Connecting')
})
