const express = require('express')
const authrouter = require('./routes/auth.routes')

const app = express()


app.use('/api/auth',authrouter)


module.exports = app