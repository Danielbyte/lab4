'use strict'
const express = require('express')
const app = express()

// loading body-parser
const bodyParser = require('body-parser')

const accountRouter = require('./accountRoutes.js')

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/createaccount', accountRouter)
app.use('/cdn', express.static('public'))

const port = process.env.PORT || 3000

app.listen(port)

console.log('listening on port 3000', port)
