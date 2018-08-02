const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 8080
const MONGODB_URI = "mongodb://localhost:27017/bounties"

// using express create an api on bounty route
const app = express()
app.use(bodyParser.json())
app.use('/bounties', require('./routes/bounties'))

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(db => console.log('connected'))
    .catch(err => console.log(err))
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))