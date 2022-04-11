const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/GrocerBrochure.db')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

//#region user Tables
// Create a table in the database called "users"
knex.schema
  .hasTable('users')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('users', (table)  => {
          table.increments('id').primary()
          table.string('email').notNullable()
          table.string('full_name').notNullable()
          table.string('hashed_password').notNullable()
        })
        .then(() => {
          console.log('Table \'users\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
})

    knex.schema
    .hasTable('users_details')
      .then((exists) => {
        if (!exists) {
          return knex.schema.createTable('users_details', (table)  => {
            table.increments('id').primary()
            table.integer('user_id')
            table.string('address')
            table.string('city')
            table.string('zipcode')
            table.string('mobile')
            table.foreign('user_id').references('users.id')
          })
          .then(() => {
            console.log('Table \'user_details\' created')
          })
          .catch((error) => {
            console.error(`There was an error creating table: ${error}`)
          })
        }
      })
      .then(() => {
        console.log('Table \'user_details\' created')
      })
      .catch((error) => {
        console.error(`There was an error creating table: ${error}`)
      })
 
  .then(() => {
    console.log('done')
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`)
})

// Create a table in the database called "merchants"
knex.schema
  .hasTable('merchants')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('merchants', (table)  => {
          table.increments('id').primary()
          table.string('country').notNullable()
          table.string('merchant_name').notNullable()
          table.integer('admin_id')
        })
        .then(() => {
          console.log('Table \'merchants\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
})

// Create a table in the database called "products"
knex.schema
  .hasTable('products')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('products', (table)  => {
          table.increments('id').primary()
          table.string('name').notNullable()
          table.integer('merchant_id').notNullable()
          table.foreign('merchant_id').references('merchants.id')
          table.float('price').notNullable()
          table.string('description').notNullable()
          table.string('image_path')
        })
        .then(() => {
          console.log('Table \'products\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
})

module.exports = knex