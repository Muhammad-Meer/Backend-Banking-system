const express = require('express')
const router = express.Router()
const userregistercontroller = require('../controllers/auth.controller')

router.post('/register', userregistercontroller)

module.exports = router