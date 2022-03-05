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
          table.integer('salt').notNullable()
          table.string('acc_type').notNullable()
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
            table.foreign('user_id').references('users.id')
            table.string('address')
            table.string('city')
            table.string('zipcode')
            table.string('telephone')
            table.string('mobile')
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
        console.log('done')
      })
      .catch((error) => {
        console.error(`There was an error setting up the database: ${error}`)
      })


      

module.exports = knex