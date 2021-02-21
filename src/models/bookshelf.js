const knex = require('knex')({
  client: 'mysql',
  version: '8.0.20',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
})

module.exports = require('bookshelf')(knex)
