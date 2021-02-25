
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Poke', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})