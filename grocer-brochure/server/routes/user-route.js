// usershelf-app/server/routes/users-route.js

// Import express
const express = require('express')

// Import users-controller
const usersRoutes = require('./../controllers/user-controller.js')

// Create router
const router = express.Router()


router.get('/all', usersRoutes.usersAll)

router.post('/create', usersRoutes.usersCreate)

router.put('/delete', usersRoutes.usersDelete)

router.put('/reset', usersRoutes.usersReset)

// Export router
module.exports = router