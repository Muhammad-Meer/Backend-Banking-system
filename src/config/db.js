const mongoose = require('mongoose')


const conectDB = async() => {
    mongoose.connect(process.env.MONGO_URI)
}