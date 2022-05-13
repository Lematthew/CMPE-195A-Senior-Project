// Import database
const knex = require('../db')

exports.ordersAll = async (req, res) =>{
knex.select('*') 
    .from('order_items') 
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
        .from('order_items').where({       
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

 exports.ordersCreate = async (req, res) =>{

    const order_id = req.body.order_hash;
    const total = req.body.total;
    const user_id = req.body.user_id;

    const fieldsToInsert = req.body.cart.map(field => 
        ({ order_hash: order_id,
           order_total: total,
           user_id: user_id,
           created_at: Date.now().toString(),
           product_id: field.id,
           quantity: field.quantity,
           status: 'INCOMPLETE',
           merchant_id: field.merchant_id
        })); 

    

    knex('order_items')
    .insert(fieldsToInsert )
    .then(() => {
    
        res.json({ message: `Order Created `, 'success':true })

    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.title} user: ${err}` })
    })
}

exports.orderUpdateStatus = async (req, res) => {
  
    knex('order_items').where('order_hash','=',req.body.order_hash).andWhere('merchant_id','=',req.body.merchant_id)
      .update({
        'status': req.body.status
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Product updated merchant_id: ${req.body.merchant_id}` })    })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving merchants: ${err}` })
      })
  }

exports.orderIncompleteList = async (req, res) => {

    knex.select('*')
    .groupBy('order_hash')
    .from('order_items')
    .join('users', function() {
      this.on('order_items.user_id', '=', 'users.id')
    })
    .where('role', '=', 'Customer')
    .then(orders => {
      res.json(orders) 
     })
     .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving the data: ${err}` })
 })
}

exports.orderOutgoingList = async (req, res) => {

  knex.select('*')
  .from('order_items')
  .join('products', function() {
    this.on('order_items.product_id', '=', 'products.id')
  })
  .where('order_items.merchant_id', '=', req.query.merchant_id)
  .andWhere('status', '=', 'OUTGOING')
  .then(orders => {
    res.json(orders) 
   })
   .catch(err => {
    // Send a error message in response
    res.json({ message: `There was an error retrieving the data: ${err}`})
  })
}