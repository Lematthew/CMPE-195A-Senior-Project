// Import express
const express = require('express')

// Import users-controller
const usersRoutes = require('./../controllers/user-controller.js')

// Create router
const router = express.Router()


router.get('/all', usersRoutes.usersAll)

router.post('/specific', usersRoutes.usersSpecific)

router.post('/create', usersRoutes.usersCreate)

router.put('/delete', usersRoutes.usersDelete)

router.put('/reset', usersRoutes.usersReset)

router.post('/test', usersRoutes.usersTest)


// Export router
module.exports = router