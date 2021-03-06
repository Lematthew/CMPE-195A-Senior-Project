// Import database
const knex = require('../db')


//Basic Route Structure
/*******************************************
1.SQL statement created using knex API.
2. '.Then' block where you manipulate the data 
                    OR / THEN
    set the 'res' variable to send back the record
3. '.Catch' block in case of SQL query error. Error message can be custom.
*******************************************/

/*
exports.[Route Title] = async (req, res){
knex..select('*') 
    .from('[Table]]') 
    .then([Records Retrieved]] => {
      res.json([Records Retrieved]) // Set the results as the records
     })
     .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving the data: ${err}` })
    })
*/