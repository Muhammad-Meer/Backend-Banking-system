const mongoose = require('mongoose')


const conectDB = async() => {
     await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("conectDB")
    })
    .catch((error) => {
      console.log("eroor mongo nahi conect ho raha ha " + error)
     process.exit(1)

    })

}

module.exports = conectDB

