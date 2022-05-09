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

exports.productsNew = async (req, res) => {
  
  knex('products')
    .insert({
      'name': req.body.name,
      'merchant_id': req.body.merchant_id,
      'price': req.body.price,
      'description': req.body.description,
      'image_path1': req.file.filename
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Product added ${req.body.name} merchant_id: ${req.body.merchant_id}`, 'verified': true })    })
    .catch(err => {
      // Send a error message in response
      res.json({message:  `Product not created ERROR ${err} `})
    })
}

exports.productsUpdate = async (req, res) => {
  
  knex('products').where('id','=',req.body.id)
    .update({
      'name': req.body.name,
      'merchant_id': req.body.merchant_id,
      'price': req.body.price,
      'description': req.body.description,
      'image_path': req.body.image_path
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Product updated ${req.body.name} merchant_id: ${req.body.merchant_id}` })    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving merchants: ${err}` })
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

exports.productsSpecificProduct = async (req, res) => {
  // Get Products from database from a specific merchant
  knex
    .select('*') // select all records
    .from('products').where({       
    'merchant_id': req.body.merchant_id,
    'id': req.body.id
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