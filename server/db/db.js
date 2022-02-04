const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPokemonData
}

function getPokemonData (db = connection) {
  return db('widgets').select()
}
