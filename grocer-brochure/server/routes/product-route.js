// Import express
const express = require('express')

// Import users-controller
const productsRoutes = require('./../controllers/product-controller.js')

// Create router
const router = express.Router()

router.get('/all', productsRoutes.productsAll)
router.get('/merchantsall', productsRoutes.merchantsAll)
router.post('/specific', productsRoutes.productsSpecific)


// Export router
module.exports = router