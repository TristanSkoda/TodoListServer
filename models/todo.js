const mongoose = require('mongoose')

const Schema = mongoose.Schema


const TodoSchema = new Schema(
    {
        name: String,
        isDone:  Boolean  
    }
)

const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo
