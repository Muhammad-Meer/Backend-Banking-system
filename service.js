const app = require('./src/app')
const connectDB = require('./src/config/db')
require('dotenv').config()

const port = 3200

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.error("Database connection failed:", err)
    process.exit(1)
  })