const express = require('express');
const { createTodo, updateTodo } = require('./type');
const Todo = require('./db');
const app = express()
const port = 3000
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload){
        res.status(411).json({
            msg: "invalid payload"
        })
        return;
    }
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })

})

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({});
    console.log(todos)
    res.json({
        todos
    })
})

app.put('/completed', async (req, res) => {
    const completedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(completedPayload)
    if(!parsedPayload){
        res.status(411).json({
            msg: "invalid payload"
        })
        return;
    }
    await Todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})