const express = require('express');

const router = express.Router();

const Todo = require('../models/todo')

router.get('/todos',(req,res, next)=>{
    Todo.find({}).then(todo=>{
        res.send(todo)
    })
})

router.post('/todos',(req,res, next)=>{
    Todo.create(req.body).then((todo)=>{
        res.send(todo);
    }).catch(next)
})

router.put('/todo/:id',(req,res, next)=>{
    Todo.update({key: req.params.id},req.body).then(todo=>{ res.send(todo) }).catch(next)
})

router.post('/todo/deleteDone',(req,res, next)=>{
    keyArray = req.body
    keyArray.forEach(key => {
        Todo.remove({key: key}).catch(next)
    })
})

router.delete('/todo/:id',(req,res, next)=>{
    Todo.remove({key: req.params.id}).then(todo=>{ res.send(todo) }).catch(next)
})


module.exports = router