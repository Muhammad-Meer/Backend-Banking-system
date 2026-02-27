const express = require('express')
const router = express.Router()
const userregistercontroller = require('../controllers/auth.controller')




/* post   /api/auth/register        */
router.post('/register', userregistercontroller)



/* post   /api/auth/register        */
router.post('/login', userrlogincontroller)

module.exports = router

