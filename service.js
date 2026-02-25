const app = require('./src/app')
const conectDB = require('./src/config/db')
require("dotenv").config()


conectDB()



 const port = 3200 
app.listen(port , () => {
  console.log("http://localhost:"+ port)
})