const mongoose = require('mongoose')

const Schema = mongoose.Schema


const TodoSchema = new Schema(
    {
        key: String,
        data: {
        name: String, isDone:  Boolean  
        } 
    }
)

const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo

/* key: {
        type: Number,
        default: 't' + Date.now()
    },
    data: {
        name: {
            type:String,
            require: true
        },
        isDone: {
            type: Boolean,
            default: false
        } 
    }*/