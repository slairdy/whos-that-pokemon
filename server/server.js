const path = require('path')
const express = require('express')

// const pokemon = require('./routes/pokemon')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

module.exports = server
