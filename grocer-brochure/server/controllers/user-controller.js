// Import database
const knex = require('../db')

// Retrieve all users
exports.usersAll = async (req, res) => {
  // Get all users from database
  knex
    .select('*') // select all records
    .from('users') // from 'users' table
    .then(userData => {
      // Send users extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

exports.usersTest = async (req, res) => {
 res.json({message: 'Upon your return a flower'})
}

exports.usersSpecific = async (req, res) => {
  // Get all users from database
  knex
    .select('id') // select all records
    .from('users').where({       
    'email': req.body.email,
    'hashed_password': req.body.hashed_password
    })
    .then(userData => {
        if(userData.length >= 1)
          res.json({'id': userData, 'verified': true})
        else
          res.json({'verified': false})
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

exports.usersCreate = async (req, res) => {

  knex('users')
    .insert({
      'email': req.body.email,
      'full_name': req.body.full_name,
      'hashed_password': req.body.hashed_password,
      'salt': req.body.salt
    })
    .then(() => {

      knex('userDetails')
        .insert({
            'city': req.body.city,
            'zipcode':req.body.zipcode,
            'address':req.address.address
        })

    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.title} user: ${err}` })
    })
}

// Remove specific book
exports.usersDelete = async (req, res) => {
  // Find specific book in the database and remove it
  knex('users')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Book ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} user: ${err}` })
    })
}

// Remove all users on the list
exports.usersReset = async (req, res) => {
  // Remove all users from database
  knex
    .select('*') // select all records
    .from('users') // from 'users' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'User list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting User list: ${err}.` })
    })
}