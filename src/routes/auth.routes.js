const express = require('express')
const router = express.Router()

const { userregistercontroller, userrlogincontroller } = require('../controllers/auth.controller')

router.post('/register', userregistercontroller)
router.post('/login', userrlogincontroller)

module.exports = router