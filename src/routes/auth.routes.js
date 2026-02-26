const express = require('express')
const authconroller = require('../controllers/auth.controller')


const router = express(express.Router)

router.post('/register', authconroller.userregistercontroller)
module.exports = router