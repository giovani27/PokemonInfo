const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const database = require('./src/services/database')
const cors = require('cors')

const app = express()
app.use(express.json())

const routes = require('./src/Routes/index')





app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))


app.use('/usuario', routes)


app.listen(8000, () =>{
    console.log('servidor funcionando')
})