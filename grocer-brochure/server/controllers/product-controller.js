const knex = require('../db')

// Retrieve All products
exports.productsAll = async (req, res) => {
  // Get all products from database
  knex
    .select('*') // select all records
    .from('products') // from 'products' table
    .then(productData => {
      // Send products extracted from database in response
      res.json(productData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving products: ${err}` })
    })
}

// Retrieve all merchants
exports.merchantsAll = async (req, res) => {
  // Get all merchants from database
  knex
    .select('*') // select all records
    .from('merchants') // from 'products' table
    .then(merchantData => {
      // Send merchants extracted from database in response
      res.json(merchantData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving merchants: ${err}` })
    })
}

exports.productsSpecific = async (req, res) => {
  // Get Products from database from a specific merchant
  knex
    .select('*') // select all records
    .from('products').where({       
    'merchant_id': req.body.merchant_id
    })
    .then(productData => {
        if(productData.length >= 1)
          res.json(productData)
        else
          res.json({'verified': false})
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving products: ${err}` })
    })
}