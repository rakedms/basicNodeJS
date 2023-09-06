const express = require('express')
const router = express.Router
const regConstroller = require('./registration.js')
const userController = require ('./user.js')

router.post('/registration', regConstroller)
router.post('/user', userController)
