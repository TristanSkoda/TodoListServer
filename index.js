const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const cors = require('cors')

const routes= require('./routes/api')

const app = express();

app.use(cors())


mongoose.connect('mongodb://localhost/todoList')
mongoose.Promise = global.Promise

app.use(express.static('public'))

app.use(bodyParser.json())

app.use('/api',routes);

app.listen(process.env.port || 4000 , ()=> console.log('le serveur est partie.'))

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})
