// Import database
const knex = require('../db')

exports.ordersAll = async (req, res) =>{
knex.select('*') 
    .from('orders') 
    .then(orders => {
      res.json(orders) // Set the results as the records
     })
     .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving the data: ${err}` })
    })
}

exports.ordersSpecific = async (req, res) =>{
    knex.select('*') 
        .from('orders').where({       
            'order_id': req.body.order_id,
            'user_id' : req.body.user_id
            })
        .then(orders => {
          res.json(orders) 
         })
         .catch(err => {
          // Send a error message in response
          res.json({ message: `There was an error retrieving the data: ${err}` })
     })
 }

 exports.orderitems = async (req, res) =>{
    knex.select('*') 
        .from('orders_items').where({       
            'order_id': req.body.order_id,
            'user_id' : req.body.user_id
        }) 
        .then(orders => {
          res.json(orders) 
         })
         .catch(err => {
          // Send a error message in response
          res.json({ message: `There was an error retrieving the data: ${err}` })
     })
 }

 exports.createOrder = async (req, res) =>{
    knex('orders')
    .insert({
        'id': req.body.order_hash,
        'user_id': req.body.user_id,
        'order_total':req.body.order_total,
        'created_at': new Date().toLocaleDateString
    })
    .then(() => {

    req.body.cart.foreach(items=>{
        knex('order_items')
        .insert({
            'order_id':req.body.order_hash,
            'product_id': items.id,
            'quantity': items.quantity,
            'created_at': new Date().toLocaleDateString
        })
    })


    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.title} user: ${err}` })
    })
}
