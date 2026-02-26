const express = require('express')
const router = express.Router()
const userregistercontroller = require('../controllers/auth.controller')

router.post('/register', userregistercontroller)
router.post('/login', userregistercontroller)

module.exports = router

