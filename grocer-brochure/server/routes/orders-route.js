const express = require('express')
// Import users-controller
const ordersRoutes = require('./../controllers/orders-controller.js')

// Create router
const router = express.Router()
router.get('/all', ordersRoutes.ordersAll)
router.get('/incomplete', ordersRoutes.orderIncompleteList)
router.post('/create', ordersRoutes.ordersCreate)
router.put('/update', ordersRoutes.orderUpdateStatus)
router.get('/all2', (req,res) => res.send(req.body))

module.exports = router