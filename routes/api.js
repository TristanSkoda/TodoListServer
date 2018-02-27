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
    Todo.findByIdAndUpdate({_id: req.params.id},req.body).then(todo=>{ res.send(todo) }).catch(next)
})

router.post('/todo/deleteDone',(req,res, next)=>{
    idArray = req.body
    idArray.forEach(id => {
        Todo.findByIdAndRemove({_id: id}).catch(next)
    })
})

router.delete('/todo/:id',(req,res, next)=>{
    Todo.findByIdAndRemove({_id: req.params.id}).then(todo=>{ res.send(todo) }).catch(next)
})


module.exports = router