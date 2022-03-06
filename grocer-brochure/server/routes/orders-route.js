// Import express
const express = require('express')

// Import users-controller
const ordersRoutes = require('./../controllers/user-controller.js')

// Create router
const router = express.Router()
router.get('/all', ordersRoutes.usersAll)


module.exports = router