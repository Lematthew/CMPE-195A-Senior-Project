const express = require('express')

// Import users-controller
const ordersRoutes = require('./../controllers/orders-controller.js')

// Create router
const router = express.Router()
router.get('/all', ordersRoutes.ordersAll)


module.exports = router