const express = require('express')
const cookieparser = require('cookie-parser')
const authrouter = require('./routes/auth.routes')

const app = express()




app.use(express.json())
app.use(cookieparser())



/* post   /api/auth/register        */
app.use('/api/auth',authrouter)


/* post   /api/auth/register        */
app.use('/api/auth',authrouter)



module.exports = app