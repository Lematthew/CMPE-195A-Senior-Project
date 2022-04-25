// Import express
const express = require('express')
const upload = require('../Config/multer')


// Import users-controller
const productsRoutes = require('./../controllers/product-controller.js')

// Create router
const router = express.Router()

router.get('/all', productsRoutes.productsAll)
router.get('/merchantsall', productsRoutes.merchantsAll)
router.post('/specific', productsRoutes.productsSpecific)
router.post('/new',productsRoutes.productsNew)
router.post('/update', productsRoutes.productsUpdate)
router.post('/test',upload.single('image'),(req,res) =>{
    res.send({'Message': req.file.name})
})

// Export router
module.exports = router